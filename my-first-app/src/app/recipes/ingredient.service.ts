import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredient } from './Ingredients.model';

@Injectable()
export class IngredientService {

    public newIngredient = new EventEmitter<Ingredient>()
    getIngredients() {

    }
    addIngredient(recipe: Recipes, ingredient: Ingredient) {
        recipe.ingredients.push(ingredient)
    }
}