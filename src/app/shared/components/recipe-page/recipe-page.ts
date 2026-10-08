import { Component, inject, signal } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

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

  liked = signal(false);

  currentRecipe = this.recipeService.currentRecipe;


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.checkIfLiked(id);
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

  checkIfLiked(id:string) {
    const likedRecipes = JSON.parse(
      localStorage.getItem('likedRecipes') ?? '[]'
    ) as string[];
    this.liked.set(likedRecipes.includes(id));
  }

  likeMeal() {
    const recipe = this.currentRecipe();
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || !recipe || this.liked()) {
      return;
    }

    this.recipeService
      .likeRecipe(id, recipe.likes)
      .subscribe({
        next: newLikes => {
          recipe.likes = newLikes;
          this.recipeService.setRecipe({ ...recipe });
          const likedRecipes = JSON.parse(localStorage.getItem('likedRecipes') ?? '[]') as string[]
          likedRecipes.push(id);
          localStorage.setItem(
            'likedRecipes',
            JSON.stringify(likedRecipes)
          );
          this.liked.set(true);
        },
        error: error => {
          console.error('Like failed:', error);
        }
      });
  }
}