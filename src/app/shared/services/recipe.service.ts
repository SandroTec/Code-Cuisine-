import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';
import { CuisineItem } from '../interfaces/cuisine-item';
import { CuisineRecipe, Recipe } from '../interfaces/recipe';
import { RecipeResponse } from '../interfaces/recipeResponse';
import { RecipeSettings } from '../interfaces/recipe-settings';


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
    return this.http.get<FirebaseRecipesResponse>(
      `${this.firebaseUrl}.json`
    );
  }

  getRecipeById(id: string) {
    return this.http.get<Recipe | null>(
      `${this.firebaseUrl}/${id}.json`
    );
  }


  
}

export interface FirebaseRecipesResponse {
  recipes: Record<string, Recipe>;
}
