import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';


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

  ngOnInit() {

    const recipe = this.recipeService.currentRecipe();

    if (!recipe) {
      this.router.navigate(['/']);
    }
  }
}
