import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesNewService } from '../recipes-new.service';
import { RecipesNewModel } from '../recipes.model';
import { FormGroup, FormControl, FormControlName, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {
  editMode: boolean
  recipe: RecipesNewModel
  formGroupRecipe: FormGroup
  constructor(private router: ActivatedRoute, private recipeService: RecipesNewService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.editMode = params['id'] != null
      if (this.editMode) {
        let id = params['id']
        this.recipe = this.recipeService.getRecipe(id)
      }
    })

    
    let recipeIngredients = new FormArray([])

    this.formGroupRecipe = new FormGroup({
      'name': new FormControl(this.recipe.name),
      'description': new FormControl(this.recipe.description),
      'img': new FormControl(this.recipe.img),
      'ingredients': new FormArray([])
    })

    if (this.editMode) {
      // for(let item of this.recipe.ingredients) {
      //   (<FormArray>this.formGroupRecipe.get('ingredients')).push(
      //     new FormGroup({
      //       'name': new FormControl(item.name),
      //       'amount': new FormControl(item.amount)
      //     })
      //   )
        
      // }
      // let recipeIngredients =  (<FormArray>this.formGroupRecipe.get('ingredients'))
      //  this.formGroupRecipe.setValue({
      //   'name': this.recipe.name,
      //   'description': this.recipe.description,
      //   'img': this.recipe.img,
      //   'ingredients': recipeIngredients
         
      //  })
    }
  }

  addIngredient() {
    (<FormArray>this.formGroupRecipe.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null),
        'amount': new FormControl(null)
      })
    )
  }

  onSubmit() {
    console.log(this.formGroupRecipe)
  }
}
