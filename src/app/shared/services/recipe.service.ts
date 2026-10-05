import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';
import { CuisineItem } from '../interfaces/cuisine-item';
import { CuisineRecipe, Recipe } from '../interfaces/recipe';
import { RecipeResponse } from '../interfaces/recipeResponse';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook-test/ec7e4e3a-0690-443c-9347-e51b9e8c0ee2';

  currentRecipe = signal<Recipe | null>(null);

  generateRecipe(request: RecipeRequest) {
    return this.http.post<RecipeResponse>(this.webhookUrl, request);
  }

  setRecipe(recipe: Recipe) {
    this.currentRecipe.set(recipe);
  }

  germanCuisines: CuisineRecipe[] = [
    {
      id: 'german-001',
      name: 'Schnitzel with Potato Salad',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pork cutlet', amount: 180, unit: 'g' },
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Egg', amount: 1, unit: 'piece' },
        { name: 'Breadcrumbs', amount: 50, unit: 'g' },
        { name: 'Flour', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 30, unit: 'ml' },
        { name: 'Mustard', amount: 10, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes until tender, cool slightly, slice, and season for the salad.',
        'Flatten the pork, coat it in flour, beaten egg, and breadcrumbs.',
        'Fry the schnitzel in hot oil until golden on both sides.',
        'Serve the schnitzel with the potato salad.',
      ],
      nutritions: { calories: 760, protein: 42, carbohydrates: 67, fat: 35 },
    },

    {
      id: 'german-002',
      name: 'Bratwurst with Sauerkraut',
      cookingTime: 25,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Bratwurst', amount: 2, unit: 'piece' },
        { name: 'Sauerkraut', amount: 220, unit: 'g' },
        { name: 'Onion', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 10, unit: 'g' },
        { name: 'Mustard', amount: 15, unit: 'g' },
        { name: 'Caraway seeds', amount: 2, unit: 'g' },
      ],
      directions: [
        'Slice the onion and sauté it in butter.',
        'Add sauerkraut and caraway and warm gently.',
        'Pan-fry the bratwurst until browned and cooked through.',
        'Serve the bratwurst with sauerkraut and mustard.',
      ],
      nutritions: { calories: 610, protein: 30, carbohydrates: 14, fat: 47 },
    },

    {
      id: 'german-003',
      name: 'Currywurst with Fries',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Bratwurst', amount: 2, unit: 'piece' },
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Tomato ketchup', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Curry powder', amount: 5, unit: 'g' },
        { name: 'Vegetable oil', amount: 25, unit: 'ml' },
        { name: 'Salt', amount: 3, unit: 'g' },
      ],
      directions: [
        'Cut the potatoes into fries and bake or fry until crisp.',
        'Cook the bratwurst until browned, then slice.',
        'Warm the ketchup with curry powder to make the sauce.',
        'Top the sliced sausage with curry sauce and serve with fries.',
      ],
      nutritions: { calories: 790, protein: 28, carbohydrates: 72, fat: 43 },
    },

    {
      id: 'german-004',
      name: 'Käsespätzle',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Spaetzle', amount: 250, unit: 'g' },
        { name: 'Emmental cheese', amount: 100, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Chives', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Cook the spaetzle according to the package instructions.',
        'Slice the onion and fry in butter until golden.',
        'Layer hot spaetzle with grated cheese and let it melt.',
        'Top with fried onions, chives, and pepper.',
      ],
      nutritions: { calories: 720, protein: 31, carbohydrates: 75, fat: 32 },
    },

    {
      id: 'german-005',
      name: 'Fried Potatoes with Bacon and Onions',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 300, unit: 'g' },
        { name: 'Bacon', amount: 80, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 10, unit: 'ml' },
        { name: 'Parsley', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes until just tender, cool, and slice.',
        'Fry the bacon until crisp, then add onion.',
        'Add the potato slices and fry until golden.',
        'Season with pepper and parsley before serving.',
      ],
      nutritions: { calories: 640, protein: 20, carbohydrates: 55, fat: 38 },
    },

    {
      id: 'german-006',
      name: 'German Potato Pancakes',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 350, unit: 'g' },
        { name: 'Onion', amount: 60, unit: 'g' },
        { name: 'Egg', amount: 1, unit: 'piece' },
        { name: 'Flour', amount: 30, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 30, unit: 'ml' },
        { name: 'Salt', amount: 3, unit: 'g' },
        { name: 'Applesauce', amount: 80, unit: 'g' },
      ],
      directions: [
        'Grate the potatoes and onion and squeeze out excess liquid.',
        'Mix with egg, flour, and salt.',
        'Fry small pancakes in oil until crisp and golden on both sides.',
        'Serve with applesauce.',
      ],
      nutritions: { calories: 590, protein: 11, carbohydrates: 76, fat: 27 },
    },

    {
      id: 'german-007',
      name: 'Meatballs with Mashed Potatoes',
      cookingTime: 40,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Ground beef', amount: 180, unit: 'g' },
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
        { name: 'Egg', amount: 1, unit: 'piece' },
      ],
      extraIngredients: [
        { name: 'Milk', amount: 50, unit: 'ml' },
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Breadcrumbs', amount: 25, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes until soft.',
        'Mix ground beef with onion, egg, and breadcrumbs, then form meatballs.',
        'Pan-fry the meatballs until cooked through.',
        'Mash the potatoes with milk and butter and serve with the meatballs.',
      ],
      nutritions: { calories: 690, protein: 39, carbohydrates: 52, fat: 35 },
    },

    {
      id: 'german-008',
      name: 'German Lentil Soup',
      cookingTime: 45,
      preferences: 'Vegan',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Brown lentils', amount: 120, unit: 'g' },
        { name: 'Carrot', amount: 100, unit: 'g' },
        { name: 'Potatoes', amount: 150, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
        { name: 'Vegetable broth', amount: 500, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 10, unit: 'ml' },
        { name: 'Parsley', amount: 5, unit: 'g' },
        { name: 'Bay leaf', amount: 1, unit: 'g' },
      ],
      directions: [
        'Dice the vegetables and rinse the lentils.',
        'Sauté the onion in oil until soft.',
        'Add lentils, vegetables, broth, and bay leaf and simmer until tender.',
        'Season and finish with parsley.',
      ],
      nutritions: { calories: 430, protein: 22, carbohydrates: 68, fat: 8 },
    },

    {
      id: 'german-009',
      name: 'Pea Soup with Sausage',
      cookingTime: 50,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Split peas', amount: 120, unit: 'g' },
        { name: 'Sausage', amount: 120, unit: 'g' },
        { name: 'Carrot', amount: 80, unit: 'g' },
        { name: 'Potatoes', amount: 120, unit: 'g' },
        { name: 'Vegetable broth', amount: 500, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Onion', amount: 60, unit: 'g' },
        { name: 'Marjoram', amount: 2, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Rinse the split peas and dice the vegetables.',
        'Simmer peas, vegetables, onion, and broth until soft.',
        'Slice the sausage and warm it in the soup.',
        'Season with marjoram and pepper.',
      ],
      nutritions: { calories: 590, protein: 34, carbohydrates: 61, fat: 25 },
    },

    {
      id: 'german-010',
      name: 'Potato Soup with Sausage',
      cookingTime: 40,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 300, unit: 'g' },
        { name: 'Sausage', amount: 120, unit: 'g' },
        { name: 'Carrot', amount: 80, unit: 'g' },
        { name: 'Vegetable broth', amount: 450, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Onion', amount: 60, unit: 'g' },
        { name: 'Cream', amount: 40, unit: 'ml' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Dice potatoes, carrot, and onion.',
        'Simmer the vegetables in broth until tender.',
        'Blend part of the soup for a creamy texture.',
        'Add sliced sausage and cream, heat through, and garnish with parsley.',
      ],
      nutritions: { calories: 620, protein: 24, carbohydrates: 58, fat: 32 },
    },

    {
      id: 'german-011',
      name: 'German Goulash',
      cookingTime: 90,
      preferences: 'Keto',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Beef', amount: 220, unit: 'g' },
        { name: 'Onion', amount: 120, unit: 'g' },
        { name: 'Bell pepper', amount: 100, unit: 'g' },
        { name: 'Beef broth', amount: 250, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Tomato paste', amount: 25, unit: 'g' },
        { name: 'Paprika powder', amount: 5, unit: 'g' },
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
      ],
      directions: [
        'Cut the meat and vegetables into bite-sized pieces.',
        'Brown the meat in oil, then add onion and pepper.',
        'Stir in tomato paste, paprika, and broth.',
        'Simmer until tender and the sauce has thickened.',
      ],
      nutritions: { calories: 560, protein: 42, carbohydrates: 20, fat: 34 },
    },

    {
      id: 'german-012',
      name: 'Mustard Eggs with Potatoes',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Eggs', amount: 3, unit: 'piece' },
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Milk', amount: 180, unit: 'ml' },
        { name: 'Mustard', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Flour', amount: 15, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes and eggs.',
        'Make a light roux with butter and flour, then whisk in milk.',
        'Stir mustard into the sauce and season.',
        'Halve the eggs and serve them with potatoes and mustard sauce.',
      ],
      nutritions: { calories: 560, protein: 24, carbohydrates: 49, fat: 29 },
    },

    {
      id: 'german-013',
      name: 'Creamed Spinach with Potatoes and Fried Egg',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Spinach', amount: 220, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Cream', amount: 60, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 10, unit: 'g' },
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Nutmeg', amount: 1, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes until tender.',
        'Cook spinach with butter and garlic, then stir in cream and nutmeg.',
        'Fry the eggs to your preferred doneness.',
        'Serve potatoes with creamed spinach and fried eggs.',
      ],
      nutritions: { calories: 540, protein: 23, carbohydrates: 48, fat: 29 },
    },

    {
      id: 'german-014',
      name: 'Schupfnudeln with Sauerkraut',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Schupfnudeln', amount: 250, unit: 'g' },
        { name: 'Sauerkraut', amount: 220, unit: 'g' },
        { name: 'Onion', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Caraway seeds', amount: 2, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Fry the Schupfnudeln in butter until golden.',
        'Add sliced onion and cook until soft.',
        'Stir in sauerkraut and caraway.',
        'Heat through, season, and serve.',
      ],
      nutritions: { calories: 570, protein: 14, carbohydrates: 82, fat: 20 },
    },

    {
      id: 'german-015',
      name: 'Flammkuchen',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Flour', amount: 160, unit: 'g' },
        { name: 'Crème fraîche', amount: 100, unit: 'g' },
        { name: 'Bacon', amount: 80, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Water', amount: 80, unit: 'ml' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Mix flour, water, and oil into a smooth dough and roll it very thin.',
        'Spread crème fraîche over the dough.',
        'Top with sliced onion and bacon.',
        'Bake at high heat until crisp and browned.',
      ],
      nutritions: { calories: 760, protein: 24, carbohydrates: 78, fat: 38 },
    },

    {
      id: 'german-016',
      name: 'Chicken Fricassee with Rice',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 180, unit: 'g' },
        { name: 'Rice', amount: 90, unit: 'g' },
        { name: 'Carrot', amount: 80, unit: 'g' },
        { name: 'Peas', amount: 70, unit: 'g' },
        { name: 'Chicken broth', amount: 250, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Cream', amount: 60, unit: 'ml' },
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Flour', amount: 15, unit: 'g' },
      ],
      directions: [
        'Cook the rice separately.',
        'Poach or sauté the chicken and cut it into pieces.',
        'Make a creamy sauce with butter, flour, broth, and cream, then add carrot and peas.',
        'Add chicken to the sauce and serve with rice.',
      ],
      nutritions: { calories: 650, protein: 43, carbohydrates: 65, fat: 23 },
    },

    {
      id: 'german-017',
      name: 'Pork Medallions with Mushroom Sauce',
      cookingTime: 35,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pork tenderloin', amount: 220, unit: 'g' },
        { name: 'Mushrooms', amount: 180, unit: 'g' },
        { name: 'Cream', amount: 100, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Slice the pork into medallions and season.',
        'Sear the medallions and set aside.',
        'Cook onion and mushrooms in the same pan, then add cream.',
        'Return the pork to the sauce briefly and serve.',
      ],
      nutritions: { calories: 590, protein: 48, carbohydrates: 12, fat: 39 },
    },

    {
      id: 'german-018',
      name: 'Sausage Goulash',
      cookingTime: 30,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Sausage', amount: 220, unit: 'g' },
        { name: 'Onion', amount: 120, unit: 'g' },
        { name: 'Bell pepper', amount: 100, unit: 'g' },
        { name: 'Beef broth', amount: 250, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Tomato paste', amount: 25, unit: 'g' },
        { name: 'Paprika powder', amount: 5, unit: 'g' },
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
      ],
      directions: [
        'Cut the meat and vegetables into bite-sized pieces.',
        'Brown the meat in oil, then add onion and pepper.',
        'Stir in tomato paste, paprika, and broth.',
        'Simmer until tender and the sauce has thickened.',
      ],
      nutritions: { calories: 560, protein: 42, carbohydrates: 20, fat: 34 },
    },

    {
      id: 'german-019',
      name: 'Farmer\'s Breakfast',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 250, unit: 'g' },
        { name: 'Eggs', amount: 3, unit: 'piece' },
        { name: 'Bacon', amount: 70, unit: 'g' },
        { name: 'Onion', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 10, unit: 'g' },
        { name: 'Chives', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Slice cooked potatoes and fry with bacon and onion.',
        'Beat the eggs and season.',
        'Pour the eggs over the potatoes and cook until set.',
        'Finish with chives and serve.',
      ],
      nutritions: { calories: 670, protein: 31, carbohydrates: 44, fat: 41 },
    },

    {
      id: 'german-020',
      name: 'German Cabbage and Minced Meat Skillet',
      cookingTime: 35,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Ground beef', amount: 200, unit: 'g' },
        { name: 'White cabbage', amount: 250, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
        { name: 'Beef broth', amount: 120, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
        { name: 'Paprika powder', amount: 4, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Brown the ground beef in oil.',
        'Add onion and sliced cabbage and cook until softened.',
        'Pour in broth and season with paprika and pepper.',
        'Simmer until the cabbage is tender and most liquid has reduced.',
      ],
      nutritions: { calories: 520, protein: 39, carbohydrates: 18, fat: 32 },
    }
  ];

  italianCuisines: CuisineRecipe[] = [
    {
      id: 'italian-001',
      name: 'Spaghetti Carbonara',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Spaghetti', amount: 100, unit: 'g' },
        { name: 'Guanciale', amount: 80, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Pecorino Romano', amount: 45, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Black pepper', amount: 2, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Cook the spaghetti in salted water until al dente.',
        'Fry the guanciale until crisp.',
        'Whisk eggs with grated Pecorino and black pepper.',
        'Toss hot pasta with guanciale, remove from heat, then mix in the egg mixture until creamy.',
      ],
      nutritions: { calories: 690, protein: 34, carbohydrates: 72, fat: 30 },
    },

    {
      id: 'italian-002',
      name: 'Spaghetti Aglio e Olio',
      cookingTime: 20,
      preferences: 'Vegan',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Spaghetti', amount: 100, unit: 'g' },
        { name: 'Olive oil', amount: 25, unit: 'ml' },
        { name: 'Garlic', amount: 12, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Parsley', amount: 8, unit: 'g' },
        { name: 'Chili flakes', amount: 2, unit: 'g' },
        { name: 'Salt', amount: 3, unit: 'g' },
      ],
      directions: [
        'Cook the spaghetti until al dente.',
        'Gently sauté sliced garlic and chili in olive oil.',
        'Add the pasta with a splash of cooking water.',
        'Toss with parsley and serve.',
      ],
      nutritions: { calories: 520, protein: 13, carbohydrates: 72, fat: 21 },
    },

    {
      id: 'italian-003',
      name: 'Spaghetti alla Puttanesca',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Spaghetti', amount: 100, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Olives', amount: 40, unit: 'g' },
        { name: 'Anchovies', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Capers', amount: 15, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
      ],
      directions: [
        'Cook the spaghetti until al dente.',
        'Sauté garlic and anchovies in olive oil.',
        'Add tomatoes, olives, and capers and simmer briefly.',
        'Toss the pasta with the sauce and serve.',
      ],
      nutritions: { calories: 550, protein: 20, carbohydrates: 72, fat: 20 },
    },

    {
      id: 'italian-004',
      name: 'Penne all\'Arrabbiata',
      cookingTime: 25,
      preferences: 'Vegan',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Penne', amount: 100, unit: 'g' },
        { name: 'Tomatoes', amount: 200, unit: 'g' },
        { name: 'Garlic', amount: 10, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Chili flakes', amount: 3, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the penne until al dente.',
        'Sauté garlic and chili in olive oil.',
        'Add tomatoes and simmer until slightly reduced.',
        'Toss the penne with the sauce and garnish with parsley.',
      ],
      nutritions: { calories: 500, protein: 14, carbohydrates: 78, fat: 16 },
    },

    {
      id: 'italian-005',
      name: 'Pasta al Pomodoro',
      cookingTime: 25,
      preferences: 'Vegan',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Tomatoes', amount: 220, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Salt', amount: 3, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Sauté garlic in olive oil.',
        'Add tomatoes and simmer into a simple sauce.',
        'Toss with pasta and fresh basil.',
      ],
      nutritions: { calories: 490, protein: 14, carbohydrates: 79, fat: 14 },
    },

    {
      id: 'italian-006',
      name: 'Pasta alla Norma',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Eggplant', amount: 180, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Ricotta salata', amount: 40, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 20, unit: 'ml' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Garlic', amount: 6, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Brown the diced eggplant in olive oil.',
        'Add garlic and tomatoes and simmer.',
        'Toss with pasta and finish with ricotta salata and basil.',
      ],
      nutritions: { calories: 590, protein: 20, carbohydrates: 77, fat: 24 },
    },

    {
      id: 'italian-007',
      name: 'Pasta with Pesto Genovese',
      cookingTime: 20,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Basil', amount: 30, unit: 'g' },
        { name: 'Parmesan', amount: 35, unit: 'g' },
        { name: 'Pine nuts', amount: 20, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 25, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Blend basil, Parmesan, pine nuts, garlic, and olive oil into pesto.',
        'Loosen the pesto with a little pasta water.',
        'Toss with pasta and serve.',
      ],
      nutritions: { calories: 650, protein: 21, carbohydrates: 71, fat: 33 },
    },

    {
      id: 'italian-008',
      name: 'Cacio e Pepe',
      cookingTime: 20,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Spaghetti', amount: 100, unit: 'g' },
        { name: 'Pecorino Romano', amount: 55, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Black pepper', amount: 3, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Cook the spaghetti until al dente and reserve pasta water.',
        'Toast black pepper briefly in a pan.',
        'Mix grated Pecorino with warm pasta water into a smooth paste.',
        'Toss pasta off the heat with the cheese mixture until creamy.',
      ],
      nutritions: { calories: 590, protein: 24, carbohydrates: 72, fat: 22 },
    },

    {
      id: 'italian-009',
      name: 'Pasta e Fagioli',
      cookingTime: 40,
      preferences: 'Vegan',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Small pasta', amount: 80, unit: 'g' },
        { name: 'Cannellini beans', amount: 160, unit: 'g' },
        { name: 'Tomatoes', amount: 150, unit: 'g' },
        { name: 'Vegetable broth', amount: 300, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Onion', amount: 60, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Rosemary', amount: 2, unit: 'g' },
      ],
      directions: [
        'Sauté onion in olive oil.',
        'Add tomatoes, beans, broth, and rosemary and simmer.',
        'Add the pasta and cook until tender.',
        'Adjust seasoning and serve.',
      ],
      nutritions: { calories: 520, protein: 22, carbohydrates: 82, fat: 13 },
    },

    {
      id: 'italian-010',
      name: 'Lasagna Bolognese',
      cookingTime: 90,
      preferences: 'No preferences',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Lasagna sheets', amount: 120, unit: 'g' },
        { name: 'Ground beef', amount: 180, unit: 'g' },
        { name: 'Tomatoes', amount: 200, unit: 'g' },
        { name: 'Milk', amount: 200, unit: 'ml' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Flour', amount: 20, unit: 'g' },
        { name: 'Onion', amount: 60, unit: 'g' },
      ],
      directions: [
        'Cook the beef with onion and tomatoes into a rich ragù.',
        'Make a béchamel from butter, flour, and milk.',
        'Layer lasagna sheets with ragù, béchamel, and Parmesan.',
        'Bake until bubbling and browned, then rest before serving.',
      ],
      nutritions: { calories: 780, protein: 43, carbohydrates: 74, fat: 34 },
    },

    {
      id: 'italian-011',
      name: 'Risotto alla Milanese',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Arborio rice', amount: 90, unit: 'g' },
        { name: 'Vegetable broth', amount: 450, unit: 'ml' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'White wine', amount: 60, unit: 'ml' },
        { name: 'Saffron', amount: 1, unit: 'g' },
      ],
      directions: [
        'Sauté onion in olive oil and add the rice.',
        'Add wine and let it reduce.',
        'Add warm broth gradually while stirring until the rice is creamy and tender.',
        'Stir in Parmesan and butter, plus mushrooms or saffron as appropriate.',
      ],
      nutritions: { calories: 570, protein: 18, carbohydrates: 78, fat: 24 },
    },

    {
      id: 'italian-012',
      name: 'Mushroom Risotto',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Arborio rice', amount: 90, unit: 'g' },
        { name: 'Vegetable broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 180, unit: 'g' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'White wine', amount: 60, unit: 'ml' },
      ],
      directions: [
        'Sauté onion in olive oil and add the rice.',
        'Add wine and let it reduce.',
        'Add warm broth gradually while stirring until the rice is creamy and tender.',
        'Stir in Parmesan and butter, plus mushrooms or saffron as appropriate.',
      ],
      nutritions: { calories: 610, protein: 18, carbohydrates: 78, fat: 24 },
    },

    {
      id: 'italian-013',
      name: 'Gnocchi with Tomato Sauce',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Gnocchi', amount: 250, unit: 'g' },
        { name: 'Tomatoes', amount: 200, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Parmesan', amount: 30, unit: 'g' },
      ],
      directions: [
        'Cook the gnocchi until they float.',
        'Sauté garlic in olive oil and add tomatoes.',
        'Simmer the sauce briefly and add basil.',
        'Toss the gnocchi with the sauce and Parmesan.',
      ],
      nutritions: { calories: 590, protein: 17, carbohydrates: 91, fat: 18 },
    },

    {
      id: 'italian-014',
      name: 'Chicken Piccata',
      cookingTime: 30,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Lemon juice', amount: 40, unit: 'ml' },
        { name: 'Chicken broth', amount: 100, unit: 'ml' },
        { name: 'Butter', amount: 20, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Capers', amount: 20, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Flatten and season the chicken breast.',
        'Sear it in olive oil until cooked through.',
        'Deglaze the pan with broth and lemon juice, then add capers.',
        'Whisk in butter and spoon the sauce over the chicken.',
      ],
      nutritions: { calories: 480, protein: 49, carbohydrates: 6, fat: 28 },
    },

    {
      id: 'italian-015',
      name: 'Chicken Cacciatore',
      cookingTime: 50,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken thighs', amount: 220, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Mushrooms', amount: 120, unit: 'g' },
        { name: 'Bell pepper', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Onion', amount: 60, unit: 'g' },
        { name: 'Rosemary', amount: 2, unit: 'g' },
      ],
      directions: [
        'Brown the chicken in olive oil.',
        'Add onion, mushrooms, and bell pepper.',
        'Add tomatoes and rosemary and simmer gently.',
        'Cook until the chicken is tender and the sauce has thickened.',
      ],
      nutritions: { calories: 500, protein: 43, carbohydrates: 18, fat: 29 },
    },

    {
      id: 'italian-016',
      name: 'Eggplant Parmigiana',
      cookingTime: 55,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Eggplant', amount: 250, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Mozzarella', amount: 100, unit: 'g' },
        { name: 'Parmesan', amount: 35, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 20, unit: 'ml' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Slice and brown the eggplant.',
        'Prepare a simple tomato and garlic sauce.',
        'Layer eggplant with tomato sauce, mozzarella, Parmesan, and basil.',
        'Bake until bubbling and golden.',
      ],
      nutritions: { calories: 560, protein: 27, carbohydrates: 27, fat: 38 },
    },

    {
      id: 'italian-017',
      name: 'Margherita Pizza',
      cookingTime: 45,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pizza dough', amount: 250, unit: 'g' },
        { name: 'Tomatoes', amount: 120, unit: 'g' },
        { name: 'Mozzarella', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Stretch the pizza dough.',
        'Spread crushed tomatoes over the base.',
        'Add mozzarella and drizzle with olive oil.',
        'Bake at high heat and finish with fresh basil.',
      ],
      nutritions: { calories: 690, protein: 27, carbohydrates: 91, fat: 24 },
    },

    {
      id: 'italian-018',
      name: 'Frittata with Vegetables',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Eggs', amount: 4, unit: 'piece' },
        { name: 'Bell pepper', amount: 80, unit: 'g' },
        { name: 'Zucchini', amount: 100, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Parmesan', amount: 30, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'Parsley', amount: 5, unit: 'g' },
      ],
      directions: [
        'Chop and sauté the vegetables in olive oil.',
        'Beat the eggs with Parmesan.',
        'Pour over the vegetables and cook gently.',
        'Finish under the grill or in the oven until set.',
      ],
      nutritions: { calories: 460, protein: 30, carbohydrates: 15, fat: 31 },
    },

    {
      id: 'italian-019',
      name: 'Bruschetta with Tomato and Basil',
      cookingTime: 15,
      preferences: 'Vegan',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Bread', amount: 140, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 6, unit: 'g' },
        { name: 'Basil', amount: 8, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Toast the bread slices.',
        'Dice tomatoes and mix with olive oil, basil, and salt.',
        'Rub the warm bread with garlic.',
        'Spoon the tomato mixture over the bread and serve.',
      ],
      nutritions: { calories: 420, protein: 10, carbohydrates: 62, fat: 15 },
    },

    {
      id: 'italian-020',
      name: 'Caprese Salad',
      cookingTime: 10,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Tomatoes', amount: 200, unit: 'g' },
        { name: 'Mozzarella', amount: 125, unit: 'g' },
        { name: 'Basil', amount: 15, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Balsamic vinegar', amount: 10, unit: 'ml' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Slice the tomatoes and mozzarella.',
        'Arrange them alternately on a plate.',
        'Add basil leaves.',
        'Drizzle with olive oil and balsamic vinegar and season.',
      ],
      nutritions: { calories: 430, protein: 24, carbohydrates: 14, fat: 32 },
    }
  ];

  indianCuisines: CuisineRecipe[] = [
    {
      id: 'indian-001',
      name: 'Butter Chicken',
      cookingTime: 45,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Cream', amount: 80, unit: 'ml' },
        { name: 'Butter', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Garam masala', amount: 5, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Season and brown the chicken pieces.',
        'Cook garlic, ginger, and garam masala in butter.',
        'Add tomatoes and simmer, then blend or mash the sauce.',
        'Add cream and chicken and simmer until cooked through.',
      ],
      nutritions: { calories: 620, protein: 46, carbohydrates: 20, fat: 40 },
    },

    {
      id: 'indian-002',
      name: 'Chicken Tikka Masala',
      cookingTime: 50,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Yogurt', amount: 80, unit: 'g' },
        { name: 'Cream', amount: 60, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garam masala', amount: 5, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Marinate the chicken briefly with yogurt and spices.',
        'Brown the chicken in a hot pan.',
        'Cook tomatoes, garlic, ginger, and garam masala into a sauce.',
        'Add cream and chicken and simmer until tender.',
      ],
      nutritions: { calories: 560, protein: 47, carbohydrates: 18, fat: 33 },
    },

    {
      id: 'indian-003',
      name: 'Chicken Curry',
      cookingTime: 40,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Tomatoes', amount: 150, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
        { name: 'Coconut milk', amount: 100, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Curry powder', amount: 5, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Sauté onion, garlic, and ginger.',
        'Add curry powder and cook until fragrant.',
        'Add chicken and brown lightly, then add tomatoes and coconut milk.',
        'Simmer until the chicken is cooked and the sauce thickens.',
      ],
      nutritions: { calories: 540, protein: 45, carbohydrates: 19, fat: 31 },
    },

    {
      id: 'indian-004',
      name: 'Palak Chicken',
      cookingTime: 40,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Spinach', amount: 220, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
        { name: 'Tomatoes', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Sauté onion, garlic, ginger, and spices.',
        'Add chicken and cook until lightly browned.',
        'Add tomato and spinach and simmer.',
        'Cook until the chicken is tender and the spinach sauce is thick.',
      ],
      nutritions: { calories: 450, protein: 48, carbohydrates: 17, fat: 21 },
    },

    {
      id: 'indian-005',
      name: 'Tandoori Chicken',
      cookingTime: 50,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken thighs', amount: 220, unit: 'g' },
        { name: 'Yogurt', amount: 100, unit: 'g' },
        { name: 'Lemon juice', amount: 20, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Tandoori masala', amount: 6, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Mix yogurt, lemon juice, garlic, ginger, and tandoori masala.',
        'Coat the chicken and marinate.',
        'Roast or grill at high heat until browned and cooked through.',
        'Rest briefly before serving.',
      ],
      nutritions: { calories: 470, protein: 49, carbohydrates: 10, fat: 26 },
    },

    {
      id: 'indian-006',
      name: 'Chana Masala',
      cookingTime: 35,
      preferences: 'Vegan',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chickpeas', amount: 220, unit: 'g' },
        { name: 'Tomatoes', amount: 160, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Sauté onion, garlic, and ginger.',
        'Add garam masala and tomatoes and cook into a thick base.',
        'Add chickpeas and a splash of water.',
        'Simmer until flavorful and thick.',
      ],
      nutritions: { calories: 430, protein: 20, carbohydrates: 64, fat: 12 },
    },

    {
      id: 'indian-007',
      name: 'Dal Tadka',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Red lentils', amount: 130, unit: 'g' },
        { name: 'Tomatoes', amount: 120, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
        { name: 'Water', amount: 400, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Cumin', amount: 3, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
      ],
      directions: [
        'Simmer lentils with water until soft.',
        'Cook onion and tomato until broken down.',
        'Fry cumin and garlic in butter to make the tadka.',
        'Stir everything together and season.',
      ],
      nutritions: { calories: 470, protein: 25, carbohydrates: 66, fat: 13 },
    },

    {
      id: 'indian-008',
      name: 'Dal Makhani',
      cookingTime: 60,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Black lentils', amount: 120, unit: 'g' },
        { name: 'Kidney beans', amount: 80, unit: 'g' },
        { name: 'Tomatoes', amount: 140, unit: 'g' },
        { name: 'Cream', amount: 60, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
      ],
      directions: [
        'Cook the lentils and beans until very soft.',
        'Cook tomatoes, garlic, and spices into a sauce.',
        'Add lentils and beans and simmer slowly.',
        'Finish with butter and cream.',
      ],
      nutritions: { calories: 590, protein: 25, carbohydrates: 71, fat: 24 },
    },

    {
      id: 'indian-009',
      name: 'Aloo Gobi',
      cookingTime: 35,
      preferences: 'Vegan',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 220, unit: 'g' },
        { name: 'Cauliflower', amount: 220, unit: 'g' },
        { name: 'Tomatoes', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
        { name: 'Turmeric', amount: 2, unit: 'g' },
        { name: 'Cumin', amount: 3, unit: 'g' },
      ],
      directions: [
        'Cut the potatoes and cauliflower into small pieces.',
        'Toast cumin in oil and add turmeric.',
        'Add vegetables and tomatoes.',
        'Cover and cook until tender, stirring occasionally.',
      ],
      nutritions: { calories: 370, protein: 10, carbohydrates: 57, fat: 13 },
    },

    {
      id: 'indian-010',
      name: 'Aloo Matar',
      cookingTime: 35,
      preferences: 'Vegan',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 240, unit: 'g' },
        { name: 'Peas', amount: 120, unit: 'g' },
        { name: 'Tomatoes', amount: 120, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Cumin', amount: 3, unit: 'g' },
      ],
      directions: [
        'Sauté cumin and spices in oil.',
        'Add potatoes and tomatoes and cook briefly.',
        'Add water and simmer until potatoes are tender.',
        'Stir in peas and cook for a few more minutes.',
      ],
      nutritions: { calories: 390, protein: 12, carbohydrates: 61, fat: 12 },
    },

    {
      id: 'indian-011',
      name: 'Palak Paneer',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Paneer', amount: 180, unit: 'g' },
        { name: 'Spinach', amount: 250, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Cream', amount: 40, unit: 'ml' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
      ],
      directions: [
        'Wilt the spinach and blend it roughly.',
        'Sauté onion, garlic, and garam masala.',
        'Add spinach and simmer briefly.',
        'Add paneer cubes and cream and heat through.',
      ],
      nutritions: { calories: 600, protein: 32, carbohydrates: 20, fat: 44 },
    },

    {
      id: 'indian-012',
      name: 'Matar Paneer',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Paneer', amount: 180, unit: 'g' },
        { name: 'Peas', amount: 120, unit: 'g' },
        { name: 'Tomatoes', amount: 150, unit: 'g' },
        { name: 'Onion', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Cream', amount: 30, unit: 'ml' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
      ],
      directions: [
        'Sauté onion and garlic with spices.',
        'Add tomatoes and cook into a thick sauce.',
        'Add peas and a little water and simmer.',
        'Add paneer and cream and heat through.',
      ],
      nutritions: { calories: 620, protein: 32, carbohydrates: 31, fat: 42 },
    },

    {
      id: 'indian-013',
      name: 'Paneer Butter Masala',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Paneer', amount: 180, unit: 'g' },
        { name: 'Tomatoes', amount: 180, unit: 'g' },
        { name: 'Cream', amount: 70, unit: 'ml' },
        { name: 'Butter', amount: 20, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
        { name: 'Ginger', amount: 8, unit: 'g' },
      ],
      directions: [
        'Cook garlic, ginger, and garam masala in butter.',
        'Add tomatoes and simmer until soft.',
        'Blend or mash the sauce and add cream.',
        'Add paneer cubes and simmer gently.',
      ],
      nutritions: { calories: 680, protein: 31, carbohydrates: 23, fat: 52 },
    },

    {
      id: 'indian-014',
      name: 'Vegetable Korma',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Mixed vegetables', amount: 280, unit: 'g' },
        { name: 'Coconut milk', amount: 140, unit: 'ml' },
        { name: 'Onion', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Cashews', amount: 25, unit: 'g' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 8, unit: 'g' },
      ],
      directions: [
        'Sauté onion, garlic, and spices.',
        'Add mixed vegetables and cook briefly.',
        'Add coconut milk and simmer until tender.',
        'Stir in crushed cashews and adjust seasoning.',
      ],
      nutritions: { calories: 520, protein: 13, carbohydrates: 42, fat: 34 },
    },

    {
      id: 'indian-015',
      name: 'Chicken Biryani',
      cookingTime: 60,
      preferences: 'No preferences',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Basmati rice', amount: 100, unit: 'g' },
        { name: 'Chicken thighs', amount: 200, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
        { name: 'Yogurt', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Biryani masala', amount: 5, unit: 'g' },
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
        { name: 'Mint', amount: 8, unit: 'g' },
      ],
      directions: [
        'Rinse and partially cook the basmati rice.',
        'Cook onion with spices and add the chicken or vegetables.',
        'Layer the spiced mixture with rice and yogurt.',
        'Cover and cook gently until the rice is fluffy and the filling is fully cooked.',
      ],
      nutritions: { calories: 690, protein: 37, carbohydrates: 84, fat: 23 },
    },

    {
      id: 'indian-016',
      name: 'Vegetable Biryani',
      cookingTime: 50,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Basmati rice', amount: 100, unit: 'g' },
        { name: 'Mixed vegetables', amount: 250, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
        { name: 'Yogurt', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Biryani masala', amount: 5, unit: 'g' },
        { name: 'Vegetable oil', amount: 15, unit: 'ml' },
        { name: 'Mint', amount: 8, unit: 'g' },
      ],
      directions: [
        'Rinse and partially cook the basmati rice.',
        'Cook onion with spices and add the chicken or vegetables.',
        'Layer the spiced mixture with rice and yogurt.',
        'Cover and cook gently until the rice is fluffy and the filling is fully cooked.',
      ],
      nutritions: { calories: 570, protein: 16, carbohydrates: 84, fat: 19 },
    },

    {
      id: 'indian-017',
      name: 'Jeera Rice',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Basmati rice', amount: 100, unit: 'g' },
        { name: 'Water', amount: 220, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Cumin seeds', amount: 4, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Rinse the rice thoroughly.',
        'Toast cumin seeds in butter.',
        'Add rice and water and bring to a boil.',
        'Cover and cook gently until fluffy.',
      ],
      nutritions: { calories: 420, protein: 8, carbohydrates: 79, fat: 9 },
    },

    {
      id: 'indian-018',
      name: 'Masala Omelette',
      cookingTime: 15,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Eggs', amount: 3, unit: 'piece' },
        { name: 'Tomato', amount: 60, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
        { name: 'Chili pepper', amount: 10, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 10, unit: 'g' },
        { name: 'Coriander', amount: 5, unit: 'g' },
        { name: 'Garam masala', amount: 2, unit: 'g' },
      ],
      directions: [
        'Beat the eggs with garam masala.',
        'Finely chop tomato, onion, chili, and coriander.',
        'Sauté the vegetables briefly, then pour in the eggs.',
        'Cook until set and fold before serving.',
      ],
      nutritions: { calories: 330, protein: 22, carbohydrates: 10, fat: 23 },
    },

    {
      id: 'indian-019',
      name: 'Aloo Paratha',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Whole wheat flour', amount: 140, unit: 'g' },
        { name: 'Potatoes', amount: 220, unit: 'g' },
        { name: 'Water', amount: 90, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Cumin', amount: 2, unit: 'g' },
        { name: 'Coriander', amount: 5, unit: 'g' },
      ],
      directions: [
        'Make a soft dough from flour and water.',
        'Mash cooked potatoes with cumin and coriander.',
        'Fill rolled dough with the potato mixture and seal.',
        'Roll gently and pan-fry with butter until browned.',
      ],
      nutritions: { calories: 610, protein: 16, carbohydrates: 99, fat: 17 },
    },

    {
      id: 'indian-020',
      name: 'Vegetable Samosas',
      cookingTime: 50,
      preferences: 'Vegan',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Flour', amount: 150, unit: 'g' },
        { name: 'Potatoes', amount: 220, unit: 'g' },
        { name: 'Peas', amount: 80, unit: 'g' },
        { name: 'Water', amount: 70, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 35, unit: 'ml' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Cumin', amount: 3, unit: 'g' },
      ],
      directions: [
        'Make a firm dough from flour, water, and a little oil.',
        'Cook potatoes and peas with cumin and garam masala.',
        'Fill shaped dough with the vegetable mixture and seal.',
        'Fry or bake until crisp and golden.',
      ],
      nutritions: { calories: 650, protein: 15, carbohydrates: 91, fat: 26 },
    }
  ];

  japaneseCuisines: CuisineRecipe[] = [
    {
      id: 'japanese-001',
      name: 'Chicken Teriyaki',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Soy sauce', amount: 30, unit: 'ml' },
        { name: 'Mirin', amount: 20, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Sugar', amount: 12, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the rice.',
        'Sear the chicken until browned and cooked through.',
        'Add soy sauce, mirin, and sugar and reduce to a glossy glaze.',
        'Slice the chicken and serve over rice with spring onion and sesame.',
      ],
      nutritions: { calories: 620, protein: 48, carbohydrates: 79, fat: 12 },
    },

    {
      id: 'japanese-002',
      name: 'Teriyaki Salmon',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Salmon fillet', amount: 180, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
        { name: 'Mirin', amount: 20, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Sugar', amount: 10, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the rice.',
        'Sear the salmon on both sides.',
        'Add soy sauce, mirin, and sugar and reduce to a glaze.',
        'Serve the glazed salmon with rice and garnish.',
      ],
      nutritions: { calories: 670, protein: 42, carbohydrates: 76, fat: 22 },
    },

    {
      id: 'japanese-003',
      name: 'Chicken Katsu',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Panko breadcrumbs', amount: 60, unit: 'g' },
        { name: 'Egg', amount: 1, unit: 'piece' },
        { name: 'Flour', amount: 30, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Vegetable oil', amount: 30, unit: 'ml' },
        { name: 'Cabbage', amount: 80, unit: 'g' },
        { name: 'Tonkatsu sauce', amount: 30, unit: 'ml' },
      ],
      directions: [
        'Flatten the chicken and season.',
        'Coat in flour, beaten egg, and panko.',
        'Fry until crisp, golden, and cooked through.',
        'Slice and serve with cabbage and tonkatsu sauce.',
      ],
      nutritions: { calories: 650, protein: 48, carbohydrates: 48, fat: 29 },
    },

    {
      id: 'japanese-004',
      name: 'Katsu Curry',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 180, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Panko breadcrumbs', amount: 50, unit: 'g' },
        { name: 'Japanese curry sauce', amount: 180, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Egg', amount: 1, unit: 'piece' },
        { name: 'Flour', amount: 25, unit: 'g' },
        { name: 'Vegetable oil', amount: 25, unit: 'ml' },
      ],
      directions: [
        'Cook the rice and warm the curry sauce.',
        'Coat the chicken in flour, egg, and panko.',
        'Fry until crisp and cooked through.',
        'Slice the chicken and serve with rice and curry sauce.',
      ],
      nutritions: { calories: 790, protein: 45, carbohydrates: 97, fat: 25 },
    },

    {
      id: 'japanese-005',
      name: 'Japanese Beef Curry',
      cookingTime: 50,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Beef', amount: 180, unit: 'g' },
        { name: 'Potatoes', amount: 150, unit: 'g' },
        { name: 'Carrot', amount: 80, unit: 'g' },
        { name: 'Japanese curry sauce', amount: 180, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Onion', amount: 80, unit: 'g' },
        { name: 'Vegetable oil', amount: 10, unit: 'ml' },
        { name: 'Rice', amount: 90, unit: 'g' },
      ],
      directions: [
        'Brown the beef and onion in oil.',
        'Add potatoes and carrot.',
        'Add water and simmer until tender, then dissolve in the curry sauce.',
        'Serve with cooked rice.',
      ],
      nutritions: { calories: 760, protein: 39, carbohydrates: 88, fat: 28 },
    },

    {
      id: 'japanese-006',
      name: 'Oyakodon',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken thigh', amount: 160, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Onion', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Dashi', amount: 100, unit: 'ml' },
      ],
      directions: [
        'Cook the rice.',
        'Simmer onion and chicken in dashi, soy sauce, and mirin.',
        'Pour beaten eggs over the chicken and cook until softly set.',
        'Serve the mixture over rice.',
      ],
      nutritions: { calories: 650, protein: 40, carbohydrates: 78, fat: 20 },
    },

    {
      id: 'japanese-007',
      name: 'Gyudon',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Beef slices', amount: 180, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Onion', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Dashi', amount: 100, unit: 'ml' },
      ],
      directions: [
        'Cook the rice.',
        'Simmer onion in dashi, soy sauce, and mirin.',
        'Add the beef and cook just until tender.',
        'Serve over rice.',
      ],
      nutritions: { calories: 690, protein: 36, carbohydrates: 80, fat: 25 },
    },

    {
      id: 'japanese-008',
      name: 'Katsudon',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pork cutlet', amount: 180, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Onion', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Dashi', amount: 100, unit: 'ml' },
      ],
      directions: [
        'Cook the rice and prepare a crisp pork cutlet.',
        'Simmer onion in dashi, soy sauce, and mirin.',
        'Slice the cutlet, place it in the pan, and pour beaten egg around it.',
        'Cook until softly set and serve over rice.',
      ],
      nutritions: { calories: 780, protein: 43, carbohydrates: 88, fat: 28 },
    },

    {
      id: 'japanese-009',
      name: 'Yakisoba',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Yakisoba noodles', amount: 200, unit: 'g' },
        { name: 'Pork', amount: 100, unit: 'g' },
        { name: 'Cabbage', amount: 100, unit: 'g' },
        { name: 'Carrot', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Yakisoba sauce', amount: 35, unit: 'ml' },
        { name: 'Vegetable oil', amount: 10, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Slice the pork and vegetables.',
        'Stir-fry the pork until browned.',
        'Add vegetables and noodles and cook until hot.',
        'Add yakisoba sauce, toss well, and garnish with spring onion.',
      ],
      nutritions: { calories: 620, protein: 26, carbohydrates: 78, fat: 22 },
    },

    {
      id: 'japanese-010',
      name: 'Yaki Udon',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Udon noodles', amount: 220, unit: 'g' },
        { name: 'Cabbage', amount: 100, unit: 'g' },
        { name: 'Carrot', amount: 60, unit: 'g' },
        { name: 'Mushrooms', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
        { name: 'Sesame oil', amount: 8, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Prepare the vegetables and noodles.',
        'Stir-fry cabbage, carrot, and mushrooms.',
        'Add udon noodles and soy sauce.',
        'Toss with sesame oil and garnish with spring onion.',
      ],
      nutritions: { calories: 510, protein: 15, carbohydrates: 82, fat: 14 },
    },

    {
      id: 'japanese-011',
      name: 'Chicken Ramen',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Ramen noodles', amount: 120, unit: 'g' },
        { name: 'Chicken breast', amount: 160, unit: 'g' },
        { name: 'Broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Miso paste', amount: 30, unit: 'g' },
        { name: 'Soy sauce', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Heat the broth and dissolve in the miso paste.',
        'Cook the chicken or tofu and mushrooms in or alongside the broth.',
        'Cook the ramen noodles separately or in the broth as appropriate.',
        'Assemble noodles, broth, toppings, and spring onion.',
      ],
      nutritions: { calories: 620, protein: 39, carbohydrates: 76, fat: 18 },
    },

    {
      id: 'japanese-012',
      name: 'Miso Ramen',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Ramen noodles', amount: 120, unit: 'g' },
        { name: 'Tofu', amount: 150, unit: 'g' },
        { name: 'Broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Miso paste', amount: 30, unit: 'g' },
        { name: 'Soy sauce', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Heat the broth and dissolve in the miso paste.',
        'Cook the chicken or tofu and mushrooms in or alongside the broth.',
        'Cook the ramen noodles separately or in the broth as appropriate.',
        'Assemble noodles, broth, toppings, and spring onion.',
      ],
      nutritions: { calories: 560, protein: 25, carbohydrates: 76, fat: 18 },
    },

    {
      id: 'japanese-013',
      name: 'Miso Soup',
      cookingTime: 15,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Dashi', amount: 400, unit: 'ml' },
        { name: 'Tofu', amount: 120, unit: 'g' },
        { name: 'Miso paste', amount: 35, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Wakame', amount: 8, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Heat the dashi without boiling vigorously.',
        'Add tofu and wakame.',
        'Dissolve miso paste in a small amount of warm broth, then stir it in.',
        'Garnish with spring onion and serve.',
      ],
      nutritions: { calories: 220, protein: 18, carbohydrates: 20, fat: 9 },
    },

    {
      id: 'japanese-014',
      name: 'Japanese Fried Rice',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Cooked rice', amount: 250, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Carrot', amount: 60, unit: 'g' },
        { name: 'Peas', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Sesame oil', amount: 8, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Use cold cooked rice for the best texture.',
        'Stir-fry carrot and peas, then scramble the eggs in the pan.',
        'Add rice and stir-fry over high heat.',
        'Season with soy sauce and sesame oil and finish with spring onion.',
      ],
      nutritions: { calories: 540, protein: 18, carbohydrates: 80, fat: 17 },
    },

    {
      id: 'japanese-015',
      name: 'Okonomiyaki',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Cabbage', amount: 180, unit: 'g' },
        { name: 'Flour', amount: 90, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Water', amount: 80, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Okonomiyaki sauce', amount: 30, unit: 'ml' },
        { name: 'Mayonnaise', amount: 20, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Mix flour, eggs, and water into a batter.',
        'Fold in finely shredded cabbage.',
        'Pan-fry the mixture as a thick pancake until browned on both sides.',
        'Top with okonomiyaki sauce, mayonnaise, and spring onion.',
      ],
      nutritions: { calories: 570, protein: 20, carbohydrates: 65, fat: 25 },
    },

    {
      id: 'japanese-016',
      name: 'Onigiri',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Sushi rice', amount: 120, unit: 'g' },
        { name: 'Water', amount: 180, unit: 'ml' },
        { name: 'Nori', amount: 5, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Cook the sushi rice and let it cool slightly.',
        'Wet and salt your hands.',
        'Shape the rice firmly into triangles or balls.',
        'Wrap with nori and sprinkle with sesame seeds.',
      ],
      nutritions: { calories: 390, protein: 8, carbohydrates: 82, fat: 4 },
    },

    {
      id: 'japanese-017',
      name: 'Tamago Sando',
      cookingTime: 20,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Bread', amount: 120, unit: 'g' },
        { name: 'Eggs', amount: 3, unit: 'piece' },
        { name: 'Mayonnaise', amount: 30, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 10, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Boil the eggs and cool them.',
        'Mash with mayonnaise, salt, and pepper.',
        'Lightly butter the bread.',
        'Fill the sandwich with the egg mixture and cut neatly.',
      ],
      nutritions: { calories: 560, protein: 24, carbohydrates: 50, fat: 29 },
    },

    {
      id: 'japanese-018',
      name: 'Gyoza',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Gyoza wrappers', amount: 12, unit: 'piece' },
        { name: 'Ground pork', amount: 160, unit: 'g' },
        { name: 'Cabbage', amount: 120, unit: 'g' },
        { name: 'Spring onion', amount: 30, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Sesame oil', amount: 8, unit: 'ml' },
        { name: 'Garlic', amount: 6, unit: 'g' },
      ],
      directions: [
        'Mix pork, cabbage, spring onion, garlic, soy sauce, and sesame oil.',
        'Fill and fold the gyoza wrappers.',
        'Pan-fry the bottoms until golden.',
        'Add a splash of water, cover, and steam until cooked through.',
      ],
      nutritions: { calories: 590, protein: 30, carbohydrates: 57, fat: 27 },
    },

    {
      id: 'japanese-019',
      name: 'Teriyaki Tofu Rice Bowl',
      cookingTime: 30,
      preferences: 'Vegan',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Tofu', amount: 200, unit: 'g' },
        { name: 'Rice', amount: 100, unit: 'g' },
        { name: 'Broccoli', amount: 120, unit: 'g' },
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Sugar', amount: 10, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the rice and steam the broccoli.',
        'Pan-fry tofu until golden.',
        'Add soy sauce, mirin, and sugar and reduce to a glaze.',
        'Serve tofu and broccoli over rice and sprinkle with sesame.',
      ],
      nutritions: { calories: 590, protein: 28, carbohydrates: 82, fat: 18 },
    },

    {
      id: 'japanese-020',
      name: 'Japanese Potato Salad',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 280, unit: 'g' },
        { name: 'Carrot', amount: 60, unit: 'g' },
        { name: 'Cucumber', amount: 80, unit: 'g' },
        { name: 'Egg', amount: 1, unit: 'piece' },
      ],
      extraIngredients: [
        { name: 'Mayonnaise', amount: 40, unit: 'g' },
        { name: 'Rice vinegar', amount: 10, unit: 'ml' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes and carrot until tender.',
        'Mash the potatoes roughly.',
        'Add sliced cucumber, chopped egg, and carrot.',
        'Mix with mayonnaise, rice vinegar, and salt.',
      ],
      nutritions: { calories: 470, protein: 10, carbohydrates: 49, fat: 27 },
    }
  ];

  gourmetCuisines: CuisineRecipe[] = [
    {
      id: 'gourmet-001',
      name: 'Beef Tenderloin with Red Wine Sauce',
      cookingTime: 45,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Beef tenderloin', amount: 200, unit: 'g' },
        { name: 'Red wine', amount: 120, unit: 'ml' },
        { name: 'Beef broth', amount: 100, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Shallot', amount: 40, unit: 'g' },
        { name: 'Thyme', amount: 2, unit: 'g' },
      ],
      directions: [
        'Season the beef and sear it to the desired doneness.',
        'Remove the beef and sauté shallot in the pan.',
        'Deglaze with red wine and broth and reduce.',
        'Whisk in butter and serve the sauce with the rested beef.',
      ],
      nutritions: { calories: 610, protein: 48, carbohydrates: 8, fat: 39 },
    },

    {
      id: 'gourmet-002',
      name: 'Herb-Crusted Salmon',
      cookingTime: 30,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Salmon fillet', amount: 180, unit: 'g' },
        { name: 'Breadcrumbs', amount: 35, unit: 'g' },
        { name: 'Parsley', amount: 15, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Lemon juice', amount: 20, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Mix breadcrumbs, parsley, garlic, and olive oil.',
        'Season the salmon and press the herb crust on top.',
        'Bake until the crust is golden and the salmon is just cooked.',
        'Finish with lemon juice.',
      ],
      nutritions: { calories: 540, protein: 39, carbohydrates: 22, fat: 31 },
    },

    {
      id: 'gourmet-003',
      name: 'Creamy Truffle Pasta',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Tagliatelle', amount: 100, unit: 'g' },
        { name: 'Cream', amount: 100, unit: 'ml' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Truffle paste', amount: 15, unit: 'g' },
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Cook the tagliatelle until al dente.',
        'Warm cream and butter gently.',
        'Stir in Parmesan and truffle paste.',
        'Toss with pasta and finish with black pepper.',
      ],
      nutritions: { calories: 730, protein: 23, carbohydrates: 73, fat: 39 },
    },

    {
      id: 'gourmet-004',
      name: 'Mushroom Risotto with Parmesan',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Arborio rice', amount: 90, unit: 'g' },
        { name: 'Vegetable broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 180, unit: 'g' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
        { name: 'Onion', amount: 50, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
        { name: 'White wine', amount: 60, unit: 'ml' },
      ],
      directions: [
        'Sauté onion in olive oil and add the rice.',
        'Add wine and let it reduce.',
        'Add warm broth gradually while stirring until the rice is creamy and tender.',
        'Stir in Parmesan and butter, plus mushrooms or saffron as appropriate.',
      ],
      nutritions: { calories: 610, protein: 18, carbohydrates: 78, fat: 24 },
    },

    {
      id: 'gourmet-005',
      name: 'Duck Breast with Orange Sauce',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Duck breast', amount: 220, unit: 'g' },
        { name: 'Orange juice', amount: 100, unit: 'ml' },
        { name: 'Chicken broth', amount: 80, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Honey', amount: 15, unit: 'g' },
        { name: 'Orange zest', amount: 5, unit: 'g' },
      ],
      directions: [
        'Score the duck skin and render it slowly skin-side down.',
        'Turn and cook to the desired doneness, then rest.',
        'Reduce orange juice, broth, honey, and zest in the pan.',
        'Whisk in butter and serve with sliced duck.',
      ],
      nutritions: { calories: 690, protein: 39, carbohydrates: 20, fat: 49 },
    },

    {
      id: 'gourmet-006',
      name: 'Chicken Breast with White Wine Sauce',
      cookingTime: 35,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'White wine', amount: 100, unit: 'ml' },
        { name: 'Cream', amount: 80, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Shallot', amount: 40, unit: 'g' },
        { name: 'Thyme', amount: 2, unit: 'g' },
      ],
      directions: [
        'Season and sear the chicken until cooked through.',
        'Remove it and sauté shallot in the pan.',
        'Deglaze with white wine and reduce.',
        'Add cream and butter, then return the chicken briefly.',
      ],
      nutritions: { calories: 560, protein: 48, carbohydrates: 8, fat: 35 },
    },

    {
      id: 'gourmet-007',
      name: 'Pork Tenderloin with Mustard Cream Sauce',
      cookingTime: 40,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pork tenderloin', amount: 220, unit: 'g' },
        { name: 'Cream', amount: 90, unit: 'ml' },
        { name: 'Mustard', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Shallot', amount: 40, unit: 'g' },
        { name: 'Thyme', amount: 2, unit: 'g' },
      ],
      directions: [
        'Sear the pork until browned and nearly cooked through.',
        'Remove it and sauté shallot.',
        'Add cream and mustard and simmer into a sauce.',
        'Return the pork to finish cooking in the sauce.',
      ],
      nutritions: { calories: 590, protein: 49, carbohydrates: 9, fat: 39 },
    },

    {
      id: 'gourmet-008',
      name: 'Seared Salmon with Lemon Butter',
      cookingTime: 25,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Salmon fillet', amount: 180, unit: 'g' },
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Lemon juice', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Season the salmon and sear it until crisp on the outside.',
        'Lower the heat and finish cooking gently.',
        'Add butter, garlic, and lemon juice to the pan.',
        'Spoon the lemon butter over the salmon and garnish with parsley.',
      ],
      nutritions: { calories: 500, protein: 38, carbohydrates: 4, fat: 37 },
    },

    {
      id: 'gourmet-009',
      name: 'Garlic Butter Prawns',
      cookingTime: 20,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Prawns', amount: 220, unit: 'g' },
        { name: 'Butter', amount: 25, unit: 'g' },
        { name: 'Garlic', amount: 12, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Lemon juice', amount: 20, unit: 'ml' },
        { name: 'Parsley', amount: 8, unit: 'g' },
        { name: 'Chili flakes', amount: 2, unit: 'g' },
      ],
      directions: [
        'Pat the prawns dry and season.',
        'Melt butter and gently cook the garlic.',
        'Add prawns and cook until pink and opaque.',
        'Finish with lemon juice, parsley, and chili.',
      ],
      nutritions: { calories: 390, protein: 45, carbohydrates: 6, fat: 21 },
    },

    {
      id: 'gourmet-010',
      name: 'Steak with Peppercorn Sauce',
      cookingTime: 35,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Beef steak', amount: 220, unit: 'g' },
        { name: 'Cream', amount: 90, unit: 'ml' },
        { name: 'Beef broth', amount: 80, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Green peppercorns', amount: 8, unit: 'g' },
        { name: 'Shallot', amount: 40, unit: 'g' },
      ],
      directions: [
        'Season and sear the steak to the desired doneness, then rest.',
        'Sauté shallot in the pan.',
        'Add broth, cream, and peppercorns and reduce.',
        'Serve the sauce over or beside the sliced steak.',
      ],
      nutritions: { calories: 650, protein: 48, carbohydrates: 7, fat: 47 },
    },

    {
      id: 'gourmet-011',
      name: 'Truffle Mashed Potatoes',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 320, unit: 'g' },
        { name: 'Milk', amount: 100, unit: 'ml' },
        { name: 'Butter', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Truffle paste', amount: 12, unit: 'g' },
        { name: 'Parmesan', amount: 25, unit: 'g' },
        { name: 'Salt', amount: 2, unit: 'g' },
      ],
      directions: [
        'Boil the potatoes until very tender.',
        'Drain and mash until smooth.',
        'Warm milk and butter and mix them into the potatoes.',
        'Fold in truffle paste and Parmesan and season.',
      ],
      nutritions: { calories: 520, protein: 13, carbohydrates: 61, fat: 26 },
    },

    {
      id: 'gourmet-012',
      name: 'Goat Cheese and Beetroot Salad',
      cookingTime: 20,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Beetroot', amount: 200, unit: 'g' },
        { name: 'Goat cheese', amount: 90, unit: 'g' },
        { name: 'Mixed salad leaves', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Walnuts', amount: 25, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Balsamic vinegar', amount: 15, unit: 'ml' },
      ],
      directions: [
        'Cook or roast the beetroot until tender and slice it.',
        'Arrange salad leaves and beetroot on a plate.',
        'Crumble goat cheese and walnuts over the top.',
        'Dress with olive oil and balsamic vinegar.',
      ],
      nutritions: { calories: 510, protein: 20, carbohydrates: 27, fat: 36 },
    },

    {
      id: 'gourmet-013',
      name: 'Burrata with Roasted Tomatoes',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Burrata', amount: 125, unit: 'g' },
        { name: 'Cherry tomatoes', amount: 220, unit: 'g' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Basil', amount: 10, unit: 'g' },
        { name: 'Balsamic vinegar', amount: 10, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Roast the tomatoes with olive oil and garlic until soft.',
        'Place burrata on a serving plate.',
        'Spoon the warm tomatoes around it.',
        'Finish with basil and balsamic vinegar.',
      ],
      nutritions: { calories: 500, protein: 21, carbohydrates: 18, fat: 39 },
    },

    {
      id: 'gourmet-014',
      name: 'Caramelized Onion and Goat Cheese Tart',
      cookingTime: 45,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Puff pastry', amount: 180, unit: 'g' },
        { name: 'Onion', amount: 200, unit: 'g' },
        { name: 'Goat cheese', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Honey', amount: 12, unit: 'g' },
        { name: 'Thyme', amount: 2, unit: 'g' },
      ],
      directions: [
        'Slowly cook the sliced onions in butter until caramelized.',
        'Roll out the puff pastry and score a border.',
        'Top with onions, goat cheese, honey, and thyme.',
        'Bake until the pastry is crisp and golden.',
      ],
      nutritions: { calories: 720, protein: 20, carbohydrates: 63, fat: 44 },
    },

    {
      id: 'gourmet-015',
      name: 'Creamy Polenta with Mushrooms',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Polenta', amount: 100, unit: 'g' },
        { name: 'Mushrooms', amount: 200, unit: 'g' },
        { name: 'Vegetable broth', amount: 400, unit: 'ml' },
        { name: 'Parmesan', amount: 35, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Cream', amount: 50, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the polenta in broth until thick and creamy.',
        'Stir in butter, cream, and Parmesan.',
        'Sauté mushrooms with garlic until browned.',
        'Serve the mushrooms over the creamy polenta.',
      ],
      nutritions: { calories: 610, protein: 17, carbohydrates: 69, fat: 31 },
    },

    {
      id: 'gourmet-016',
      name: 'Parmesan-Crusted Chicken',
      cookingTime: 35,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 200, unit: 'g' },
        { name: 'Parmesan', amount: 55, unit: 'g' },
        { name: 'Breadcrumbs', amount: 35, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Egg', amount: 1, unit: 'piece' },
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Mix Parmesan, breadcrumbs, and garlic.',
        'Dip the chicken in beaten egg and coat with the Parmesan mixture.',
        'Pan-fry or bake until golden and cooked through.',
        'Rest briefly before slicing.',
      ],
      nutritions: { calories: 560, protein: 58, carbohydrates: 21, fat: 27 },
    },

    {
      id: 'gourmet-017',
      name: 'Stuffed Chicken Breast with Spinach and Cheese',
      cookingTime: 45,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 220, unit: 'g' },
        { name: 'Spinach', amount: 100, unit: 'g' },
        { name: 'Cream cheese', amount: 70, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Olive oil', amount: 15, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Parmesan', amount: 25, unit: 'g' },
      ],
      directions: [
        'Cut a pocket into the chicken breast.',
        'Mix spinach, cream cheese, garlic, and Parmesan.',
        'Stuff the chicken and secure if needed.',
        'Sear and then bake until cooked through.',
      ],
      nutritions: { calories: 570, protein: 58, carbohydrates: 8, fat: 34 },
    },

    {
      id: 'gourmet-018',
      name: 'Seared Scallops with Lemon Butter',
      cookingTime: 20,
      preferences: 'Keto',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Scallops', amount: 220, unit: 'g' },
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Lemon juice', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Parsley', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Pat the scallops very dry and season.',
        'Sear in a hot pan until deeply golden on each side.',
        'Lower the heat and add butter, garlic, and lemon juice.',
        'Baste briefly and finish with parsley.',
      ],
      nutritions: { calories: 350, protein: 39, carbohydrates: 9, fat: 17 },
    },

    {
      id: 'gourmet-019',
      name: 'Roasted Cod with Herb Butter',
      cookingTime: 30,
      preferences: 'Keto',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Cod fillet', amount: 220, unit: 'g' },
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Parsley', amount: 10, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Lemon juice', amount: 20, unit: 'ml' },
        { name: 'Garlic', amount: 5, unit: 'g' },
        { name: 'Black pepper', amount: 1, unit: 'g' },
      ],
      directions: [
        'Season the cod and place it in a baking dish.',
        'Mix butter, garlic, parsley, and lemon.',
        'Spread the herb butter over the fish.',
        'Roast until the cod flakes easily.',
      ],
      nutritions: { calories: 340, protein: 45, carbohydrates: 4, fat: 16 },
    },

    {
      id: 'gourmet-020',
      name: 'Wild Mushroom Tagliatelle',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Tagliatelle', amount: 100, unit: 'g' },
        { name: 'Wild mushrooms', amount: 200, unit: 'g' },
        { name: 'Cream', amount: 80, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 15, unit: 'g' },
        { name: 'Parmesan', amount: 35, unit: 'g' },
        { name: 'Garlic', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the tagliatelle until al dente.',
        'Brown the mushrooms in butter with garlic.',
        'Add cream and reduce slightly.',
        'Toss with pasta and Parmesan.',
      ],
      nutritions: { calories: 680, protein: 22, carbohydrates: 75, fat: 33 },
    }
  ];

  fusionCuisines: CuisineRecipe[] = [
    {
      id: 'fusion-001',
      name: 'Korean BBQ Tacos',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Beef strips', amount: 180, unit: 'g' },
        { name: 'Tortillas', amount: 3, unit: 'piece' },
        { name: 'Cabbage', amount: 100, unit: 'g' },
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Gochujang', amount: 20, unit: 'g' },
        { name: 'Sesame oil', amount: 8, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Marinate beef with soy sauce, gochujang, and sesame oil.',
        'Sear the beef over high heat.',
        'Warm the tortillas and add cabbage.',
        'Fill with beef and finish with spring onion.',
      ],
      nutritions: { calories: 650, protein: 38, carbohydrates: 62, fat: 28 },
    },

    {
      id: 'fusion-002',
      name: 'Teriyaki Chicken Tacos',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 180, unit: 'g' },
        { name: 'Tortillas', amount: 3, unit: 'piece' },
        { name: 'Cabbage', amount: 100, unit: 'g' },
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Sugar', amount: 10, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the chicken until browned.',
        'Add soy sauce, mirin, and sugar and reduce to a glaze.',
        'Warm tortillas and add cabbage.',
        'Fill with teriyaki chicken and sesame seeds.',
      ],
      nutritions: { calories: 600, protein: 43, carbohydrates: 65, fat: 19 },
    },

    {
      id: 'fusion-003',
      name: 'Tandoori Chicken Wraps',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 180, unit: 'g' },
        { name: 'Flatbreads', amount: 2, unit: 'piece' },
        { name: 'Yogurt', amount: 80, unit: 'g' },
        { name: 'Lettuce', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Tandoori masala', amount: 5, unit: 'g' },
        { name: 'Lemon juice', amount: 20, unit: 'ml' },
        { name: 'Cucumber', amount: 80, unit: 'g' },
      ],
      directions: [
        'Coat the chicken in yogurt and tandoori masala.',
        'Cook until browned and fully cooked.',
        'Warm the flatbreads and add lettuce and cucumber.',
        'Slice the chicken and wrap everything together.',
      ],
      nutritions: { calories: 610, protein: 45, carbohydrates: 63, fat: 20 },
    },

    {
      id: 'fusion-004',
      name: 'Currywurst Loaded Fries',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 300, unit: 'g' },
        { name: 'Bratwurst', amount: 2, unit: 'piece' },
        { name: 'Tomato ketchup', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Curry powder', amount: 5, unit: 'g' },
        { name: 'Mayonnaise', amount: 25, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Bake or fry the potato fries until crisp.',
        'Cook and slice the bratwurst.',
        'Mix ketchup with curry powder and spoon over the fries.',
        'Top with sausage, mayonnaise, and spring onion.',
      ],
      nutritions: { calories: 860, protein: 29, carbohydrates: 78, fat: 49 },
    },

    {
      id: 'fusion-005',
      name: 'Butter Chicken Pasta',
      cookingTime: 40,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Chicken breast', amount: 170, unit: 'g' },
        { name: 'Tomatoes', amount: 150, unit: 'g' },
        { name: 'Cream', amount: 70, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Butter', amount: 20, unit: 'g' },
        { name: 'Garam masala', amount: 4, unit: 'g' },
        { name: 'Garlic', amount: 6, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Brown the chicken pieces.',
        'Cook butter, garlic, garam masala, tomatoes, and cream into a sauce.',
        'Add chicken and pasta and toss until coated.',
      ],
      nutritions: { calories: 760, protein: 48, carbohydrates: 78, fat: 29 },
    },

    {
      id: 'fusion-006',
      name: 'Tikka Masala Pizza',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pizza dough', amount: 250, unit: 'g' },
        { name: 'Chicken breast', amount: 150, unit: 'g' },
        { name: 'Tikka masala sauce', amount: 120, unit: 'g' },
        { name: 'Mozzarella', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Red onion', amount: 50, unit: 'g' },
        { name: 'Coriander', amount: 5, unit: 'g' },
        { name: 'Olive oil', amount: 10, unit: 'ml' },
      ],
      directions: [
        'Cook the chicken with some tikka masala sauce.',
        'Stretch the pizza dough and spread with the remaining sauce.',
        'Top with chicken, mozzarella, and red onion.',
        'Bake at high heat and finish with coriander.',
      ],
      nutritions: { calories: 820, protein: 48, carbohydrates: 90, fat: 30 },
    },

    {
      id: 'fusion-007',
      name: 'Teriyaki Chicken Burger',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 180, unit: 'g' },
        { name: 'Burger bun', amount: 1, unit: 'piece' },
        { name: 'Cabbage', amount: 80, unit: 'g' },
        { name: 'Soy sauce', amount: 25, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Mirin', amount: 20, unit: 'ml' },
        { name: 'Mayonnaise', amount: 20, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the chicken until browned.',
        'Add soy sauce and mirin and reduce to a glaze.',
        'Toast the burger bun and add cabbage and mayonnaise.',
        'Add the glazed chicken and sesame seeds.',
      ],
      nutritions: { calories: 610, protein: 44, carbohydrates: 54, fat: 23 },
    },

    {
      id: 'fusion-008',
      name: 'Sushi Burrito',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Sushi rice', amount: 120, unit: 'g' },
        { name: 'Salmon', amount: 120, unit: 'g' },
        { name: 'Nori', amount: 2, unit: 'piece' },
        { name: 'Avocado', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Cucumber', amount: 80, unit: 'g' },
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook and season the sushi rice.',
        'Place nori sheets on a work surface and spread with rice.',
        'Add salmon, avocado, and cucumber.',
        'Roll tightly like a burrito and serve with soy sauce.',
      ],
      nutritions: { calories: 650, protein: 30, carbohydrates: 78, fat: 25 },
    },

    {
      id: 'fusion-009',
      name: 'Kimchi Fried Rice',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Cooked rice', amount: 250, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Carrot', amount: 60, unit: 'g' },
        { name: 'Peas', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
        { name: 'Sesame oil', amount: 8, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Use cold cooked rice for the best texture.',
        'Stir-fry carrot and peas, then scramble the eggs in the pan.',
        'Add rice and stir-fry over high heat.',
        'Season with soy sauce and sesame oil and finish with spring onion.',
      ],
      nutritions: { calories: 540, protein: 18, carbohydrates: 80, fat: 17 },
    },

    {
      id: 'fusion-010',
      name: 'Thai Curry Pasta',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Coconut milk', amount: 140, unit: 'ml' },
        { name: 'Bell pepper', amount: 100, unit: 'g' },
        { name: 'Broccoli', amount: 120, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Thai curry paste', amount: 25, unit: 'g' },
        { name: 'Lime juice', amount: 20, unit: 'ml' },
        { name: 'Basil', amount: 8, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Cook curry paste briefly, then add coconut milk.',
        'Add vegetables and simmer until tender-crisp.',
        'Toss with pasta and finish with lime and basil.',
      ],
      nutritions: { calories: 650, protein: 16, carbohydrates: 82, fat: 29 },
    },

    {
      id: 'fusion-011',
      name: 'Miso Carbonara',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Spaghetti', amount: 100, unit: 'g' },
        { name: 'Bacon', amount: 70, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: 'piece' },
        { name: 'Parmesan', amount: 40, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Miso paste', amount: 20, unit: 'g' },
        { name: 'Black pepper', amount: 2, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Cook the spaghetti until al dente.',
        'Fry the bacon until crisp.',
        'Whisk eggs, Parmesan, miso, and black pepper.',
        'Toss hot pasta with bacon, remove from heat, and stir in the egg mixture.',
      ],
      nutritions: { calories: 710, protein: 34, carbohydrates: 72, fat: 32 },
    },

    {
      id: 'fusion-012',
      name: 'Wasabi Salmon Burger',
      cookingTime: 30,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Salmon fillet', amount: 180, unit: 'g' },
        { name: 'Burger bun', amount: 1, unit: 'piece' },
        { name: 'Cucumber', amount: 80, unit: 'g' },
        { name: 'Lettuce', amount: 50, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Mayonnaise', amount: 25, unit: 'g' },
        { name: 'Wasabi', amount: 8, unit: 'g' },
        { name: 'Soy sauce', amount: 10, unit: 'ml' },
      ],
      directions: [
        'Cook the salmon until just done.',
        'Mix mayonnaise with wasabi.',
        'Toast the bun and add lettuce and cucumber.',
        'Add salmon, wasabi mayonnaise, and a little soy sauce.',
      ],
      nutritions: { calories: 610, protein: 40, carbohydrates: 48, fat: 28 },
    },

    {
      id: 'fusion-013',
      name: 'Curry Ramen',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Ramen noodles', amount: 120, unit: 'g' },
        { name: 'Tofu', amount: 150, unit: 'g' },
        { name: 'Broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Miso paste', amount: 30, unit: 'g' },
        { name: 'Soy sauce', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Heat the broth and dissolve in the miso paste.',
        'Cook the chicken or tofu and mushrooms in or alongside the broth.',
        'Cook the ramen noodles separately or in the broth as appropriate.',
        'Assemble noodles, broth, toppings, and spring onion.',
      ],
      nutritions: { calories: 560, protein: 25, carbohydrates: 76, fat: 18 },
    },

    {
      id: 'fusion-014',
      name: 'Paneer Tikka Tacos',
      cookingTime: 35,
      preferences: 'Vegetarian',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Paneer', amount: 180, unit: 'g' },
        { name: 'Tortillas', amount: 3, unit: 'piece' },
        { name: 'Bell pepper', amount: 100, unit: 'g' },
        { name: 'Yogurt', amount: 60, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Tikka masala', amount: 5, unit: 'g' },
        { name: 'Lime juice', amount: 20, unit: 'ml' },
        { name: 'Coriander', amount: 5, unit: 'g' },
      ],
      directions: [
        'Coat paneer and bell pepper with yogurt and tikka masala.',
        'Sear until browned.',
        'Warm the tortillas.',
        'Fill with paneer mixture and finish with lime and coriander.',
      ],
      nutritions: { calories: 690, protein: 32, carbohydrates: 59, fat: 37 },
    },

    {
      id: 'fusion-015',
      name: 'Teriyaki Chicken Quesadillas',
      cookingTime: 25,
      preferences: 'No preferences',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Chicken breast', amount: 160, unit: 'g' },
        { name: 'Tortillas', amount: 2, unit: 'piece' },
        { name: 'Cheddar', amount: 80, unit: 'g' },
        { name: 'Soy sauce', amount: 20, unit: 'ml' },
      ],
      extraIngredients: [
        { name: 'Mirin', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook the chicken and glaze it with soy sauce and mirin.',
        'Slice the chicken and place it on a tortilla with cheddar and spring onion.',
        'Top with the second tortilla.',
        'Toast in a pan until crisp and the cheese has melted.',
      ],
      nutritions: { calories: 740, protein: 50, carbohydrates: 53, fat: 35 },
    },

    {
      id: 'fusion-016',
      name: 'Mediterranean Sushi Rolls',
      cookingTime: 40,
      preferences: 'Vegetarian',
      complexity: 'Complex',
      likes: 0,
      ingredients: [
        { name: 'Sushi rice', amount: 120, unit: 'g' },
        { name: 'Nori', amount: 3, unit: 'piece' },
        { name: 'Feta', amount: 80, unit: 'g' },
        { name: 'Cucumber', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Roasted pepper', amount: 80, unit: 'g' },
        { name: 'Olives', amount: 35, unit: 'g' },
        { name: 'Sesame seeds', amount: 5, unit: 'g' },
      ],
      directions: [
        'Cook and season the sushi rice.',
        'Spread rice over nori sheets.',
        'Add feta, cucumber, roasted pepper, and olives.',
        'Roll tightly, slice, and sprinkle with sesame seeds.',
      ],
      nutritions: { calories: 580, protein: 19, carbohydrates: 78, fat: 22 },
    },

    {
      id: 'fusion-017',
      name: 'Pesto Ramen',
      cookingTime: 25,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Ramen noodles', amount: 120, unit: 'g' },
        { name: 'Tofu', amount: 150, unit: 'g' },
        { name: 'Broth', amount: 450, unit: 'ml' },
        { name: 'Mushrooms', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Miso paste', amount: 30, unit: 'g' },
        { name: 'Soy sauce', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Heat the broth and dissolve in the miso paste.',
        'Cook the chicken or tofu and mushrooms in or alongside the broth.',
        'Cook the ramen noodles separately or in the broth as appropriate.',
        'Assemble noodles, broth, toppings, and spring onion.',
      ],
      nutritions: { calories: 560, protein: 25, carbohydrates: 76, fat: 18 },
    },

    {
      id: 'fusion-018',
      name: 'Gochujang Chicken Pasta',
      cookingTime: 35,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pasta', amount: 100, unit: 'g' },
        { name: 'Chicken breast', amount: 170, unit: 'g' },
        { name: 'Cream', amount: 70, unit: 'ml' },
        { name: 'Gochujang', amount: 25, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Garlic', amount: 6, unit: 'g' },
        { name: 'Soy sauce', amount: 15, unit: 'ml' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Cook the pasta until al dente.',
        'Brown the chicken pieces.',
        'Add garlic, gochujang, soy sauce, and cream and simmer.',
        'Toss with pasta and finish with spring onion.',
      ],
      nutritions: { calories: 690, protein: 47, carbohydrates: 76, fat: 23 },
    },

    {
      id: 'fusion-019',
      name: 'Tandoori Chicken Pizza',
      cookingTime: 45,
      preferences: 'No preferences',
      complexity: 'Medium',
      likes: 0,
      ingredients: [
        { name: 'Pizza dough', amount: 250, unit: 'g' },
        { name: 'Chicken breast', amount: 150, unit: 'g' },
        { name: 'Yogurt', amount: 60, unit: 'g' },
        { name: 'Mozzarella', amount: 100, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Tandoori masala', amount: 5, unit: 'g' },
        { name: 'Red onion', amount: 50, unit: 'g' },
        { name: 'Coriander', amount: 5, unit: 'g' },
      ],
      directions: [
        'Coat chicken with yogurt and tandoori masala and cook it.',
        'Stretch the pizza dough.',
        'Top with mozzarella, sliced tandoori chicken, and red onion.',
        'Bake at high heat and finish with coriander.',
      ],
      nutritions: { calories: 800, protein: 49, carbohydrates: 88, fat: 28 },
    },

    {
      id: 'fusion-020',
      name: 'Asian-Style Loaded Fries',
      cookingTime: 30,
      preferences: 'Vegetarian',
      complexity: 'Quick',
      likes: 0,
      ingredients: [
        { name: 'Potatoes', amount: 300, unit: 'g' },
        { name: 'Tofu', amount: 150, unit: 'g' },
        { name: 'Cabbage', amount: 80, unit: 'g' },
      ],
      extraIngredients: [
        { name: 'Gochujang', amount: 20, unit: 'g' },
        { name: 'Mayonnaise', amount: 25, unit: 'g' },
        { name: 'Spring onion', amount: 20, unit: 'g' },
      ],
      directions: [
        'Bake or fry the potato fries until crisp.',
        'Pan-fry the tofu until golden.',
        'Pile fries with tofu and shredded cabbage.',
        'Drizzle with gochujang and mayonnaise and finish with spring onion.',
      ],
      nutritions: { calories: 690, protein: 24, carbohydrates: 79, fat: 31 },
    }
  ];

  getRecipeById(id: string): CuisineRecipe | undefined {
    const recipes = [
      ...this.germanCuisines,
      ...this.italianCuisines,
      ...this.indianCuisines,
      ...this.japaneseCuisines,
      ...this.gourmetCuisines,
      ...this.fusionCuisines
    ];

    return recipes.find(recipe => recipe.id === id);
  }

}
