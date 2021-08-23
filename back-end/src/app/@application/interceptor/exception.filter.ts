import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let statusCode: number;
    let errorMessage: string[] = [exception.message];
    if (exception instanceof TypeError) {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      if (exception.message) {
        errorMessage = [exception?.message];
      } else {
        errorMessage = ['Internal Server Error'];
      }
    } else if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      const res: any = exception.getResponse();
      errorMessage = res?.message === 'string' ? [res.message] : res.message;
    } else {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage = errorMessage ? errorMessage : ['Internal Server Error'];
    }

    response.status(statusCode).json({
      success: false,
      status: statusCode,
      errorMessage,
    });
  }
}
