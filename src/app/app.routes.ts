import { Routes } from '@angular/router';
import { LandingPage } from './shared/components/landing-page/landing-page';
import { CookbookPage } from './shared/components/cookbook-page/cookbook-page';
import { GenerateRecipePage } from './shared/components/generate-recipe-page/generate-recipe-page';
import { RecipeResultPage } from './shared/components/recipe-result-page/recipe-result-page';
import { RecipePage } from './shared/components/recipe-page/recipe-page';
import { CuisineListPage } from './shared/components/cuisine-list-page/cuisine-list-page';

export const routes: Routes = [
    {path:"", component:LandingPage},
    {path:"cookbook", component:CookbookPage},
    {path:"generate-recipe", component:GenerateRecipePage},
    {path:"recipe-result", component:RecipeResultPage},
    {path:"recipe/cuisine.id", component:RecipePage},
    {path:"cuisine-list/:cuisine", component:CuisineListPage},
]