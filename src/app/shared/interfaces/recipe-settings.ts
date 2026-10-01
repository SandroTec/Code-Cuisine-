export interface RecipeSettings {
    portions:number,
    persons:number,
    complexity: 'Quick' | 'Medium' | 'Complex';
    cuisine: 'german' | 'Italian' | 'Indian' | 'Japanese' | 'Gourmet' | 'Fusion';
    preferences: 'Vegetarian' | 'Vegan' | 'Keta' | 'No preferences';
}
