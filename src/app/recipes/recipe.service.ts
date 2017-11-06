import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://c.pxhere.com/photos/c2/b0/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1323649.jpg!d'),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d')
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}
