import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup
  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'useData': new FormGroup({
        'exName': new FormControl(null, Validators.required),
        'exSurName': new FormControl(null, Validators.required)
      }),
      'exampleInputEmail1': new FormControl(null, [Validators.required, Validators.email]),
      'exampleInputPassword1': new FormControl(null),
      'exampleCheck1': new FormControl(null),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.formGroup)
  }

  addHobby() {
    let control =  new FormControl(null)
    let hobbies = this.formGroup.get('hobbies') as FormArray
    hobbies.push(control)
  }
}
