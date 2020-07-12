import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showAlert: boolean = false
  constructor() { }

  ngOnInit() {
  }

  onAuth() {
    this.showAlert = true
  }

  onClose(closePopup: boolean) {
    this.showAlert = false
  }

}
