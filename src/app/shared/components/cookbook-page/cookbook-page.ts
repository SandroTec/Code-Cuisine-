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
  mostLikedRecipes:CuisineRecipe[] = [];

  ngOnInit() {
    this.recipeService.getMostLikedRecipes().subscribe({
      next: recipes => {
        this.mostLikedRecipes = Object.values(recipes ?? {})
        .sort((a,b) => b.likes -a.likes)
      },
      error: error => {
        console.error('LOAD ERROR:', error);
      }
    });
  }
}
