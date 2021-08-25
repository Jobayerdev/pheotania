import { AuthLoginController } from './controllers/authLogin.controller';
import { AuthLoginService } from './services/auth-login.service';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { UserModule } from './../user/user.module';

@Module({
  imports: [HelperModule, UserModule],
  controllers: [AuthLoginController],
  providers: [AuthLoginService],
})
export class AuthModule {}
