import { NestMiddleware } from '@nestjs/common';
import { JWTHelper } from './../helpers/jwt.helper';
import { Response } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly jwtHelper;
    constructor(jwtHelper: JWTHelper);
    use(req: any, res: Response, next: Function): Promise<void>;
}
