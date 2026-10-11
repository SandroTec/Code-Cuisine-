import { Ingredient } from './ingredient';
import { Nutrition } from './nutrition';
import { DirectionStep } from './direction-step';

export interface Recipe {
  id:string;
  name: string;
  cuisine:Cuisine;
  cookingTime:number;
  cookingPerson:number;
  preferences: Preferences;
  complexity: Complexity;
  likes: number;
  ingredients: Ingredient[];
  extraIngredients: Ingredient[];
  directions: DirectionStep[];
  nutritions: Nutrition;
}

export interface CuisineRecipe extends Recipe {
  id: string;
}
export type Cuisine =
  | 'german'
  | 'italian'
  | 'indian'
  | 'japanese'
  | 'gourmet'
  | 'fusion';

  export type Preferences = 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';

  export type Complexity = 'Quick' | 'Medium' | 'Complex';
