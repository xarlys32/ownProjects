import { Recipes } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from './Ingredients.model';

@Injectable()
export class RecipesService {
    private recipes: Recipes[] = [new Recipes(1, 'https://images.media-allrecipes.com/userphotos/720x405/630590.jpg', 'Aaaaa', 0, 'Prueba 1'),
    new Recipes(2, 'https://images.media-allrecipes.com/userphotos/720x405/1656932.jpg', 'Bbbb', 0, 'Prueba 2')];

    getRecipes() {
        return this.recipes
    }

}