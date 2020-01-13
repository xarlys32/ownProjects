import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingredient } from '../Ingredients.model';
import { RecipesService } from '../recipes.service';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  public description: string
  @Input('recipe') recipe: Recipes
  @Output() ingredient = new EventEmitter<Ingredient>()


  constructor(private recipesService: RecipesService, private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  addIngredientDetail() {
    this.ingredient.emit(new Ingredient(this.description))
  }

  addIngredientDetailService() {
    let ingrediente: Ingredient = new Ingredient(this.description)
    this.ingredientService.addIngredient(this.recipe, ingrediente)

  }
}
