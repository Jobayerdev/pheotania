import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HelperModule, CommonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
