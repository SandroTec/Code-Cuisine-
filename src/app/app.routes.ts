import { Routes } from '@angular/router';
import { LandingPage } from './shared/components/landing-page/landing-page';
import { CookbookPage } from './shared/components/cookbook-page/cookbook-page';
import { GenerateRecipePage } from './shared/components/generate-recipe-page/generate-recipe-page';


export const routes: Routes = [
    {path:"", component:LandingPage},
    {path:"cookbook", component:CookbookPage},
    {path:"generate-recipe", component:GenerateRecipePage},
]