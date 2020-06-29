import { Component, OnInit } from '@angular/core';
import { RecipesNewService } from '../recipes-new.service';
import { RecipesNewModel } from '../recipes.model';

@Component({
  selector: 'recipes-left-bar',
  templateUrl: './recipes-left-bar.component.html',
  styleUrls: ['./recipes-left-bar.component.css']
})
export class RecipesLeftBarComponent implements OnInit {
  private recipesList: RecipesNewModel[]

  constructor(private recipesServices: RecipesNewService) { }

  ngOnInit() {
    this.recipesServices.getRecipes().subscribe((items) => {
      this.recipesList = items
    })
  }

}
