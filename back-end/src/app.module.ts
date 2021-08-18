import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AllExceptionsFilter } from './app/@application/interceptor/exception.filter';
import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { ResponseModifierMiddleware } from './app/@application/middlewares/response-modifier.middleware';
import { ResponsePlaceholderInterceptor } from '@application/interceptor/response-placeholder.interceptor';
import { ServiceModule } from './app/@modules/service/service.module';
import { UserModule } from './app/@modules/user/user.module';

@Module({
  imports: [ServiceModule, UserModule, HelperModule, CommonModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponsePlaceholderInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseModifierMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
// 01713606032
