/*
https://docs.nestjs.com/providers#services
*/

import { AuthRegisterDTO } from '../dtos/register.dto';
import { Injectable } from '@nestjs/common';
import { UserService } from './../../user/services/user.service';

@Injectable()
export class AuthRegisterService {
  constructor(private useService: UserService) {}

  async authRegister(authRegisterDto: AuthRegisterDTO) {
    return this.useService.create(authRegisterDto);
  }
}
