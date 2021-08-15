import { BcryptHelper, JWTHelper } from '@application/helpers';

import { AuthException } from '@application/errors/auth.exception';
import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login-user.dto';

@Injectable()
export class AuthLoginService {
  constructor(
    private readonly jwtHelper: JWTHelper,
    private bcryptHelper: BcryptHelper,
  ) {}
  async loginUser(payload: LoginUserDto) {
    const user = { password: '123456' };

    if (!user) {
      throw new AuthException('User Not Exist');
    }

    const isPassCorrect: boolean = await this.bcryptHelper.compareHash(
      payload.password,
      user.password,
    );

    if (!isPassCorrect) {
      throw new AuthException('Invalid Password');
    }
  }
}
