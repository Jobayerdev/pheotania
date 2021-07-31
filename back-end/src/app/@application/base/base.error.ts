import { ApiErrorException } from './../errors/apierror.exception';
import { AppErrorResponse } from './../types/errorResponse.type';
import { IBaseError } from '@application/interfaces/baseError.interfaces';

export class BaseError extends Error implements IBaseError {
  private errorResponse: AppErrorResponse;
  private httpErrorCode: number;

  constructor(appErrorCode: number, message: string) {
    super(message);
    this.errorResponse = new AppErrorResponse(
      this.message,
      appErrorCode,
      this.message,
    );
  }

  getResponseObject(): AppErrorResponse {
    throw new ApiErrorException(this.errorResponse);
  }
  setResponseJSONString(): string {
    const str = JSON.stringify(this.getResponseObject());
    return str.replace(/\\\"/g, '');
  }
  getHTTPErrorCode(): number {
    return this.httpErrorCode;
  }
}
