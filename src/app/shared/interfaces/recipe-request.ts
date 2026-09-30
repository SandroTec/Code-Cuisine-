import { Ingredient } from "./ingredient";
import { RecipeSettings } from "./recipe-settings";

export interface RecipeRequest {
    ingredients: Ingredient[];
    settings: RecipeSettings;
}
