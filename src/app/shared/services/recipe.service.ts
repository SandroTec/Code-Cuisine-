import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';
import { CuisineItem } from '../interfaces/cuisine-item';
import { CuisineRecipe, Recipe } from '../interfaces/recipe';
import { RecipeResponse } from '../interfaces/recipeResponse';
import { RecipeSettings } from '../interfaces/recipe-settings';
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
}

export interface FirebaseRecipesResponse {
  recipes: Record<string, Recipe>;
}
