import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingredient } from '../Ingredients.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  public description: string
  @Input('recipe') recipe: Recipes
  @Output() ingredient = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  addIngredientDetail() {

    this.ingredient.emit(new Ingredient(this.description))
  }
}
