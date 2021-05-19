import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.userSubject
            .pipe(take(1), exhaustMap(user => {
            if (user == null) {
                return next.handle(req)
            }
            let params =  new HttpParams().set('access_token', user.token)
            let modifiedReq = req.clone ({
                'params': params
            })
            return next.handle(modifiedReq)
        }))
    }

}