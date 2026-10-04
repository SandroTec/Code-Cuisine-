import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineItem } from '../../interfaces/cuisine-item';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-cuisine-list-page',
  imports: [RouterLink],
  templateUrl: './cuisine-list-page.html',
  styleUrl: './cuisine-list-page.scss',
})
export class CuisineListPage {

  recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  cuisine = this.route.snapshot.paramMap.get('cuisine');

  cuisineList: CuisineItem[] = [];
  preferences = signal('');
  complexity = signal('');
  cookingTime = signal('');

  ngOnInit() {
    if (this.cuisine) {
      this.setCuisineList(this.cuisine);
    }
  }

  germanCuisines: CuisineItem[] = this.recipeService.germanCuisines;
  italianCuisines: CuisineItem[] = this.recipeService.italianCuisines;
  indianCuisines: CuisineItem[] = this.recipeService.indianCuisines;
  japaneseCuisines: CuisineItem[] = this.recipeService.japaneseCuisines;
  gourmetCuisines: CuisineItem[] = this.recipeService.gourmetCuisines;
  fusionCuisines: CuisineItem[] = this.recipeService.fusionCuisines;

  setCuisineList(cusine: string) {
    switch (cusine) {
      case 'german':
        this.cuisineList = this.germanCuisines;
        break;
      case 'italian':
        this.cuisineList = this.italianCuisines;
        break;
      case 'indian':
        this.cuisineList = this.indianCuisines;
        break;
      case 'japanese':
        this.cuisineList = this.japaneseCuisines;
        break;
      case 'gourmet':
        this.cuisineList = this.gourmetCuisines;
        break;
      case 'fusion':
        this.cuisineList = this.fusionCuisines;
        break;
    }
  }

  
}
