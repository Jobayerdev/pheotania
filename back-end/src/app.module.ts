import { AuthLoginController } from './app/@modules/auth/controllers/authLogin.controller';
import { AuthLoginService } from './app/@modules/auth/services/auth-login.service';
import { AuthModule } from '@modules/auth/auth.module';
import { AuthRegisterController } from './app/@modules/auth/controllers/authRegister.controller';
import { AuthRegisterService } from './app/@modules/auth/services/auth-register.service';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { ServiceModule } from './app/@modules/service/service.module';
import { UserModule } from './app/@modules/user/user.module';

@Module({
  imports: [ServiceModule, UserModule, HelperModule, CommonModule, AuthModule],
  controllers: [AuthRegisterController, AuthLoginController],
  providers: [AuthLoginService, AuthRegisterService],
})
export class AppModule {}
// 01713606032
