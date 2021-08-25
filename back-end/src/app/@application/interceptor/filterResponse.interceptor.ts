import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { AppSuccessResponse } from '../types/successResponse.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FilterResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((content: any) => {
        if (content instanceof Error) {
          throw content;
        }
        // else if (content.data && (content.total === 1 || content.total === 0)) {
        //   return new AppSuccessResponse('successful response', content.data, content.total);
        // }
        else if (content?.data && content.total) {
          return new AppSuccessResponse(
            'successful response',
            content.data,
            content.total,
          );
        } else if (Array.isArray(content)) {
          return new AppSuccessResponse('successful response', content);
        } else if (typeof content === 'object') {
          return new AppSuccessResponse('successful response', content);
        } else if (typeof content === 'undefined') {
          return new AppSuccessResponse('successful response', null);
        } else {
          throw new HttpException('Unknown error', HttpStatus.BAD_REQUEST);
        }
      }),
    );
  }
}
