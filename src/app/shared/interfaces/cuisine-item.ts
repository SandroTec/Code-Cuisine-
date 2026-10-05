export interface CuisineItem {
  id: string;
  name: string;
  cookingTime: number;
  preferences: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
  complexity: 'Quick' | 'Medium' | 'Complex';
  likes: number;
}

