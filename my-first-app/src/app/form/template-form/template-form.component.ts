import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f') form: NgForm
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form)
  }

}
