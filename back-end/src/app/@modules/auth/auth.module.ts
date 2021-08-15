import { AuthLoginController } from './controllers/authLogin.controller';
import { AuthLoginService } from './services/auth.-login.service';
import { AuthRegisterController } from './controllers/authRegister.controller';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HelperModule],
  controllers: [AuthLoginController, AuthRegisterController],
  providers: [AuthLoginService],
})
export class AuthModule {}
