/*
https://docs.nestjs.com/providers#services
*/

import { BcryptHelper, JWTHelper } from '@application/helpers';

import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { User } from '@modules/user/entities/user.entities';
import { UserService } from './../../user/services/user.service';
import { UserType } from '@modules/user/enums';

@Injectable()
export class AuthLoginService {
  constructor(
    private userService: UserService,
    private readonly jwtHelper: JWTHelper,
    private bcryptHelper: BcryptHelper,
  ) {}
  async loginAdmin(payload: LoginUserDTO): Promise<any> {
    try {
      const user: User = await this.userService.checkIfUserExist(
        payload.phoneNumber,
        UserType.Admin,
      );

      if (!user) {
        throw new Error('User Not Exist');
      }

      const isPassCorrect = await this.bcryptHelper.compareHash(
        payload.password,
        user.password,
      );

      if (!isPassCorrect) {
        throw new Error('Invalid Password');
      }

      // const userPermissions = await this.permissionService.getUserPermissions(
      //   user.id,
      // );
      const userPermissions = [
        'SERVICE_CREATE',
        'SERVICE_UPDATE',
        'SERVICE_VIEW',
      ];

      const permissions = await this.jwtHelper.makePermissionToken(
        userPermissions,
      );

      delete user.password;

      const resPayload = { ...user, permissions };

      const token = await this.jwtHelper.makeAccessToken(resPayload);

      return token;
    } catch (error) {
      return error;
    }
  }
  async loginCustomer(payload: LoginUserDTO): Promise<any> {
    try {
      const user: User = await this.userService.checkIfUserExist(
        payload.phoneNumber,
        UserType.Customer,
      );

      if (!user) {
        throw new Error('User Not Exist');
      }

      const isPassCorrect = await this.bcryptHelper.compareHash(
        payload.password,
        user.password,
      );

      if (!isPassCorrect) {
        throw new Error('Invalid Password');
      }

      // const userPermissions = await this.permissionService.getUserPermissions(
      //   user.id,
      // );
      const userPermissions = [
        'SERVICE_CREATE',
        'SERVICE_UPDATE',
        'SERVICE_VIEW',
      ];

      const permissions = await this.jwtHelper.makePermissionToken(
        userPermissions,
      );

      delete user.password;

      const resPayload = { ...user, permissions };

      const token = await this.jwtHelper.makeAccessToken(resPayload);

      return token;
    } catch (error) {
      return error;
    }
  }
}
