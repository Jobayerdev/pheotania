/*
https://docs.nestjs.com/controllers#controllers
*/
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { AuthLoginService } from './../services/auth-login.service';
@ApiTags('Login')
@Controller('auth/login')
export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  @Post('')
  @ApiBody({ type: LoginUserDTO })
  async login(@Body() loginUserDto: LoginUserDTO) {
    return this.authLoginService.loginUser(loginUserDto);
  }
}
