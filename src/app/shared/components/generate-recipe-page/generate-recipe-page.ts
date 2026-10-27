import { Component, signal, inject, computed, Injectable } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/ingredient';
import { RecipeSettings } from '../../interfaces/recipe-settings';
import { RecipeRequest } from '../../interfaces/recipe-request';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { RecipeGenerationResult } from '../../interfaces/recipe-generation-result';
import { INGREDIENT_SUGGESTIONS } from '../../ingredients.data';
import { finalize, firstValueFrom  } from 'rxjs';

@Component({
  selector: 'app-generate-recipe-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './generate-recipe-page.html',
  styleUrl: './generate-recipe-page.scss',
})
export class GenerateRecipePage {

  /** Ingredients currently selected for the generation request. */
  ingredients: Ingredient[] = [];
  /** Number of portions selected by the user. */
  portionCounter = signal(2);
  /** Number of people selected as cooks. */
  personCounter = signal(1);
  /** Current ingredient search query. */
  searchTerm = signal('');
  /** Whether a recipe generation request is in progress. */
  isGenerating = signal(false);

  /** User-facing error from a failed generation request. */
  errorMessage = signal('');
  /** Whether the user has tried to generate with incomplete settings. */
  generationAttempted = signal(false);

  //Cuisine settings:
  complexity = signal<RecipeSettings['complexity'] | null> (null);
  cuisine = signal<RecipeSettings['cuisine'] | null> (null);
  preferences = signal<RecipeSettings['preferences']>('No preferences');

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {
      this.ingredientForm.controls.name.valueChanges.subscribe(value => {this.searchTerm.set(value ?? '')
    });
    this.showSuggestions = true;
  }

  /** Ingredient names available for autocomplete. */
  ingredientSuggestions = INGREDIENT_SUGGESTIONS;
  /** Whether the autocomplete suggestions are visible. */
  showSuggestions = false;

  /** Sets the selected ingredient and closes the suggestion list.
   * @param ingredient Ingredient name chosen from the suggestions.
   * @returns {void}
   */
  selectIngredient(ingredient: string) {
    this.ingredientForm.patchValue(
      { name: ingredient },
      { emitEvent: false }
    );

    this.searchTerm.set(ingredient);
    this.showSuggestions = false;
  }

