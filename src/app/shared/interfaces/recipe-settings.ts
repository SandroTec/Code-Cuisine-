export interface RecipeSettings {
    portions:number,
    persons:number,
    complexity: 'Quick' | 'Medium' | 'Complex';
    cuisine: 'German' | 'Italian' | 'Indian' | 'Japanese' | 'Gourmet' | 'Fusion';
    preferences: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
}
