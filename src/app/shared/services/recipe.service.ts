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
export class RecipeService {

  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook-test/ec7e4e3a-0690-443c-9347-e51b9e8c0ee2';


  private db = inject(Database);

  async saveRecipes(recipes: Recipe[]): Promise<void> {
    const updates: Record<string, Recipe> = {};
    for (const recipe of recipes) {
      const recipeRef = push(ref(this.db, 'recipes'));
      const id = recipeRef.key;

      if (!id) {
        throw new Error('Could not generate recipe ID');
      }
      updates[`recipes/${recipe.cuisine}/${id}`] = recipe;
    }
    await update(ref(this.db), updates);
  }

  currentRecipe = signal<Recipe | null>(null);
  aiRecipes = signal<Recipe[] | null>(null);
  generationSettings = signal<RecipeSettings | null>(null);
  allRecipes = signal<Record<string, CuisineRecipe>>({});

  generateRecipe(request: RecipeRequest) {
    return this.http.post<RecipeResponse>(this.webhookUrl, request);
  }

  setRecipe(recipe: Recipe) {
    this.currentRecipe.set(recipe);
  }

  setAiRecipes(recipes: Recipe[]) {
    this.aiRecipes.set(recipes);
  }

  setGenerationSettings(settings: RecipeSettings) {
    this.generationSettings.set(settings);
  }

  private firebaseUrl = 'https://code-a-cuisine-db-default-rtdb.europe-west1.firebasedatabase.app/recipes';

  getRecipes() {
    return this.http
      .get<Record<string, CuisineRecipe> | null>(`${this.firebaseUrl}.json`)
      .pipe(
        tap(recipes => {
          this.allRecipes.set(recipes ?? {});
        })
      );
  }

  getRecipeById(id: string) {
    return this.http.get<Recipe | null>(
      `${this.firebaseUrl}/${id}.json`
    );
  }

  likeRecipe(recipeId: string, currentLikes: number) {
    return this.http.put<number>(
      `${this.firebaseUrl}/${recipeId}/likes.json`,
      currentLikes + 1
    );
  }

  getMostLikedRecipes() {
    const params = {
      orderBy: '"likes"',
      startAt: '5',
      limitToLast: '10'
    };

    return this.http.get<Record<string, CuisineRecipe> | null>(
      `${this.firebaseUrl}.json`,
      { params }
    );
  }

  private readonly allowedCuisines: Cuisine[] = [
    'german',
    'italian',
    'indian',
    'japanese',
    'gourmet',
    'fusion'
  ];

  private readonly allowedPreferences: Preferences[] = [
    'Vegetarian',
    'Vegan',
    'Keto',
    'No preferences'
  ];

  private readonly allowedComplexities: Complexity[] = [
    'Quick',
    'Medium',
    'Complex'
  ];

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
    if (!('cuisine' in recipe) || typeof recipe.cuisine !== 'string' || !this.allowedCuisines.some(value => value === recipe.cuisine)) {
      return false;
    }
    if (!('ingredients' in recipe) || !Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0 || !recipe.ingredients.every(ingredient => this.isValidIngredient(ingredient))) {
      return false;
    }
    if (!('extraIngredients' in recipe) || !Array.isArray(recipe.extraIngredients) || !recipe.extraIngredients.every(ingredient => this.isValidIngredient(ingredient))) {
      return false;
    }
    if (!('directions' in recipe) || !Array.isArray(recipe.directions) || recipe.directions.length === 0 || !recipe.directions.every(direction => typeof direction === 'string' && direction.trim() !== '')) {
      return false;
    }
    if (!('nutritions' in recipe) || typeof recipe.nutritions !== 'object' || recipe.nutritions === null || Array.isArray(recipe.nutritions)) {
      return false;
    }
    return true;
  }

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

export interface FirebaseRecipesResponse {
  recipes: Record<string, Recipe>;
}
