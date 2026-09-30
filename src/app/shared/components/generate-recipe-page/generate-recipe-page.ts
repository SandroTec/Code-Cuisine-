import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Ingredient {
  name: string;
  amount: number;
  unit: 'g' | 'ml' | 'piece';
}

@Component({
  selector: 'app-generate-recipe-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './generate-recipe-page.html',
  styleUrl: './generate-recipe-page.scss',
})
export class GenerateRecipePage {

  ingredients: Ingredient[] = [];

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

}