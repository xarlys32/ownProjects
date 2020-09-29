import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-auth-ok',
  templateUrl: './auth-ok.component.html',
  styleUrls: ['./auth-ok.component.css']
})
export class AuthOkComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin()
  }

}
