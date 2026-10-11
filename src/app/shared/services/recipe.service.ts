import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';
import { CuisineItem } from '../interfaces/cuisine-item';
import { Cuisine, CuisineRecipe, Recipe } from '../interfaces/recipe';
import { RecipeResponse } from '../interfaces/recipeResponse';
import { RecipeSettings } from '../interfaces/recipe-settings';
import { Preferences } from '../interfaces/recipe';
import { Complexity } from '../interfaces/recipe';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook-test/ec7e4e3a-0690-443c-9347-e51b9e8c0ee2';

  currentRecipe = signal<Recipe | null>(null);
  aiRecipes = signal<Recipe[] | null>(null);
  generationSettings = signal<RecipeSettings | null>(null);

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
    return this.http.get<Record<string, CuisineRecipe>>(
      `${this.firebaseUrl}.json`
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

  mostLikedRecipes() {
    return this.getRecipes().pipe(
      map(recipes => {
        const recipeArray = Object.values(recipes);

        return recipeArray.sort(
          (a, b) => b.likes - a.likes
        );
      })
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

  validateCuisine(cuisine: string): Cuisine {
    const aiCuisine = cuisine.toLowerCase().trim();
      if (this.allowedCuisines.some(allowed => allowed === aiCuisine)) {
        return aiCuisine as Cuisine;
      } else {
        return 'fusion'
      }
  }

  hasBasicRecipeFields(recipe: unknown): boolean {
    if (typeof recipe !== 'object' || recipe === null) {
      return false;
    }
    if (!('name' in recipe) || typeof recipe.name !== 'string') {
      return false;
    }
    if (!('cookingTime' in recipe) || typeof recipe.cookingTime !== 'number') {
      return false;
    }
    if (!('cookingPerson' in recipe) || typeof recipe.cookingPerson !== 'number') {
      return false;
    }
    if (!('preferences' in recipe) || typeof recipe.preferences !== 'string' || !this.allowedPreferences.some(value => value === recipe.preferences)) {
      return false;
    }
    if (!('complexity' in recipe) || typeof recipe.complexity !== 'string' || !this.allowedComplexities.some(value => value === recipe.complexity)) {
      return false;
    }
    if (!('likes' in recipe) || typeof recipe.likes !== 'number') {
      return false;
    }
    if (!('ingredients' in recipe) || !Array.isArray(recipe.ingredients)) {
      return false;
    }
    if (!('extraIngredients' in recipe) || !Array.isArray(recipe.extraIngredients)) {
      return false;
    }
    if (!('directions' in recipe) || !Array.isArray(recipe.directions)) {
      return false;
    }
   if (!('nutritions' in recipe) || typeof recipe.nutritions !== 'object' || recipe.nutritions === null || Array.isArray(recipe.nutritions)) {
    return false;
  }
    return true;
  }
}

export interface FirebaseRecipesResponse {
  recipes: Record<string, Recipe>;
}
