import { AUTH_ERROR_CODE } from '@application/constants/errorCode.constants';
import { BaseError } from './../base/base.error';

export class AuthException extends BaseError {
  constructor(message?: string, developerMessage?: string) {
    message = message || 'Authentication Error';
    super(AUTH_ERROR_CODE, message);
  }
}
