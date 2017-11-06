import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://c.pxhere.com/photos/c2/b0/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1323649.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
      ];

      constructor(private shoppingListService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

}
