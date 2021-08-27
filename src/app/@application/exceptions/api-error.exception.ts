/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException } from '@nestjs/common';

export class ApiErrorException extends HttpException {
  constructor(error: any) {
    super(error.response, error.status);
  }
}
