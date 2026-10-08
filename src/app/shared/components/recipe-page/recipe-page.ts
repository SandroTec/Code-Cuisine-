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
      this.recipeService.getRecipeById(id).subscribe({
        next: recipe => {
          if (!recipe) {
            this.router.navigate(['/']);
            return;
          }
          this.recipeService.setRecipe(recipe);
          this.recipeService.likeRecipe(recipe.id, recipe.likes);
        },
        error: error => {
          console.error('Firebase error:', error);
          this.router.navigate(['/']);
        }
      });
      return;
    }
    const recipe = this.recipeService.currentRecipe();
    if (!recipe) {
      this.router.navigate(['/']);
    }
  }

  likeMeal() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe({
        next: recipe => {
          if (!recipe) {
            this.router.navigate(['/']);
            return;
          }
          this.recipeService.likeRecipe(recipe.id, recipe.likes);
        },
        error: error => {
          console.error('Firebase error:', error);
          this.router.navigate(['/']);
        }
      });
    return;
    }
  }
}