import { Ingredient } from './ingredient';
import { Nutrition } from './nutrition';

export interface Recipe {
  id:string;
  name: string;
  cookingTime: number;
  preferences: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
  complexity: 'Quick' | 'Medium' | 'Complex';
  likes: number;
  ingredients: Ingredient[];
  extraIngredients: Ingredient[];
  directions: string[];
  nutritions: Nutrition;
}

export interface CuisineRecipe extends Recipe {
  id: string;
}