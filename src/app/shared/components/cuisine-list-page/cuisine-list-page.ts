import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineItem } from '../../interfaces/cuisine-item';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';


@Component({
  selector: 'app-cuisine-list-page',
  imports: [RouterLink],
  templateUrl: './cuisine-list-page.html',
  styleUrl: './cuisine-list-page.scss',
})
export class CuisineListPage {

  /** Provides recipe data from the backend. */
  recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  /** Cuisine name read from the current route. */
  cuisineName:string | null = "";

  /** All recipes matching the selected cuisine. */
  recipes = signal<Recipe[]>([]);
  /** One-based index of the currently displayed page. */
  currentPage: number = 1;
  /** Maximum number of recipes displayed on one page. */
  pageSize: number = 15;

  /** Reads the cuisine route parameter and loads matching recipes. */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cuisine = params.get('cuisine');
      this.cuisineName = cuisine;
      if (!cuisine) {
        this.recipes.set([]);
        return;
      }
      this.recipeService.getRecipes().subscribe({
        next: data => {
          const allRecipes = Object.values(data ?? {});
          const filteredRecipes = allRecipes.filter(recipe =>
            recipe.cuisine?.toLowerCase() === cuisine.toLowerCase()
          );
          this.recipes.set(filteredRecipes);
        },
        error: error => {
          console.error('Firebase error:', error);
          this.recipes.set([]);
        }
      });
    });
  }

  /** Returns the recipes for the current page. */
  get paginatedRecipes() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.recipes().slice(startIndex, endIndex);
  }

  /** Returns the number of pages required for the current recipe collection. */
  get totalPages(): number {
    return Math.ceil(this.recipes().length / this.pageSize);
  }

  /** Selects a page when its index is within the available range.
   * @param page One-based page index to display.
   * @returns {void}
   */
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
}
