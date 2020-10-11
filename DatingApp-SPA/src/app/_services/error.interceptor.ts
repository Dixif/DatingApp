import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next.handle(req).pipe(
            catchError(error => {
                    if (error instanceof HttpErrorResponse){
                        // tslint:disable-next-line:no-conditional-assignment
                        if (error.status === 401){
                            return throwError(error.statusText);
                        }
                        const applicationError = error.headers.get('Application-error');

                        if (applicationError){
                            console.error(applicationError);
                            return throwError(applicationError);
                        }
                        const serverError = error.error;
                        let modelStateErrror = '';
                        if (serverError && typeof serverError === 'object'){
                            for (const key in serverError){
                                if (serverError[key]){
                                    modelStateErrror += serverError[key] + '\n';
                                }
                            }
                        }
                        return throwError(modelStateErrror || serverError || 'Server Error!');
                    }
            })
        );
    }
}

export const ErrorInterceptorProvider = {
provide: HTTP_INTERCEPTORS,
useClass: ErrorInterceptor,
multi: true
};
