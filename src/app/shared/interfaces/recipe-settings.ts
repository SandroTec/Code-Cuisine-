/** User preferences that control recipe generation. */
export interface RecipeSettings {
    /** Number of portions to prepare. */
    portions:number,
    /** Number of people cooking together. */
    persons:number,
    /** Requested preparation difficulty. */
    complexity: 'Quick' | 'Medium' | 'Complex';
    /** Requested cuisine. */
    cuisine: 'German' | 'Italian' | 'Indian' | 'Japanese' | 'Gourmet' | 'Fusion';
    /** Requested dietary preference. */
    preferences: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences';
}
