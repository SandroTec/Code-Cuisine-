import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineItem } from '../../interfaces/cuisine-item';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cuisine-list-page',
  imports: [RouterLink],
  templateUrl: './cuisine-list-page.html',
  styleUrl: './cuisine-list-page.scss',
})
export class CuisineListPage {

  private route = inject(ActivatedRoute);
  cuisine = this.route.snapshot.paramMap.get('cuisine');

  cuisineList: CuisineItem[] = [];
  preferences = signal('');
  complexity = signal('');
  cookingTime = signal('');

  ngOnInit() {
    if (this.cuisine) {
      this.setCuisineList(this.cuisine);
    }
  }

  setCuisineList(cusine: string) {
    switch (cusine) {
      case 'german':
        this.cuisineList = this.germanCuisines;
        break;
      case 'italian':
        this.cuisineList = this.italianCuisines;
        break;
      case 'indian':
        this.cuisineList = this.indianCuisines;
        break;
      case 'japanese':
        this.cuisineList = this.japaneseCuisines;
        break;
      case 'gourmet':
        this.cuisineList = this.gourmetCuisines;
        break;
      case 'fusion':
        this.cuisineList = this.fusionCuisines;
        break;
    }
  }

  germanCuisines: CuisineItem[] = [
    { name: 'Schnitzel with Potato Salad', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Bratwurst with Sauerkraut', cookingTime: 25, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: 'Currywurst with Fries', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Käsespätzle', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Fried Potatoes with Bacon and Onions', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'German Potato Pancakes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Meatballs with Mashed Potatoes', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'German Lentil Soup', cookingTime: 45, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { name: 'Pea Soup with Sausage', cookingTime: 50, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Potato Soup with Sausage', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'German Goulash', cookingTime: 90, preference: 'Keto', complexity: 'Complex', likes: 0 },
    { name: 'Mustard Eggs with Potatoes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Creamed Spinach with Potatoes and Fried Egg', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Schupfnudeln with Sauerkraut', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Flammkuchen', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Chicken Fricassee with Rice', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Pork Medallions with Mushroom Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Sausage Goulash', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: "Farmer's Breakfast", cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'German Cabbage and Minced Meat Skillet', cookingTime: 35, preference: 'Keto', complexity: 'Quick', likes: 0 }
  ];

  italianCuisines: CuisineItem[] = [
    { name: 'Spaghetti Carbonara', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Spaghetti Aglio e Olio', cookingTime: 20, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { name: 'Spaghetti alla Puttanesca', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: "Penne all'Arrabbiata", cookingTime: 25, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { name: 'Pasta al Pomodoro', cookingTime: 25, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { name: 'Pasta alla Norma', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Pasta with Pesto Genovese', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Cacio e Pepe', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Pasta e Fagioli', cookingTime: 40, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { name: 'Lasagna Bolognese', cookingTime: 90, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { name: 'Risotto alla Milanese', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Mushroom Risotto', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Gnocchi with Tomato Sauce', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Chicken Piccata', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: 'Chicken Cacciatore', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Eggplant Parmigiana', cookingTime: 55, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Margherita Pizza', cookingTime: 45, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Frittata with Vegetables', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Bruschetta with Tomato and Basil', cookingTime: 15, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { name: 'Caprese Salad', cookingTime: 10, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];

  indianCuisines: CuisineItem[] = [
    { name: 'Butter Chicken', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Chicken Tikka Masala', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Chicken Curry', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Palak Chicken', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Tandoori Chicken', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Chana Masala', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { name: 'Dal Tadka', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Dal Makhani', cookingTime: 60, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Aloo Gobi', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { name: 'Aloo Matar', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { name: 'Palak Paneer', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Matar Paneer', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Paneer Butter Masala', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Vegetable Korma', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Chicken Biryani', cookingTime: 60, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { name: 'Vegetable Biryani', cookingTime: 50, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Jeera Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Masala Omelette', cookingTime: 15, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Aloo Paratha', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Vegetable Samosas', cookingTime: 50, preference: 'Vegan', complexity: 'Complex', likes: 0 }
  ];

  japaneseCuisines: CuisineItem[] = [
    { name: 'Chicken Teriyaki', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Teriyaki Salmon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Chicken Katsu', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Katsu Curry', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Japanese Beef Curry', cookingTime: 50, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Oyakodon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Gyudon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Katsudon', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Yakisoba', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Yaki Udon', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Chicken Ramen', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Miso Ramen', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Miso Soup', cookingTime: 15, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Japanese Fried Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Okonomiyaki', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Onigiri', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Tamago Sando', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Gyoza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Teriyaki Tofu Rice Bowl', cookingTime: 30, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { name: 'Japanese Potato Salad', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];

  gourmetCuisines: CuisineItem[] = [
    { name: 'Beef Tenderloin with Red Wine Sauce', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Herb-Crusted Salmon', cookingTime: 30, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Creamy Truffle Pasta', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Mushroom Risotto with Parmesan', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Duck Breast with Orange Sauce', cookingTime: 45, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { name: 'Chicken Breast with White Wine Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Pork Tenderloin with Mustard Cream Sauce', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Seared Salmon with Lemon Butter', cookingTime: 25, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: 'Garlic Butter Prawns', cookingTime: 20, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: 'Steak with Peppercorn Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Truffle Mashed Potatoes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Goat Cheese and Beetroot Salad', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Burrata with Roasted Tomatoes', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Caramelized Onion and Goat Cheese Tart', cookingTime: 45, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Creamy Polenta with Mushrooms', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Parmesan-Crusted Chicken', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Stuffed Chicken Breast with Spinach and Cheese', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Seared Scallops with Lemon Butter', cookingTime: 20, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { name: 'Roasted Cod with Herb Butter', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { name: 'Wild Mushroom Tagliatelle', cookingTime: 30, preference: 'Vegetarian', complexity: 'Medium', likes: 0 }
  ];

  fusionCuisines: CuisineItem[] = [
    { name: 'Korean BBQ Tacos', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Teriyaki Chicken Tacos', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Tandoori Chicken Wraps', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Currywurst Loaded Fries', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Butter Chicken Pasta', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Tikka Masala Pizza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Teriyaki Chicken Burger', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Sushi Burrito', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Kimchi Fried Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Thai Curry Pasta', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Miso Carbonara', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Wasabi Salmon Burger', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Curry Ramen', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Paneer Tikka Tacos', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { name: 'Teriyaki Chicken Quesadillas', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { name: 'Mediterranean Sushi Rolls', cookingTime: 40, preference: 'Vegetarian', complexity: 'Complex', likes: 0 },
    { name: 'Pesto Ramen', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { name: 'Gochujang Chicken Pasta', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Tandoori Chicken Pizza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { name: 'Asian-Style Loaded Fries', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];
}
