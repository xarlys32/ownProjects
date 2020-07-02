import { RecipesNewModel } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from './Ingredients.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class RecipesNewService {
    private recipes: RecipesNewModel[] = [new RecipesNewModel(1, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/12-pequenos-consejos-para-que-comer-pizza-sea-mas-saludable-1527516566.jpg', 'Fucking delicious!', 0, 'Amazing pizza'),
    new RecipesNewModel(2, 'https://pbs.twimg.com/media/DJmXRCCWsAA5NDs?format=jpg&name=small', 'Heart attack!', 0, 'Brutal burger')];

    getRecipes(): Observable<RecipesNewModel[]> {
        return of(this.recipes)
    }

    getRecipe(id: number): RecipesNewModel {
        let recipe: RecipesNewModel
        this.recipes.filter(function (item) {
            if (item.id == id) {
                recipe = item
            }
        })
        console.log(recipe)
        return recipe
    }

    updateRecipe(recipe: RecipesNewModel) {
        let index = this.recipes.findIndex((item) => {
            item.id == recipe.id
        })
        this.recipes[index] = recipe
    }

}