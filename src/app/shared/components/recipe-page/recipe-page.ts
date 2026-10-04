import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {
  ingredients = [];
  extraIngredients = [];
  directions = [];

  recipeService = inject(RecipeService);

  //ngOnInit() {
  //  this.ingredients = this.recipeService.ingredients;
  //  this.extraIngredients = this.recipeService.extraIngredients;
  //  this.directions = this.recipeService.directions;
  //}
}
