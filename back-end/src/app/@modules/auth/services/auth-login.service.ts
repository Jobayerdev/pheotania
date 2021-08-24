/*
https://docs.nestjs.com/providers#services
*/

import { BcryptHelper, JWTHelper } from '@application/helpers';

import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './../dtos/login-user.dto';
import { UserService } from './../../user/services/user.service';

@Injectable()
export class AuthLoginService {
  constructor(
    private userService: UserService,
    private readonly jwtHelper: JWTHelper,
    private bcryptHelper: BcryptHelper,
  ) {}
  async loginUser(loginUserDto: LoginUserDto) {
    const { password, phoneNumber } = loginUserDto;
    try {
      const user: any = await this.userService.findByPhoneNumber(phoneNumber);
      if (!user) {
        throw new Error('User Not Exist');
      }
      const isPasswordValid = await this.bcryptHelper.compareHash(
        password,
        user.password,
      );
      if (isPasswordValid === false) {
        throw new Error(`Password Not matched`);
      }
      const PERMISSIONS = ['SERVICE_CREATE', 'SERVICE_UPDATE', 'SERVICE_VIEW'];
      const permissions = await this.jwtHelper.makePermissionToken(PERMISSIONS);
      delete user?.password;
      const resPayload = {
        permissions,
        ...user,
      };
      const token = await this.jwtHelper.makeAccessToken(resPayload);
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
