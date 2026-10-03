export interface CuisineItem {
  id: string;
  name: string;
  cookingTime: number;
  preference: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
  complexity: 'Quick' | 'Medium' | 'Complex';
  likes: number;
}