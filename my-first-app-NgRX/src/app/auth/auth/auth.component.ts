import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showAlert: boolean = false
  @ViewChild("f", {static : false}) form;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onAuth() {
    this.showAlert = true
  }

  onClose(closePopup: boolean) {
    this.showAlert = false
  }

  onSubmit() {
    this.authService.login(this.form.value.username, this.form.value.password)
      .subscribe(el => {
        this.router.navigate(['/authok'])
      })
    
  }

  onLogout() {
    this.authService.logout()
  }

}
