import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownDirective } from '../directives/dropdown.directive';
import { AuthService } from '../authotitation/auth/auth.service';
import { UserAuth } from '../authotitation/auth/user-auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSub = new Subscription
  private userAuth:UserAuth
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.userSubject.subscribe(user =>
        this.userAuth = user
      )
  }

}
