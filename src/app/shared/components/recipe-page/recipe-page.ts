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
/** Displays a recipe and lets the user like it or collapse its sections. */
export class RecipePage {

  /** Provides the currently selected recipe and like operations. */
  recipeService = inject(RecipeService);

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  /** Whether the current recipe is already liked in this browser. */
  liked = signal(false);
  /** Whether the ingredients section is expanded. */
  ingredientsVisible = signal(true);
  /** Whether the directions section is expanded. */
  directionsVisible = signal(true);

  /** Signal containing the currently selected recipe. */
  currentRecipe = this.recipeService.currentRecipe;

  /** Toggles the ingredient list visibility.
   * @returns {void}
   */
  toggleIngredients() {
    this.ingredientsVisible.update(visible => !visible);
  }

  /** Toggles the preparation directions visibility.
   * @returns {void}
   */
  toggleDirections() {
    this.directionsVisible.update(visible => !visible);
  }

  /** Image paths used to identify the assigned chefs. */
  chefIcons: string[] = [
    '/assets/img/chef-icons/Cook-01.png',
    '/assets/img/chef-icons/Cook-02.png',
    '/assets/img/chef-icons/Cook-03.png',
    '/assets/img/chef-icons/Cook-04.png'
  ];

  /** Loads the route recipe or redirects when no recipe is available. */
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

  /** Restores the liked state from this browser's local storage.
   * @param id Recipe identifier to check.
   * @returns {void}
   */
  checkIfLiked(id:string) {
    const likedRecipes = JSON.parse(
      localStorage.getItem('likedRecipes') ?? '[]'
    ) as string[];
    this.liked.set(likedRecipes.includes(id));
  }

  /** Likes the current recipe once and stores the choice locally.
   * @returns {void}
   */
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
