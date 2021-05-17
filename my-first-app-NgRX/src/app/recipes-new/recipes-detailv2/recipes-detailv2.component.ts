import { Component, OnInit } from '@angular/core';
import {  RecipesNewService } from '../recipes-new.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesNewModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-detailv2',
  templateUrl: './recipes-detailv2.component.html',
  styleUrls: ['./recipes-detailv2.component.css']
})
export class RecipesDetailv2Component implements OnInit {
  private recipe: RecipesNewModel
  constructor(private recipesService: RecipesNewService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number
    this.route.params.subscribe((param)=>{
      id = +param['id']
      this.recipe = this.recipesService.getRecipe(id)
    })
  }

}
