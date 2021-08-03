import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { UserModule } from './app/@modules/user/user.module';

@Module({
  imports: [UserModule, HelperModule, CommonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
