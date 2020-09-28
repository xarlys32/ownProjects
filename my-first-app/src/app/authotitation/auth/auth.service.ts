import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserAuth } from './user-auth.model';

export interface AuthData {
  access_token: string,
  expires_in: number,
  jti: string,
  refresh_token: string,
  scope: string,
  token_type: string
}

@Injectable()
export class AuthService {
    oauth_url = 'oauth/token'
    //Con behaviour podemos acceder a los elementos lanzados aunque no nos hallamos suscrito aun
    userSubject = new BehaviorSubject<UserAuth>(null)
    constructor(private http: HttpClient) {}

    login(username: string, passwd: string) {
        let headers = 
	      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Basic '+btoa("recipes:recipespass")});
        let params = new URLSearchParams();
          params.append('username',username);
          params.append('password',passwd);    
          params.append('grant_type','password');
          params.append('client_id','recipes');
          params.append('client_secret','recipespass');
     return this.http.post<AuthData>(this.oauth_url, 
            params.toString(),
            {'headers': headers})
          .pipe(
            tap(el =>{
              const user = new UserAuth(username,'alguno@gmail.com', el.access_token, el.expires_in*1000 )
              this.userSubject.next(user)
            }))
          
    }

    logout() {
      this.userSubject.next(null)
      console.log('Logout??')
    }
}