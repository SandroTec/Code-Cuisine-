# Code à Cuisine

Code à Cuisine is a recipe discovery and generation web app built with Angular. Users can enter ingredients they have on hand, choose recipe preferences, and request recipe ideas. They can also browse recipes by cuisine, explore popular recipes in the cookbook, and open full recipes with ingredients and step-by-step directions.

## Features

- Generate three recipe suggestions from selected ingredients and preferences.
- Search ingredient suggestions while building a recipe request.
- Choose portion count, number of cooks, cuisine, dietary preference, and cooking complexity.
- View generated recipes with cooking time, preferences, complexity, and likes.
- Browse cuisine collections and paginated recipe lists.
- Open recipe details with ingredients, extra ingredients, nutrition information, and directions.
- Like a recipe once per browser using local storage.
- Responsive layouts for desktop and mobile screens.

## Application workflow

1. Start from the landing page or open **Generate recipe**.
2. Add ingredients and set the recipe preferences.
3. Submit the request. The app sends it to an n8n webhook and validates the returned recipes.
4. The generated recipes appear on the results page. New recipes are saved to Firebase Realtime Database.
5. Open a recipe for its details, or browse the cookbook and cuisine lists.

The generation request contains `ingredients` and `settings`. The webhook response is expected to contain an `output` string with JSON holding a `recipes` array.

## Tech stack

- Angular 21 with standalone components and the Angular Router
- TypeScript and SCSS
- Angular Signals and Reactive Forms
- RxJS and Angular HttpClient
- Firebase Realtime Database through AngularFire and its REST API
- Vitest through the Angular CLI unit-test builder


## Project structure

```text
src/
├── app/
│   ├── shared/
│   │   ├── components/   # Landing, generation, results, recipe, cookbook, and cuisine pages
│   │   ├── interfaces/   # Recipe, ingredient, nutrition, and settings types
│   │   ├── services/     # Recipe generation, Firebase access, and shared recipe state
│   │   └── ingredients.data.ts
│   ├── app.config.ts     # Router and Firebase providers
│   ├── app.routes.ts     # Page routes
│   └── firebase.config.ts
├── main.ts               # Application bootstrap
└── styles.scss           # Global styles
public/assets/            # Images and icons
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page |
| `/generate-recipe` | Ingredient entry and preferences |
| `/recipe-result` | Generated recipe suggestions |
| `/recipe/:id` | Recipe details loaded by ID |
| `/recipe` | Details for the currently selected generated recipe |
| `/cookbook` | Cookbook and cuisine overview |
| `/cuisine-list/:cuisine` | Recipes in a cuisine collection |

## Notes

- Recipe generation depends on the n8n workflow and is unavailable until that webhook is running.
- Recipe data and likes use Firebase Realtime Database. The browser stores liked recipe IDs in local storage.
- Firebase client configuration belongs to a browser application. Protect database access with Firebase security rules; never put service-account credentials in the frontend.
