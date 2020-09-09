import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    oauth_url = 'oauth/token'
    constructor(private http: HttpClient) {}

    login(username: string, passwd: string): any {
        let headers = 
	      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Basic '+btoa("recipes:recipespass")});
        let params = new URLSearchParams();
          params.append('username',username);
          params.append('password',passwd);    
          params.append('grant_type','password');
          params.append('client_id','recipes');
          params.append('client_secret','recipespass');
        this.http.post(this.oauth_url, 
            params.toString(),
            {'headers': headers}).subscribe(data => console.log(data), error => console.log("aaaaa" + error))
    }
}