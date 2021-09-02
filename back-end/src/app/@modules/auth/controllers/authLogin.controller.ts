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

  @Post('admin')
  @ApiBody({ type: LoginUserDTO })
  async admin(@Body() loginUserDto: LoginUserDTO) {
    return this.authLoginService.loginAdmin(loginUserDto);
  }
  @Post('customer')
  @ApiBody({ type: LoginUserDTO })
  async customer(@Body() loginUserDto: LoginUserDTO) {
    return this.authLoginService.loginCustomer(loginUserDto);
  }
}
