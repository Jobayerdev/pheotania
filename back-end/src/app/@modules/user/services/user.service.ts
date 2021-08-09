/*
https://docs.nestjs.com/providers#services
*/

import { CreateUserDTO } from '../dtos/createUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDTO) {
    console.log(createUserDto);
  }
}
