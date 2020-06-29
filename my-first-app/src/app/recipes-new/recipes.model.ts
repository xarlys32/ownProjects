import { Ingredient } from './Ingredients.model';

export class RecipesNewModel {

    public ingredients: Array<Ingredient> = new Array()

    constructor(public id: number,
        public img: string,
        public description: string,
        public difficulty: number,
        public name: string) { }
}