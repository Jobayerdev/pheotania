/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthRegisterDTO } from '../dtos/register.dto';
import { AuthRegisterService } from './../services/auth-register.service';
@ApiTags('Register')
@Controller('auth/register')
export class AuthRegisterController {
  constructor(private authRegisterService: AuthRegisterService) {}

  @Post('')
  @ApiBody({ type: AuthRegisterDTO })
  async register(@Body() authRegisterDto: AuthRegisterDTO) {
    return this.authRegisterService.authRegister(authRegisterDto);
  }
}
