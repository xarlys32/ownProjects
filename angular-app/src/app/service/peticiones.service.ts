import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {
    public url: string;
    constructor(
        public _httpClient: HttpClient
    ) {
        this.url = "https://reqres.in/";
    }

    getUser(userId): Observable<any> {
        return this._httpClient.get(this.url+'api/users/'+userId);
    }
}