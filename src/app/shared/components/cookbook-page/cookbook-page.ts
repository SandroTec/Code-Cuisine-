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
  mostLikedRecipes = signal<CuisineRecipe[]>([]);

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
