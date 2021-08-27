import { USER_CREATED } from '@application/constants/events.constants';
import { BcryptHelper } from '@application/helpers';
import { User } from '@modules/user/entities/user.entities';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectConnection } from '@nestjs/typeorm';
import Container from 'typedi';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly appEvent: EventEmitter2,
  ) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  public async beforeInsert(event: InsertEvent<User>) {
    event.entity.password = await this._hashPassword(event.entity.password);
  }

  public async afterInsert(event: InsertEvent<User>) {
    this.appEvent.emit(USER_CREATED, event.entity);
  }

  private async _hashPassword(password: any) {
    const bcryptHelper = Container.get(BcryptHelper);
    return bcryptHelper.hashString(password);
  }
}
