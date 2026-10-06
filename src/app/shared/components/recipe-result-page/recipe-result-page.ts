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
export class RecipeResultPage {

  recipeService = inject(RecipeService);

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentRecipe = this.recipeService.currentRecipe;
  aiRecipes = this.recipeService.aiRecipes;
  generationSettings = this.recipeService.generationSettings;

  ngOnInit() {
    const recipe = this.recipeService.aiRecipes();
    if (!recipe) {
      this.router.navigate(['/']);
    }
  }

  selectRecipe(recipe: Recipe) {
    this.recipeService.setRecipe(recipe);
    this.router.navigate(['/recipe']);
  }
}
