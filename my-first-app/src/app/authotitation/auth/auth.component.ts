import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showAlert: boolean = false
  @ViewChild("f", {static : false}) form;
  constructor(private authService: AuthService) { }

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
    let test = this.authService.login(this.form.value.username, this.form.value.password)
    console.log(test)
  }

}
