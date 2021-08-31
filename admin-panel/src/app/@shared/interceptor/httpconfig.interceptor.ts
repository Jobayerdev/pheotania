import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isArray, isEmpty } from 'lodash';

import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

const dd = {
  headers: {
    normalizedNames: {},
    lazyUpdate: null,
  },
  status: 500,
  statusText: 'Internal Server Error',
  url: 'http://mighty-mickey.poshapets.com/api/v1/users/',
  ok: false,
  name: 'HttpErrorResponse',
  message:
    'Http failure response for http://mighty-mickey.poshapets.com/api/v1/users/: 500 Internal Server Error',
  error: {
    success: false,
    statusCode: 500,
    errorMessages: [
      'duplicate key value violates unique constraint "UQ_1e3d0240b49c40521aaeb953293"',
    ],
  },
};

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private notification: NzNotificationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse) {
        //   this.notification.success(event?.body?.message, '');
        // }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        const errResponse = error?.error?.errorMessages;
        if (isArray(errResponse) && isEmpty(errResponse) === false) {
          errResponse.map((err: any) => {
            this.notification.error(err, '');
          });
        }
        return throwError(error);
      })
    );
  }
}
