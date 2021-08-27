import { User } from '@modules/user/entities/user.entities';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
export declare class UserSubscriber implements EntitySubscriberInterface {
    readonly connection: Connection;
    private readonly appEvent;
    constructor(connection: Connection, appEvent: EventEmitter2);
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): Promise<void>;
    afterInsert(event: InsertEvent<User>): Promise<void>;
    private _hashPassword;
}
