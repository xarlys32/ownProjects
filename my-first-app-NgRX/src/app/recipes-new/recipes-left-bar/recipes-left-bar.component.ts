import { Component, OnInit } from '@angular/core';
import { RecipesNewService } from '../recipes-new.service';
import { RecipesNewModel } from '../recipes.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'recipes-left-bar',
  templateUrl: './recipes-left-bar.component.html',
  styleUrls: ['./recipes-left-bar.component.css']
})
export class RecipesLeftBarComponent implements OnInit {
  public recipesList: RecipesNewModel[]

  constructor(private recipesServices: RecipesNewService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipesServices.getRecipes().subscribe((items) => {
      this.recipesList = items
    })
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
