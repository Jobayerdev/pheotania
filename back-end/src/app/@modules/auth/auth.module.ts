import { AuthLoginController } from './controllers/authLogin.controller';
import { AuthLoginService } from './services/auth-login.service';
import { AuthRegisterController } from './controllers/authRegister.controller';
import { AuthRegisterService } from './services/auth-register.service';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { UserModule } from './../user/user.module';

@Module({
  imports: [HelperModule, UserModule],
  controllers: [AuthLoginController, AuthRegisterController],
  providers: [AuthRegisterService, AuthLoginService],
})
export class AuthModule {}
