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
    { id: 'german-001', name: 'Schnitzel with Potato Salad', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-002', name: 'Bratwurst with Sauerkraut', cookingTime: 25, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'german-003', name: 'Currywurst with Fries', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'german-004', name: 'Käsespätzle', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'german-005', name: 'Fried Potatoes with Bacon and Onions', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'german-006', name: 'German Potato Pancakes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'german-007', name: 'Meatballs with Mashed Potatoes', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-008', name: 'German Lentil Soup', cookingTime: 45, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { id: 'german-009', name: 'Pea Soup with Sausage', cookingTime: 50, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-010', name: 'Potato Soup with Sausage', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-011', name: 'German Goulash', cookingTime: 90, preference: 'Keto', complexity: 'Complex', likes: 0 },
    { id: 'german-012', name: 'Mustard Eggs with Potatoes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'german-013', name: 'Creamed Spinach with Potatoes and Fried Egg', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'german-014', name: 'Schupfnudeln with Sauerkraut', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'german-015', name: 'Flammkuchen', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-016', name: 'Chicken Fricassee with Rice', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'german-017', name: 'Pork Medallions with Mushroom Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'german-018', name: 'Sausage Goulash', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'german-019', name: "Farmer's Breakfast", cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'german-020', name: 'German Cabbage and Minced Meat Skillet', cookingTime: 35, preference: 'Keto', complexity: 'Quick', likes: 0 }
  ];

  italianCuisines: CuisineItem[] = [
    { id: 'italian-001', name: 'Spaghetti Carbonara', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'italian-002', name: 'Spaghetti Aglio e Olio', cookingTime: 20, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { id: 'italian-003', name: 'Spaghetti alla Puttanesca', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'italian-004', name: "Penne all'Arrabbiata", cookingTime: 25, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { id: 'italian-005', name: 'Pasta al Pomodoro', cookingTime: 25, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { id: 'italian-006', name: 'Pasta alla Norma', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'italian-007', name: 'Pasta with Pesto Genovese', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'italian-008', name: 'Cacio e Pepe', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'italian-009', name: 'Pasta e Fagioli', cookingTime: 40, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { id: 'italian-010', name: 'Lasagna Bolognese', cookingTime: 90, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { id: 'italian-011', name: 'Risotto alla Milanese', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'italian-012', name: 'Mushroom Risotto', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'italian-013', name: 'Gnocchi with Tomato Sauce', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'italian-014', name: 'Chicken Piccata', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'italian-015', name: 'Chicken Cacciatore', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'italian-016', name: 'Eggplant Parmigiana', cookingTime: 55, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'italian-017', name: 'Margherita Pizza', cookingTime: 45, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'italian-018', name: 'Frittata with Vegetables', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'italian-019', name: 'Bruschetta with Tomato and Basil', cookingTime: 15, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { id: 'italian-020', name: 'Caprese Salad', cookingTime: 10, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];

  indianCuisines: CuisineItem[] = [
    { id: 'indian-001', name: 'Butter Chicken', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'indian-002', name: 'Chicken Tikka Masala', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'indian-003', name: 'Chicken Curry', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'indian-004', name: 'Palak Chicken', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'indian-005', name: 'Tandoori Chicken', cookingTime: 50, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'indian-006', name: 'Chana Masala', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { id: 'indian-007', name: 'Dal Tadka', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-008', name: 'Dal Makhani', cookingTime: 60, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-009', name: 'Aloo Gobi', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { id: 'indian-010', name: 'Aloo Matar', cookingTime: 35, preference: 'Vegan', complexity: 'Medium', likes: 0 },
    { id: 'indian-011', name: 'Palak Paneer', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-012', name: 'Matar Paneer', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-013', name: 'Paneer Butter Masala', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-014', name: 'Vegetable Korma', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-015', name: 'Chicken Biryani', cookingTime: 60, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { id: 'indian-016', name: 'Vegetable Biryani', cookingTime: 50, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-017', name: 'Jeera Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'indian-018', name: 'Masala Omelette', cookingTime: 15, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'indian-019', name: 'Aloo Paratha', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'indian-020', name: 'Vegetable Samosas', cookingTime: 50, preference: 'Vegan', complexity: 'Complex', likes: 0 }
  ];

  japaneseCuisines: CuisineItem[] = [
    { id: 'japanese-001', name: 'Chicken Teriyaki', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-002', name: 'Teriyaki Salmon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-003', name: 'Chicken Katsu', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-004', name: 'Katsu Curry', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'japanese-005', name: 'Japanese Beef Curry', cookingTime: 50, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'japanese-006', name: 'Oyakodon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-007', name: 'Gyudon', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-008', name: 'Katsudon', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'japanese-009', name: 'Yakisoba', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'japanese-010', name: 'Yaki Udon', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-011', name: 'Chicken Ramen', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'japanese-012', name: 'Miso Ramen', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'japanese-013', name: 'Miso Soup', cookingTime: 15, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-014', name: 'Japanese Fried Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-015', name: 'Okonomiyaki', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-016', name: 'Onigiri', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-017', name: 'Tamago Sando', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'japanese-018', name: 'Gyoza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'japanese-019', name: 'Teriyaki Tofu Rice Bowl', cookingTime: 30, preference: 'Vegan', complexity: 'Quick', likes: 0 },
    { id: 'japanese-020', name: 'Japanese Potato Salad', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];

  gourmetCuisines: CuisineItem[] = [
    { id: 'gourmet-001', name: 'Beef Tenderloin with Red Wine Sauce', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-002', name: 'Herb-Crusted Salmon', cookingTime: 30, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-003', name: 'Creamy Truffle Pasta', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-004', name: 'Mushroom Risotto with Parmesan', cookingTime: 40, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-005', name: 'Duck Breast with Orange Sauce', cookingTime: 45, preference: 'No preferences', complexity: 'Complex', likes: 0 },
    { id: 'gourmet-006', name: 'Chicken Breast with White Wine Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-007', name: 'Pork Tenderloin with Mustard Cream Sauce', cookingTime: 40, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-008', name: 'Seared Salmon with Lemon Butter', cookingTime: 25, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-009', name: 'Garlic Butter Prawns', cookingTime: 20, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-010', name: 'Steak with Peppercorn Sauce', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-011', name: 'Truffle Mashed Potatoes', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-012', name: 'Goat Cheese and Beetroot Salad', cookingTime: 20, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-013', name: 'Burrata with Roasted Tomatoes', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-014', name: 'Caramelized Onion and Goat Cheese Tart', cookingTime: 45, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-015', name: 'Creamy Polenta with Mushrooms', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-016', name: 'Parmesan-Crusted Chicken', cookingTime: 35, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-017', name: 'Stuffed Chicken Breast with Spinach and Cheese', cookingTime: 45, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-018', name: 'Seared Scallops with Lemon Butter', cookingTime: 20, preference: 'Keto', complexity: 'Medium', likes: 0 },
    { id: 'gourmet-019', name: 'Roasted Cod with Herb Butter', cookingTime: 30, preference: 'Keto', complexity: 'Quick', likes: 0 },
    { id: 'gourmet-020', name: 'Wild Mushroom Tagliatelle', cookingTime: 30, preference: 'Vegetarian', complexity: 'Medium', likes: 0 }
  ];

  fusionCuisines: CuisineItem[] = [
    { id: 'fusion-001', name: 'Korean BBQ Tacos', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-002', name: 'Teriyaki Chicken Tacos', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-003', name: 'Tandoori Chicken Wraps', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-004', name: 'Currywurst Loaded Fries', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-005', name: 'Butter Chicken Pasta', cookingTime: 40, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-006', name: 'Tikka Masala Pizza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-007', name: 'Teriyaki Chicken Burger', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-008', name: 'Sushi Burrito', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-009', name: 'Kimchi Fried Rice', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'fusion-010', name: 'Thai Curry Pasta', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'fusion-011', name: 'Miso Carbonara', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-012', name: 'Wasabi Salmon Burger', cookingTime: 30, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-013', name: 'Curry Ramen', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'fusion-014', name: 'Paneer Tikka Tacos', cookingTime: 35, preference: 'Vegetarian', complexity: 'Medium', likes: 0 },
    { id: 'fusion-015', name: 'Teriyaki Chicken Quesadillas', cookingTime: 25, preference: 'No preferences', complexity: 'Quick', likes: 0 },
    { id: 'fusion-016', name: 'Mediterranean Sushi Rolls', cookingTime: 40, preference: 'Vegetarian', complexity: 'Complex', likes: 0 },
    { id: 'fusion-017', name: 'Pesto Ramen', cookingTime: 25, preference: 'Vegetarian', complexity: 'Quick', likes: 0 },
    { id: 'fusion-018', name: 'Gochujang Chicken Pasta', cookingTime: 35, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-019', name: 'Tandoori Chicken Pizza', cookingTime: 45, preference: 'No preferences', complexity: 'Medium', likes: 0 },
    { id: 'fusion-020', name: 'Asian-Style Loaded Fries', cookingTime: 30, preference: 'Vegetarian', complexity: 'Quick', likes: 0 }
  ];
}
