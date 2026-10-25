import { Recipe } from './recipe';

/** Parsed response containing the recipes returned by generation. */
export interface RecipeGenerationResult {
  /** Recipes produced for the generation request. */
  recipes: Recipe[];
}
