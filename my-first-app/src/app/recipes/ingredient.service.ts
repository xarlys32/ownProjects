import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredient } from './Ingredients.model';

//@Injectable() -> Solo usamos Injectable cuando tenemos que meter un servicio en otro servicio u elemento sin metadata(@Component..)
@Injectable()
export class IngredientService {

    public newIngredient = new EventEmitter<Ingredient>()
    getIngredients() {

    }
    addIngredient(recipe: Recipes, ingredient: Ingredient) {
        recipe.ingredients.push(ingredient)
    }
}