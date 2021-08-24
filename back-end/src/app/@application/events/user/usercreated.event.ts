/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserCreatedEvent {
  @OnEvent('USER_CREATED')
  async handleUserCreatedEvent(user: any) {
    console.log(user);
  }
}
