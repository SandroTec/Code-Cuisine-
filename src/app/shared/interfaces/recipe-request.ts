import { Ingredient } from "./ingredient";
import { RecipeSettings } from "./recipe-settings";

/** Input sent to the recipe-generation endpoint. */
export interface RecipeRequest {
    /** Ingredients supplied by the user. */
    ingredients: Ingredient[];
    /** Portion, cuisine, complexity, and dietary settings. */
    settings: RecipeSettings;
}
