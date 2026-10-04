import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { Nutrition } from '../../interfaces/nutrition';

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {
  
  recipeService = inject(RecipeService);
  private router = inject(Router);

  ngOnInit() {
    const recipe = this.recipeService.currentRecipe();
    if (!recipe) {
      this.router.navigate(['/']);
      return;
    }

  }

  currentRecipe = this.recipeService.currentRecipe;
  

}
