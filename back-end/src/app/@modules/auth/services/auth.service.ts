import { BcryptHelper, JWTHelper } from '@application/helpers';

import { AuthException } from '@application/errors/auth.exception';
import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './../dtos/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtHelper: JWTHelper,
    private bcryptHelper: BcryptHelper,
  ) {}
  async loginUser(payload: LoginUserDto) {
    const user = false;

    if (!user) {
      throw new AuthException('User Not Exist');
    }

    //Todo
  }
}
