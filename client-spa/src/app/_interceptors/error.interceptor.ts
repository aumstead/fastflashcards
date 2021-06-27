import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modelStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modelStateErrors.push(error.error.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              } else if (error.error.type === 'email') {
                const errorArr = [];
                errorArr.push(error.error.message);
                throw errorArr;
              } else if (error.error.type === 'username') {
                const errorArr = [];
                errorArr.push(error.error.message);
                throw errorArr;
              } else if (error.error.type === 'user has password') {
                const errorArr = [];
                errorArr.push(error.error.message);
                throw errorArr;
              } else if (typeof error.error === 'object') {
                const modelStateErrors = [];
                for (const key in error.error) {
                  if (error.error[key]) {
                    modelStateErrors.push(error.error[key].description);
                  }
                }
                throw modelStateErrors.flat();
              } else {
                console.error('error in 400 else block', error);
              }
              break;

            case 401:
              console.log(error);
              // all 401 unauthorized errors are handled in login component try/catch block
              if (error.error?.source === 'login') {
                // handle error in login component
                break;
              } else if (error.error?.source === 'confirm-email') {
                // handle error in confirm-email component
                break;
              } else if (error.error?.source === 'DeleteData') {
                // handle error in delete-data component
                break;
              } else {
                this._toastr.error('Unauthorized', error.status);
              }
              break;

            case 404:
              this._router.navigateByUrl('/not-found');
              break;

            case 500:
              if (
                error.error?.source === 'register' &&
                error.error?.type === 'send email'
              ) {
                this._router.navigateByUrl('/server-error/register-email');
                const errorArr = [];
                errorArr.push(error.error.message);
                throw errorArr;
              }

              const navigationExtras: NavigationExtras = {
                state: { error: error.error },
              };

              this._toastr.error('error in case 500');
              this._router.navigateByUrl('/server-error', navigationExtras);
              break;

            default:
              this._toastr.error('Something unexpected went wrong');
              break;
          }
        }

        return throwError(error);
      })
    );
  }
}
