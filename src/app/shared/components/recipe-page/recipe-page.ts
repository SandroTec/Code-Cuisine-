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
  /** Whether a like update is currently being saved. */
  likeUpdating = signal(false);
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
    const likedRecipes = this.getStoredLikedRecipes();
    this.liked.set(likedRecipes.includes(id));
  }

  /** Adds or removes this browser's like and saves the updated count.
   * @returns A promise that resolves after the Firebase update finishes.
   */
  async likeMeal(): Promise<void> {
    const recipe = this.currentRecipe();
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || !recipe || this.likeUpdating()) {
      return;
    }

    this.likeUpdating.set(true);
    const wasLiked = this.liked();

    try {
      const newLikes = await this.recipeService.toggleRecipeLike(id, wasLiked);
      const nextLiked = !wasLiked;
      const likedRecipes = this.getStoredLikedRecipes();
      const updatedLikedRecipes = nextLiked
        ? [...new Set([...likedRecipes, id])]
        : likedRecipes.filter(recipeId => recipeId !== id);

      this.recipeService.setRecipe({ ...recipe, likes: newLikes });
      this.liked.set(nextLiked);
      try {
        localStorage.setItem('likedRecipes', JSON.stringify(updatedLikedRecipes));
      } catch (storageError) {
        console.warn('Could not save the like state in this browser:', storageError);
      }
    } catch (error) {
      console.error('Like update failed:', error);
    } finally {
      this.likeUpdating.set(false);
    }
  }

  /** Reads and validates the locally stored recipe IDs liked in this browser. */
  private getStoredLikedRecipes(): string[] {
    try {
      const storedValue: unknown = JSON.parse(localStorage.getItem('likedRecipes') ?? '[]');
      return Array.isArray(storedValue)
        ? storedValue.filter((id): id is string => typeof id === 'string')
        : [];
    } catch {
      return [];
    }
  }
}
