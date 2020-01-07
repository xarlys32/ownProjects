import { Ingredient } from './Ingredients.model';

export class Recipes {

    public ingredients: Array<Ingredient> = new Array()

    constructor(public img: string,
        public description: string,
        public difficulty: number,
        public name: string) { }
}