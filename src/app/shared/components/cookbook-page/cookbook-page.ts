import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { CuisineRecipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-cookbook-page',
  imports: [RouterLink],
  templateUrl: './cookbook-page.html',
  styleUrl: './cookbook-page.scss',
})
export class CookbookPage {

  /** Selected cuisine name, when one is active. */
  cusine = signal('');
  /** Service used to load cookbook recipes. */
  recipeService = inject(RecipeService);
  /** Recipes ordered by their like count. */
  mostLikedRecipes = signal<CuisineRecipe[]>([]);

  /** Loads and sorts the most liked recipes when the page initializes. */
  ngOnInit() {
     console.log('Starte Firebase-Abfrage');
    this.recipeService.getMostLikedRecipes().subscribe({
      next: recipes => {
        const sortedRecipes = Object.values(recipes ?? {})
        .sort((a,b) => b.likes -a.likes)
        console.log('sortiere Firebase-Response')
        
        this.mostLikedRecipes.set(sortedRecipes)
      },
      error: error => {
        console.error('LOAD ERROR:', error);
      }
    });
  }
}
