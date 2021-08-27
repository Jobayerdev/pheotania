/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Service } from './entities/service.entities';
import { ServiceController } from './controllers/service.controller';
import { ServiceService } from './services/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const ENTITIES = [Service];
const SERVICES = [ServiceService];
const CONTROLLERS = [ServiceController];
@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class ServiceModule {}
