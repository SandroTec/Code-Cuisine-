import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuisine-list-page',
  imports: [],
  templateUrl: './cuisine-list-page.html',
  styleUrl: './cuisine-list-page.scss',
})
export class CuisineListPage {

  private route = inject(ActivatedRoute);
  cusine = this.route.snapshot.paramMap.get('cuisine');

  cusineList: string[] = [];

  ngOnInit() {
    if (this.cusine) {
      this.setCusineList(this.cusine);
    }
  }

  setCusineList(cusine: string) {
    switch (cusine) {
      case 'german':
        this.cusineList = this.germanCuisines;
        break;
      case 'italian':
        this.cusineList = this.italianCuisines;
        break;
      case 'indian':
        this.cusineList = this.indianCuisines;
        break;
      case 'japanese':
        this.cusineList = this.japaneseCuisines;
        break;
      case 'gourmet':
        this.cusineList = this.gourmetCuisines;
        break;
      case 'fusion':
        this.cusineList = this.fusionCuisines;
        break;
    }
  }

  germanCuisines: string[] = [
    'Schnitzel with Potato Salad',
    'Bratwurst with Sauerkraut',
    'Currywurst with Fries',
    'Käsespätzle',
    'Fried Potatoes with Bacon and Onions',
    'German Potato Pancakes',
    'Meatballs with Mashed Potatoes',
    'German Lentil Soup',
    'Pea Soup with Sausage',
    'Potato Soup with Sausage',
    'German Goulash',
    'Mustard Eggs with Potatoes',
    'Creamed Spinach with Potatoes and Fried Egg',
    'Schupfnudeln with Sauerkraut',
    'Flammkuchen',
    'Chicken Fricassee with Rice',
    'Pork Medallions with Mushroom Sauce',
    'Sausage Goulash',
    "Farmer's Breakfast",
    'German Cabbage and Minced Meat Skillet'
  ];

  italianCuisines: string[] = [
    'Spaghetti Carbonara',
    'Spaghetti Aglio e Olio',
    'Spaghetti alla Puttanesca',
    "Penne all'Arrabbiata",
    'Pasta al Pomodoro',
    'Pasta alla Norma',
    'Pasta with Pesto Genovese',
    'Cacio e Pepe',
    'Pasta e Fagioli',
    'Lasagna Bolognese',
    'Risotto alla Milanese',
    'Mushroom Risotto',
    'Gnocchi with Tomato Sauce',
    'Chicken Piccata',
    'Chicken Cacciatore',
    'Eggplant Parmigiana',
    'Margherita Pizza',
    'Frittata with Vegetables',
    'Bruschetta with Tomato and Basil',
    'Caprese Salad'
  ];

  indianCuisines: string[] = [
    'Butter Chicken',
    'Chicken Tikka Masala',
    'Chicken Curry',
    'Palak Chicken',
    'Tandoori Chicken',
    'Chana Masala',
    'Dal Tadka',
    'Dal Makhani',
    'Aloo Gobi',
    'Aloo Matar',
    'Palak Paneer',
    'Matar Paneer',
    'Paneer Butter Masala',
    'Vegetable Korma',
    'Chicken Biryani',
    'Vegetable Biryani',
    'Jeera Rice',
    'Masala Omelette',
    'Aloo Paratha',
    'Vegetable Samosas'
  ];

  japaneseCuisines: string[] = [
    'Chicken Teriyaki',
    'Teriyaki Salmon',
    'Chicken Katsu',
    'Katsu Curry',
    'Japanese Beef Curry',
    'Oyakodon',
    'Gyudon',
    'Katsudon',
    'Yakisoba',
    'Yaki Udon',
    'Chicken Ramen',
    'Miso Ramen',
    'Miso Soup',
    'Japanese Fried Rice',
    'Okonomiyaki',
    'Onigiri',
    'Tamago Sando',
    'Gyoza',
    'Teriyaki Tofu Rice Bowl',
    'Japanese Potato Salad'
  ];

  gourmetCuisines: string[] = [
    'Beef Tenderloin with Red Wine Sauce',
    'Herb-Crusted Salmon',
    'Creamy Truffle Pasta',
    'Mushroom Risotto with Parmesan',
    'Duck Breast with Orange Sauce',
    'Chicken Breast with White Wine Sauce',
    'Pork Tenderloin with Mustard Cream Sauce',
    'Seared Salmon with Lemon Butter',
    'Garlic Butter Prawns',
    'Steak with Peppercorn Sauce',
    'Truffle Mashed Potatoes',
    'Goat Cheese and Beetroot Salad',
    'Burrata with Roasted Tomatoes',
    'Caramelized Onion and Goat Cheese Tart',
    'Creamy Polenta with Mushrooms',
    'Parmesan-Crusted Chicken',
    'Stuffed Chicken Breast with Spinach and Cheese',
    'Seared Scallops with Lemon Butter',
    'Roasted Cod with Herb Butter',
    'Wild Mushroom Tagliatelle'
  ];

  fusionCuisines: string[] = [
    'Korean BBQ Tacos',
    'Teriyaki Chicken Tacos',
    'Tandoori Chicken Wraps',
    'Currywurst Loaded Fries',
    'Butter Chicken Pasta',
    'Tikka Masala Pizza',
    'Teriyaki Chicken Burger',
    'Sushi Burrito',
    'Kimchi Fried Rice',
    'Thai Curry Pasta',
    'Miso Carbonara',
    'Wasabi Salmon Burger',
    'Curry Ramen',
    'Paneer Tikka Tacos',
    'Teriyaki Chicken Quesadillas',
    'Mediterranean Sushi Rolls',
    'Pesto Ramen',
    'Gochujang Chicken Pasta',
    'Tandoori Chicken Pizza',
    'Asian-Style Loaded Fries'
  ];
}
