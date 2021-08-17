import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

import { methodSuccessMessage } from './../utils/responsePlaceholder.util';
import { successPlaceholder } from '@application/utils/responsePlaceholder.util';

/*
https://docs.nestjs.com/interceptors#interceptors
*/

@Injectable()
export class ResponsePlaceholderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const responseMessage = methodSuccessMessage(
      context.getArgs()[1].req.method,
    );
    return next.handle().pipe(
      map((content: any) => {
        if (content instanceof Error) {
          throw content;
        } else if (content) {
          return successPlaceholder(responseMessage, content);
        } else if (typeof content == 'undefined') {
          return successPlaceholder(responseMessage, null);
        } else {
          throw new HttpException('Unknown Error', HttpStatus.BAD_REQUEST);
        }
      }),
    );
  }
}
