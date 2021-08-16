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

const ENTITIES = [User];
const REPOSITORIES = [UserRepository];
const SERVICES = [UserService];
const CONTROLLERS = [UserController];

@Module({
  imports: [
    TypeOrmModule.forFeature([...ENTITIES, ...REPOSITORIES]),
    HelperModule,
  ],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
  exports: [UserService],
})
export class UserModule {}
