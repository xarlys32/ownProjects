import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingredient } from '../Ingredients.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipes[];
  public recipeSelected: Recipes;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes()

  }

  details(recipe: Recipes) {
    this.recipeSelected = recipe;
  }

  addIngredient(ingredient: Ingredient) {
    this.recipeSelected.ingredients.push(ingredient)
  }
}