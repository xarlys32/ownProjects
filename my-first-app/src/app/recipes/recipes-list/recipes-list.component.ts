import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingredient } from '../Ingredients.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipes[];
  public recipeSelected: Recipes;
  constructor() { }

  ngOnInit() {
    this.recipes = [new Recipes('https://images.media-allrecipes.com/userphotos/720x405/630590.jpg', 'Aaaaa', 0, 'Prueba 1'),
    new Recipes('https://images.media-allrecipes.com/userphotos/720x405/1656932.jpg', 'Bbbb', 0, 'Prueba 2')]
  }

  details(recipe: Recipes) {
    this.recipeSelected = recipe;
  }

  addIngredient(ingredient: Ingredient) {
    this.recipeSelected.ingredients.push(ingredient)
    console.log(this.recipeSelected)
    console.log(this.recipes)
  }
}