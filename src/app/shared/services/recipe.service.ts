import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';
import { CuisineItem } from '../interfaces/cuisine-item';
import { Cuisine, CuisineRecipe, Recipe } from '../interfaces/recipe';
import { RecipeResponse } from '../interfaces/recipeResponse';
import { RecipeSettings } from '../interfaces/recipe-settings';
import { Preferences } from '../interfaces/recipe';
import { Complexity } from '../interfaces/recipe';
import { map, tap } from 'rxjs';
import { Database, ref, push, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
/** Handles recipe state, generation requests, and Firebase recipe data. */
export class RecipeService {

  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook/ec7e4e3a-0690-443c-9347-e51b9e8c0ee2';


  private db = inject(Database);

  /** Saves recipes under generated Firebase database keys.
   * @param recipes Recipes to persist.
   * @returns A promise that resolves when the database update completes.
   */
  async saveRecipes(recipes: Recipe[]): Promise<void> {
    const updates: Record<string, Recipe> = {};
    for (const recipe of recipes) {
      const recipeRef = push(ref(this.db, 'recipes'));
      const id = recipeRef.key;

      if (!id) {
        throw new Error('Could not generate recipe ID');
      }
      updates[`recipes/${id}`] = recipe;
    }
    await update(ref(this.db), updates);
  }

  /** Currently selected recipe shared between pages. */
  currentRecipe = signal<Recipe | null>(null);
  /** Recipes returned by the most recent generation request. */
  aiRecipes = signal<Recipe[] | null>(null);
  /** Settings used by the most recent generation request. */
  generationSettings = signal<RecipeSettings | null>(null);
  /** Cached recipes keyed by Firebase ID. */
  allRecipes = signal<Record<string, CuisineRecipe>>({});

  /** Sends ingredients and settings to the recipe-generation endpoint.
   * @param request Ingredients and preferences for recipe generation.
   * @returns An observable of the generation endpoint response.
   */
  generateRecipe(request: RecipeRequest) {
    return this.http.post<RecipeResponse>(this.webhookUrl, request);
  }

  /** Sets the recipe currently displayed by the detail page.
   * @param recipe Recipe to select.
   * @returns {void}
   */
  setRecipe(recipe: Recipe) {
    this.currentRecipe.set(recipe);
  }

  /** Stores the recipes returned by generation.
   * @param recipes Generated recipes to store.
   * @returns {void}
   */
  setAiRecipes(recipes: Recipe[]) {
    this.aiRecipes.set(recipes);
  }

  /** Stores the settings used for the generation request.
   * @param settings Settings to store.
   * @returns {void}
   */
  setGenerationSettings(settings: RecipeSettings) {
    this.generationSettings.set(settings);
  }

  /** Firebase URL for the recipes collection. */
  private firebaseUrl = 'https://code-a-cuisine-db-default-rtdb.europe-west1.firebasedatabase.app/recipes';

  /** Fetches all recipes and refreshes the local recipe cache.
   * @returns An observable of recipes keyed by Firebase ID, or `null` when empty.
   */
  getRecipes() {
    return this.http
      .get<Record<string, CuisineRecipe> | null>(`${this.firebaseUrl}.json`)
      .pipe(
        tap(recipes => {
          this.allRecipes.set(recipes ?? {});
        })
      );
  }

  /** Fetches one recipe by its Firebase ID.
   * @param id Firebase ID of the recipe to fetch.
   * @returns An observable of the recipe, or `null` when it does not exist.
   */
  getRecipeById(id: string) {
    return this.http.get<Recipe | null>(
      `${this.firebaseUrl}/${id}.json`
    );
  }

  /** Increments a recipe's like count in Firebase.
   * @param recipeId Firebase ID of the recipe to update.
   * @param currentLikes Current like count before the increment.
   * @returns An observable containing the updated like count.
   */
  likeRecipe(recipeId: string, currentLikes: number) {
    return this.http.put<number>(
      `${this.firebaseUrl}/${recipeId}/likes.json`,
      currentLikes + 1
    );
  }

  /** Fetches up to ten recipes with the highest like counts.
   * @returns An observable of matching recipes keyed by Firebase ID, or `null` when empty.
   */
  getMostLikedRecipes() {
    const params = {
      orderBy: '"likes"',
      startAt: '1',
      limitToLast: '10'
    };

    return this.http.get<Record<string, CuisineRecipe> | null>(
      `${this.firebaseUrl}.json`,
      { params }
    );
  }

  /** Normalized cuisine values accepted from generated data. */
  private readonly allowedCuisines: Cuisine[] = [
    'german',
    'italian',
    'indian',
    'japanese',
    'gourmet',
    'fusion'
  ];

  /** Dietary preference values accepted from generated data. */
  private readonly allowedPreferences: Preferences[] = [
    'Vegetarian',
    'Vegan',
    'Keto',
    'No preferences'
  ];

  /** Difficulty values accepted from generated data. */
  private readonly allowedComplexities: Complexity[] = [
    'Quick',
    'Medium',
    'Complex'
  ];

  /** Returns a supported cuisine or falls back to `fusion`.
   * @param cuisine Untrusted cuisine value to validate.
   * @returns A supported normalized cuisine value.
   */
  validateCuisine(cuisine: unknown): Cuisine {
    if (typeof cuisine !== 'string') {
    return 'fusion';
  }
    const aiCuisine = cuisine.toLowerCase().trim();
      if (this.allowedCuisines.some(allowed => allowed === aiCuisine)) {
        return aiCuisine as Cuisine;
      } else {
        return 'fusion'
      }
  }

  /** Checks that generated recipe data contains the required valid fields.
   * @param recipe Untrusted value to validate.
   * @returns `true` when the value has the required recipe fields.
   */
  hasBasicRecipeFields(recipe: unknown): boolean {
    if (typeof recipe !== 'object' || recipe === null || Array.isArray(recipe)) {
      return false;
    }
    if (!('name' in recipe) || typeof recipe.name !== 'string' || recipe.name.trim() === '') {
      return false;
    }
    if (!('cookingTime' in recipe) || typeof recipe.cookingTime !== 'number' || !Number.isFinite(recipe.cookingTime) || recipe.cookingTime <= 0) {
      return false;
    }
    if (!('cookingPerson' in recipe) || typeof recipe.cookingPerson !== 'number' || !Number.isInteger(recipe.cookingPerson) ||recipe.cookingPerson <= 0) {
      return false;
    }
    if (!('preferences' in recipe) || typeof recipe.preferences !== 'string' || !this.allowedPreferences.some(value => value === recipe.preferences)) {
      return false;
    }
    if (!('complexity' in recipe) || typeof recipe.complexity !== 'string' || !this.allowedComplexities.some(value => value === recipe.complexity)) {
      return false;
    }
    if (!('likes' in recipe) || typeof recipe.likes !== 'number' || !Number.isInteger(recipe.likes) ||recipe.likes < 0) {
      return false;
    }
    if (!('cuisine' in recipe) || typeof recipe.cuisine !== 'string' || !this.allowedCuisines.some(value => value == recipe.cuisine)) {
      return false;
    }
    if (!('ingredients' in recipe) || !Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0 || !recipe.ingredients.every(ingredient => this.isValidIngredient(ingredient))) {
      return false;
    }
    if (!('extraIngredients' in recipe) || !Array.isArray(recipe.extraIngredients) || !recipe.extraIngredients.every(ingredient => this.isValidIngredient(ingredient))) {
      return false;
    }
    if (!('directions' in recipe) || !Array.isArray(recipe.directions) || recipe.directions.length < 3 || !recipe.directions.every(direction => typeof direction === 'object' && direction !== null && !Array.isArray(direction) && 'headline' in direction && typeof direction.headline === 'string' && direction.headline.trim().length > 0 && 'description' in direction && typeof direction.description === 'string' && direction.description.trim().length > 0)) {
      return false;
    }
    if (!('nutritions' in recipe) || typeof recipe.nutritions !== 'object' || recipe.nutritions === null || Array.isArray(recipe.nutritions)) {
      return false;
    }
    return true;
  }

  /** Checks whether an unknown value has the required ingredient fields.
   * @param value Untrusted ingredient value to validate.
   * @returns `true` when the value is a valid ingredient.
   */
  private isValidIngredient(value: unknown): boolean {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      return false;
    }
    if (!('name' in value) || typeof value.name !== 'string' || value.name.trim() === '') {
      return false;
    }
    if (!('amount' in value) || typeof value.amount !== 'number' || !Number.isFinite(value.amount) || value.amount <= 0) {
      return false;
    }
    if (!('unit' in value) || typeof value.unit !== 'string' || value.unit.trim() === '') {
      return false;
    }
    return true;
  }

  /** Removes recipes whose names already exist in the local cache.
   * @param newRecipes Recipes to compare with the cache.
   * @returns Recipes whose normalized names are not already present.
   */
  filterNewRecipes(newRecipes: Recipe[]): Recipe[] {
    const existingRecipes = Object.values(this.allRecipes());

    return newRecipes.filter(newRecipe => {
      return !existingRecipes.some(existingRecipe =>
        existingRecipe.name.trim().toLowerCase() ===
        newRecipe.name.trim().toLowerCase()
      );
    });
  }

}

/** Shape of a Firebase response containing recipe records. */
export interface FirebaseRecipesResponse {
  /** Recipe records keyed by their Firebase IDs. */
  recipes: Record<string, Recipe>;
}
