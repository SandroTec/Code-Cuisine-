import { Component, signal, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/ingredient';
import { RecipeSettings } from '../../interfaces/recipe-settings';
import { RecipeRequest } from '../../interfaces/recipe-request';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-generate-recipe-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './generate-recipe-page.html',
  styleUrl: './generate-recipe-page.scss',
})
export class GenerateRecipePage {

  ingredients: Ingredient[] = [];
  portionCounter = signal(2);
  personCounter = signal(1);

  //Cuisine settings:
  complexity = signal<RecipeSettings['complexity'] | null> (null);
  cuisine = signal<RecipeSettings['cuisine'] | null> (null);
  preferences = signal<RecipeSettings['preferences']>('No preferences');

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ingredientForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    amount: new FormControl<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0.1)
      ]
    }),

    unit: new FormControl<'g' | 'ml' | 'piece'>('g', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  addIngredient() {
    if (this.ingredientForm.invalid) {
      this.ingredientForm.markAllAsTouched();
      return;
    }
    const value = this.ingredientForm.getRawValue();
    if (value.amount === null) {
      return;
    }
    const ingredient: Ingredient = {
      name: value.name.trim(),
      amount: value.amount,
      unit: value.unit
    };
    this.ingredients.push(ingredient);
    this.ingredientForm.reset({name: '', amount: null, unit: 'g'});
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
  }

  toggleDesign() {
    const ingredientDesign = document.getElementById('ingredientsForm');
    const settingsDesign = document.getElementById('settingsForm');
    if (ingredientDesign?.classList.contains('d-none')) {
      ingredientDesign.classList.remove('d-none');
      settingsDesign?.classList.add('d-none');
    }else {
      ingredientDesign?.classList.add('d-none');
      settingsDesign?.classList.remove('d-none');
    }
  }

  setSetting() {
    
  }

  addToPersonCounter() {
    this.personCounter.update(value => value + 1);
  }

  addToPortionCounter() {
    this.portionCounter.update(value => value + 1);
  }

  reducePortionCounter() {
    this.portionCounter.update(value => Math.max(1, value - 1));
  }

  reducePersonCounter() {
    
    this.personCounter.update(value => Math.max(1, value - 1));
  }

  setComplexity(complexityLevel: RecipeSettings['complexity']) {
    this.complexity.set(complexityLevel);
  }

  setCusine(cusineValue: RecipeSettings['cuisine']) {
    this.cuisine.set(cusineValue);
  }

  setPreferences(preferenceValue: RecipeSettings['preferences']) {
    this.preferences.set(preferenceValue);
  }

  getSettigns(): RecipeSettings | null {
    if (!this.complexity() || !this.cuisine) return null;
    
    return {
      portions: this.portionCounter(),
      persons: this.personCounter(),
      complexity: this.complexity()!,
      cuisine: this.cuisine()!,
      preferences: this.preferences(),
    }
  }

  generateRecipe() {
    const settings = this.getSettigns();
    if (!settings) return;
    const request: RecipeRequest = {
      ingredients: this.ingredients,
      settings: settings
    }
    console.log(request);

    this.recipeService.generateRecipe(request).subscribe({
    next: response => {
      const recipe = response.output;
      console.log(recipe);
      this.recipeService.setRecipe(recipe);
      this.router.navigate(['/recipe']);
    },

    error: error => {
      console.error('n8n error:', error);
    }
  });

  }

}