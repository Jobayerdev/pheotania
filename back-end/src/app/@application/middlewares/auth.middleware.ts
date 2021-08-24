import { Injectable, NestMiddleware } from '@nestjs/common';

import { JWTHelper } from './../helpers/jwt.helper';
import { RequestMethods } from '@application/enums';
import { Response } from 'express';
import { extractToken } from '@application/utils';

/*
https://docs.nestjs.com/middleware#middleware
*/

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtHelper: JWTHelper) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  async use(req: any, res: Response, next: Function) {
    const token = extractToken(req.headers);

    const verifiedUser: any = await this.jwtHelper.verify(token);

    const verifiedPermission: any = await this.jwtHelper.verify(
      verifiedUser.permissions,
    );

    req.permissions = verifiedPermission.permissions;

    if (req.method === RequestMethods.POST) {
      req.body.createdBy = verifiedUser.phoneNumber;
    } else if (req.method === RequestMethods.PUT) {
      req.body.updatedBy = verifiedUser.phoneNumber;
    } else if (req.method === RequestMethods.DELETE) {
      req.body.deletedBy = verifiedUser.phoneNumber;
    }
    next();
  }
}
