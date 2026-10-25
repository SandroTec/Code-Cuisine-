import { Ingredient } from './ingredient';
import { Nutrition } from './nutrition';
import { DirectionStep } from './direction-step';

/** Complete recipe data used by the application. */
export interface Recipe {
  /** Unique recipe identifier. */
  id:string;
  /** Recipe title. */
  name: string;
  /** Cuisine category. */
  cuisine:Cuisine;
  /** Preparation time in minutes. */
  cookingTime:number;
  /** Number of people cooking together. */
  cookingPerson:number;
  /** Dietary preference associated with the recipe. */
  preferences: Preferences;
  /** Preparation difficulty. */
  complexity: Complexity;
  /** Number of likes received. */
  likes: number;
  /** Ingredients supplied for the recipe. */
  ingredients: Ingredient[];
  /** Additional ingredients used by the recipe. */
  extraIngredients: Ingredient[];
  /** Ordered preparation instructions. */
  directions: DirectionStep[];
  /** Nutritional values for the recipe. */
  nutritions: Nutrition;
}

/** Recipe type presented in cuisine lists. */
export interface CuisineRecipe extends Recipe {
  id: string;
}

/** Supported cuisine categories stored for recipes. */
export type Cuisine =
  | 'german'
  | 'italian'
  | 'indian'
  | 'japanese'
  | 'gourmet'
  | 'fusion';

/** Supported dietary preference labels. */
export type Preferences = 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';

/** Supported recipe preparation difficulty labels. */
export type Complexity = 'Quick' | 'Medium' | 'Complex';
