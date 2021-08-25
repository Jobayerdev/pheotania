import { Module } from '@nestjs/common';
import { PermissionModule } from '@modules/permission/permission.module';
import { UserCreatedEvent } from './user/usercreated.event';

/*
https://docs.nestjs.com/modules
*/

const EVENTS = [UserCreatedEvent];
@Module({
  imports: [PermissionModule],
  controllers: [],
  providers: [...EVENTS],
})
export class AppEventModule {}
