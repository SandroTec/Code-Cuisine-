import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {
  
  recipeService = inject(RecipeService);

  currentRecipe = this.recipeService.currentRecipe();
  

  //ngOnInit() {
  //  this.ingredients = this.recipeService.ingredients;
  //  this.extraIngredients = this.recipeService.extraIngredients;
  //  this.directions = this.recipeService.directions;
  //}
}
