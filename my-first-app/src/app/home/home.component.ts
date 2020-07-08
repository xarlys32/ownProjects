import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlSaludo = "http://localhost:8080/recipes/modeljson"
  urlList = "http://localhost:8080/recipes/listjson"
  testRest: boolean = true

   

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.testRest) {
      // this.http.get<String>(this.urlSaludo,{ responseType: 'text' as 'json' }).subscribe(response=> 
      this.http.get<{name: string, surname: string}>(this.urlSaludo).subscribe(response=> 
        console.log(response))
      
      this.http.get<any>(this.urlList).subscribe(response=> 
        console.log(response))
    }
  }

}
