import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
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
  @ApiBody({ type: CreateUserDTO })
  async create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }
}
