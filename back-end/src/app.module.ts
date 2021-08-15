import { AuthLoginController } from './app/@modules/auth/controllers/authLogin.controller';
import { AuthModule } from '@modules/auth/auth.module';
import { AuthRegisterController } from './app/@modules/auth/controllers/authRegister.controller';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { UserModule } from './app/@modules/user/user.module';

@Module({
  imports: [UserModule, HelperModule, CommonModule, AuthModule],
  controllers: [AuthRegisterController, AuthLoginController],
  providers: [],
})
export class AppModule {}
