import { HttpException } from '@nestjs/common';
export declare class ApiErrorException extends HttpException {
    constructor(error: any);
}
