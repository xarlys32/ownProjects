import { RecipesNewModel } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from './Ingredients.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class RecipesNewService {
    private recipes: RecipesNewModel[] = [new RecipesNewModel(1, 'https://images.media-allrecipes.com/userphotos/720x405/630590.jpg', 'Aaaaa', 0, 'Prueba 1'),
    new RecipesNewModel(2, 'https://images.media-allrecipes.com/userphotos/720x405/1656932.jpg', 'Bbbb', 0, 'Prueba 2')];

    getRecipes(): Observable<RecipesNewModel[]> {
        return of(this.recipes)
    }

}