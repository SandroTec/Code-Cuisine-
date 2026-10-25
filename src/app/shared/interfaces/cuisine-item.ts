/** Summary data displayed for a recipe in cuisine collections. */
export interface CuisineItem {
  /** Unique recipe identifier. */
  id: string;
  /** Display name of the recipe. */
  name: string;
  /** Preparation time in minutes. */
  cookingTime: number;
  /** Dietary preference associated with the recipe. */
  preferences: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
  /** Preparation difficulty. */
  complexity: 'Quick' | 'Medium' | 'Complex';
  /** Number of likes received. */
  likes: number;
}

