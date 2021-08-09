import { Controller, Post } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './../dtos/createUser.dto';
import { UserService } from './../services/user.service';

/*
https://docs.nestjs.com/controllers#controllers
*/

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  async create(createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }
}
