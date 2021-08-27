/*
https://docs.nestjs.com/modules
*/

import { HelperModule } from '@application/helpers/helper.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entities';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserSubscriber } from '@application/subscribers/user.subscriber';

const ENTITIES = [User];
const REPOSITORIES = [UserRepository];
const SERVICES = [UserService];
const CONTROLLERS = [UserController];
const SUBSCRIBER = [UserSubscriber];

@Module({
  imports: [
    TypeOrmModule.forFeature([...ENTITIES, ...REPOSITORIES]),
    HelperModule,
  ],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES, ...SUBSCRIBER],
  exports: [...SERVICES],
})
export class UserModule {}
