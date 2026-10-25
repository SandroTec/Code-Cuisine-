import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';


@Component({
  selector: 'app-recipe-result-page',
  imports: [RouterLink],
  templateUrl: './recipe-result-page.html',
  styleUrl: './recipe-result-page.scss',
})
/** Displays generated recipes and opens the recipe selected by the user. */
export class RecipeResultPage {

  /** Provides recipe state shared with the other pages. */
  recipeService = inject(RecipeService);

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  /** Signal containing the currently selected recipe. */
  currentRecipe = this.recipeService.currentRecipe;
  /** Recipes returned by the latest generation request. */
  aiRecipes = this.recipeService.aiRecipes;
  /** Settings used for the latest generation request. */
  generationSettings = this.recipeService.generationSettings;

  /** Redirects to the landing page when no generated recipes are available. */
  ngOnInit() {
    const aiRecipes = this.recipeService.aiRecipes();

    if (!aiRecipes) {
      this.router.navigate(['/']);
    }
  }

  /** Selects a recipe and navigates to its detail page.
   * @param recipe Recipe selected from the results.
   * @returns {void}
   */
  selectRecipe(recipe: Recipe) {
    this.recipeService.setRecipe(recipe);
    this.router.navigate(['/recipe']);
  }
}
