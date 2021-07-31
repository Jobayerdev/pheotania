import { AppErrorResponse } from './../types/errorResponse.type';

export interface IBaseError {
  getResponseObject(): AppErrorResponse;

  setResponseJSONString(): string;

  getHTTPErrorCode(): number;
}
