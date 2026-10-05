import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {

  recipeService = inject(RecipeService);

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentRecipe = this.recipeService.currentRecipe;

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const recipe = this.recipeService.getRecipeById(id);

      if (!recipe) {
        this.router.navigate(['/']);
        return;
      }

      this.recipeService.setRecipe(recipe);
      return;
    }

    const recipe = this.recipeService.currentRecipe();

    if (!recipe) {
      this.router.navigate(['/']);
    }
  }
}