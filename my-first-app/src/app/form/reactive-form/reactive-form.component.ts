import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup
  forbiddenNames = ['Anna', 'Peter']
  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'useData': new FormGroup({
        'exName': new FormControl(null, [Validators.required, this.forbiddenNamesValidation.bind(this)]),
        'exSurName': new FormControl(null, Validators.required)
      }),
      'exampleInputEmail1': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      'exampleInputPassword1': new FormControl(null),
      'exampleCheck1': new FormControl(null),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.formGroup)
  }

  addHobby() {
    let control = new FormControl(null)
    let hobbies = this.formGroup.get('hobbies') as FormArray
    hobbies.push(control)
  }

  forbiddenNamesValidation(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const val = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'mailIsForbidden': true })
        }
        else {
          resolve(null)
        }
      })
    })

    return val
  }
}
