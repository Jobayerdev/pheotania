/*
https://docs.nestjs.com/providers#services
*/

import { BcryptHelper, JWTHelper } from '@application/helpers';

import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './../dtos/login-user.dto';
import { NotFoundError } from './../../../@application/errors/notFound.error';
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
      //* Get User From DB
      const user: any = await this.userService.findByPhoneNumber(phoneNumber);
      //* Verify User
      if (!user) {
        throw new NotFoundError('User Not Exist');
      }

      //*Verify Password
      const isPasswordValid = await this.bcryptHelper.compareHash(
        password,
        user.password,
      );
      if (isPasswordValid === false) {
        throw new NotFoundError(`Password Not matched`);
      }

      //* Generated Access Token
      const token = await this.jwtHelper.makeAccessToken({ id: user.id });
      return {
        auth: true,
        token,
      };
    } catch (error) {
      throw new NotFoundError(error.message);
    }
  }
}
