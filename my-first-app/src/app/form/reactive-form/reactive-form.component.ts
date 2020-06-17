import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      'exName': new FormControl(null),
      'exSurName': new FormControl(null),
      'exampleInputEmail1': new FormControl(null),
      'exampleInputPassword1': new FormControl(null),
      'exampleCheck1': new FormControl(null)
    })
  }

}
