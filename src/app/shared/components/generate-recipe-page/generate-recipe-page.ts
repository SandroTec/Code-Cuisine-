import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/ingredient';
//import { RecipeSettings } from '../../interfaces/recipe-settings.interface';
//import { RecipeRequest } from '../../interfaces/recipe-request.interface';

@Component({
  selector: 'app-generate-recipe-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './generate-recipe-page.html',
  styleUrl: './generate-recipe-page.scss',
})
export class GenerateRecipePage {

  ingredients: Ingredient[] = [];
  portionCounter = signal(1);
  personCounter = signal(1);


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
}