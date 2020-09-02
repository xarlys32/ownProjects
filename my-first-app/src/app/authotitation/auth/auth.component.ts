import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showAlert: boolean = false
  @ViewChild("f", {static : false}) form;
  constructor() { }

  ngOnInit() {
  }

  onAuth() {
    this.showAlert = true
  }

  onClose(closePopup: boolean) {
    this.showAlert = false
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
