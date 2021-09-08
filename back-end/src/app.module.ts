import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AllExceptionsFilter } from '@application/interceptor/exception.filter';
import { AppEventModule } from '@application/events/appevent.module';
import { AppointmentModule } from './app/@modules/appointment/appointment.module';
import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@common/common.module';
import { FilterResponseInterceptor } from './app/@application/interceptor/filterResponse.interceptor';
import { HelperModule } from '@application/helpers/helper.module';
import { PermissionGuard } from './app/@application/guards/permission.guard';
import { PermissionModule } from '@modules/permission/permission.module';
import { ResponseModifierMiddleware } from '@application/middlewares/response-modifier.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ServiceModule } from './app/@modules/service/service.module';
import { UserModule } from '@modules/user/user.module';
import { UtilsModule } from '@modules/utils/utils.module';
import { join } from 'path';

console.log(join(__dirname, '.', 'uploads'));
@Module({
  imports: [
    AppointmentModule,
    ServiceModule,
    AppEventModule,
    PermissionModule,
    UserModule,
    HelperModule,
    CommonModule,
    AuthModule,
    AppEventModule,
    UtilsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      exclude: ['/api/v1/*'],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: FilterResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseModifierMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    // consumer
    //   .apply(AuthMiddleware)
    //   .exclude(
    //     {
    //       path: '/api/v1/auth/login',
    //       method: RequestMethod.POST,
    //     },
    //     {
    //       path: '/api/v1/auth/register',
    //       method: RequestMethod.POST,
    //     },
    //   )
    //   .forRoutes('*');
  }
}
