import { HttpException, HttpStatus } from '@nestjs/common';
export declare class AppException extends HttpException {
    constructor(message: string, status?: HttpStatus);
}
