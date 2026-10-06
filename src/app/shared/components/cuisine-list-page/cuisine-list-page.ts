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
          const allRecipes = Object.values(data);

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

  
}
