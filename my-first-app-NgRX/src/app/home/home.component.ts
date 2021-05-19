import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlSaludo = "/recipes/modeljson"
  urlList = "/recipes/listjson"
  testRest: boolean = true
  responseAnswer: string
  usersResponse: string[] = []

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit() {
    /**this.authService.userSubject.pipe(take(1), exhaustMap(user => {
      let params =  new HttpParams().set('access_token', user != null ? user.token: '')
      return this.http.get<{name: string, surname: string}>(this.urlSaludo, {'params': params})
    }))
    .subscribe(user => {
        if (user != null) {
          this.responseAnswer = user.name +' '+user.surname
        }
    })**/
    this.http.get<{ name: string, surname: string }>(this.urlSaludo)
      .subscribe(user => {
        if (user != null) {
          this.responseAnswer = user.name + ' ' + user.surname
        } else {
          this.responseAnswer = 'No response'
        }
      })
  }



}
