import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesNewService } from '../recipes-new.service';
import { RecipesNewModel } from '../recipes.model';
import { FormGroup, FormControl, FormControlName, FormArray, Validators } from '@angular/forms';

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
        if (id != null) {
          this.recipe = this.recipeService.getRecipe(id)
        }
        
      }
    })


    let recipeIngredients = new FormArray([])

    

    if (!this.editMode) {
      this.formGroupRecipe = new FormGroup({
        'id': new FormControl(null),
        'name': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'img': new FormControl(null, Validators.required),
        'ingredients': new FormArray([])
      })
    } else {
      this.formGroupRecipe = new FormGroup({
        'id': new FormControl(this.recipe.id),
        'name': new FormControl(this.recipe.name, Validators.required),
        'description': new FormControl(this.recipe.description, Validators.required),
        'img': new FormControl(this.recipe.img, Validators.required),
        'ingredients': new FormArray([])
      })

      for (let ingredient of this.recipe.ingredients.values()) {
        (<FormArray>this.formGroupRecipe.get('ingredients')).push(
          new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          })
        )
      }
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
    let item: RecipesNewModel
    item = this.formGroupRecipe.value
    console.log(this.formGroupRecipe.value)
    if (this.editMode) {
      this.recipeService.updateRecipe(item)
    } else {
      this.recipeService.addRecipe(item)
    }
    
  }
}
