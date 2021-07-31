import { AppErrorResponse } from '@application/types/errorResponse.type';
import { BAD_REQUEST_ERROR_CODE } from './../constants/errorCode.constants';
import { HttpException } from '@nestjs/common';

/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

export class ApiErrorException extends HttpException {
  constructor(data: AppErrorResponse) {
    super(data, BAD_REQUEST_ERROR_CODE);
  }
}
