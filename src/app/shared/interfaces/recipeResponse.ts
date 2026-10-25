import { Recipe } from './recipe';

/** HTTP response shape returned by the recipe-generation endpoint. */
export interface RecipeResponse {
  /** JSON-encoded generation output. */
  output: string;
}
