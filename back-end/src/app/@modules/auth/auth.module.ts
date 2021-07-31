import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HelperModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
