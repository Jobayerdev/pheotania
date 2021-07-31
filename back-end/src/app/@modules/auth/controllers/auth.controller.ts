import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './../dtos/login-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post()
  @ApiBody({ type: LoginUserDto })
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return loginUserDto;
  }
}
