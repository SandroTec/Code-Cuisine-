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

  recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  cuisineName:string | null = "";

  recipes = signal<Recipe[]>([]);
  currentPage: number = 1;
  pageSize: number = 15;

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

  get paginatedRecipes() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.recipes().slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.recipes().length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
}
