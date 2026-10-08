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

  cusine = signal('');
  recipeService = inject(RecipeService);
  mostLikedRecipes:Recipe[] = [];

  ngOnInit() {
    this.recipeService.mostLikedRecipes().subscribe({
      next: recipes => {
        this.mostLikedRecipes = recipes;
      },
      error: error => {
        console.error('LOAD ERROR:', error);
      }
    });
  }
}