  /** Returns matching suggestions for the current search term. */
  filteredIngredients = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();
    if (search.length < 2) return [];
    return this.ingredientSuggestions.filter(ingredient => ingredient.toLowerCase().includes(search)
    ).slice(0,5);
  });

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

  

  /** Adds the valid form values to the selected ingredients.
   * @returns {void}
   */
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
    this.showSuggestions = false;
  }

  /** Removes the ingredient at the given array index.
   * @param index Zero-based index of the ingredient to remove.
   * @returns {void}
   */
  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
  }

  editingIndex:number | null = null;

  editForm = new FormGroup({
    amount: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0.1)
    ]),
    unit: new FormControl('g', Validators.required)
  });

  /** Opens the edit form with the selected ingredient's amount and unit.
   * @param index Zero-based index of the ingredient to edit.
   * @returns {void}
   */
  editIngredient(index:number) {
    const ingredient = this.ingredients[index];
    this.editingIndex = index;
    this.editForm.patchValue({
      amount: ingredient.amount,
      unit: ingredient.unit
    });
  }

  /** Saves valid edit form values to the selected ingredient.
   * @returns {void}
   */
  saveIngredient() {
    if (this.editForm.invalid || this.editingIndex === null) {
      this.editForm.markAllAsTouched();
      return;
    }
    const { amount, unit } = this.editForm.getRawValue();
    if (amount === null) return;
    this.ingredients[this.editingIndex] = {
      ...this.ingredients[this.editingIndex],
      amount,
      unit: unit as Ingredient['unit']
    };
    this.editingIndex = null;
  }

  /** Switches between the ingredient and settings form panels.
   * @returns {void}
   */
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

  /** Placeholder for setting-related form handling. */
  setSetting() {
    
  }

  /** Increases the cook count up to its configured maximum.
   * @returns {void}
   */
  addToPersonCounter() {
    if (this.personCounter() <= 3) {
      this.personCounter.update(value => value + 1);
    }else {return}
    
  }

  /** Increases the portion count up to its configured maximum.
   * @returns {void}
   */
  addToPortionCounter() {
    if (this.portionCounter() <= 11) {
      this.portionCounter.update(value => value + 1);
    }else {return}
    
  }

  /** Decreases the portion count without going below one.
   * @returns {void}
   */
  reducePortionCounter() {
    this.portionCounter.update(value => Math.max(1, value - 1));
  }

  /** Decreases the cook count without going below one.
   * @returns {void}
   */
  reducePersonCounter() {
    
    this.personCounter.update(value => Math.max(1, value - 1));
  }

  /** Updates the requested preparation difficulty.
   * @param complexityLevel Difficulty selected by the user.
   * @returns {void}
   */
  setComplexity(complexityLevel: RecipeSettings['complexity']) {
    this.complexity.set(complexityLevel);
  }

  /** Updates the requested cuisine.
   * @param cusineValue Cuisine selected by the user.
   * @returns {void}
   */
  setCusine(cusineValue: RecipeSettings['cuisine']) {
    this.cuisine.set(cusineValue);
  }

  /** Updates the requested dietary preference.
   * @param preferenceValue Dietary preference selected by the user.
   * @returns {void}
   */
  setPreferences(preferenceValue: RecipeSettings['preferences']) {
    this.preferences.set(preferenceValue);
  }

  /** Builds the generation settings when required choices are available.
   * @returns The selected settings, or `null` when cuisine or difficulty is missing.
   */
  getSettigns(): RecipeSettings | null {
    if (!this.complexity() || !this.cuisine()) return null;
    
    return {
      portions: this.portionCounter(),
      persons: this.personCounter(),
      complexity: this.complexity()!,
      cuisine: this.cuisine()!,
      preferences: this.preferences(),
    }
  }

 

  /** Placeholder for loading recipes. */
  getAllRecipes() {
      
  }

  /** Generates recipes, validates the response, saves new entries, and opens results.
   * @returns {void}
   */
  generateRecipe() {
    this.generationAttempted.set(true);
    const settings = this.getSettigns();
    if (!settings) return;
    const request: RecipeRequest = {
      ingredients: this.ingredients,
      settings: settings
    };
    this.recipeService.setGenerationSettings(settings);
    this.isGenerating.set(true);
    this.errorMessage.set('');

    this.recipeService.generateRecipe(request).subscribe({
        next: async response => {
          let recipeResponseValidated = false;
          try {
            const result: RecipeGenerationResult = JSON.parse(response.output);
            if (!Array.isArray(result.recipes) || result.recipes.length !== 3) {
              throw new Error('Invalid recipe response');
            }
            const validatedRecipes = result.recipes.map(recipe => ({
              ...recipe,
              cuisine: this.recipeService.validateCuisine(recipe.cuisine),
              cookingPerson: settings.persons
            }));
            if (!validatedRecipes.every(recipe => this.recipeService.hasBasicRecipeFields(recipe))) {
              throw new Error('Recipe validation failed');
            }
            recipeResponseValidated = true;
            await firstValueFrom(this.recipeService.getRecipes());
            console.log(
              'New recipes:',
              validatedRecipes
            );

            console.log(
              'Existing recipes:',
              this.recipeService.allRecipes()
            );
            
            const newRecipes = this.recipeService.filterNewRecipes(validatedRecipes);
            if (newRecipes.length > 0) {
              await this.recipeService.saveRecipes(newRecipes);
            }
            this.recipeService.setAiRecipes(validatedRecipes);
            const navigated = await this.router.navigate(['/recipe-result']);
            if (!navigated) {
              throw new Error('Could not open recipe results');
            }
          } catch (error) {
            console.error('Recipe processing error:', error);
            if (!recipeResponseValidated) {
              this.errorMessage.set(
                'The recipe service returned an invalid response. Please try again.'
              );
            } else {
              this.errorMessage.set(
                'Your recipes were created, but could not be saved or opened. Please try again.'
              );
            }
          } finally {
            this.isGenerating.set(false);
          }
        },
        error: error => {
          console.error('n8n error:', error);
          if (error.status === 429) {
            this.errorMessage.set('The daily recipe generation limit has been reached. Please try again later.');
          } else if (error.status === 0) {
            this.errorMessage.set('Could not connect to the recipe service. Please try again later.');
          } else if (error.status >= 500) {
            this.errorMessage.set('The recipe service is temporarily unavailable. Please try again later.');
          } else {
            this.errorMessage.set('The recipe request failed. Please check your selections and try again.');
          }
          this.isGenerating.set(false);
        }});
  }
  
}
