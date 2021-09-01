/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Service } from './entities/service.entity';
import { ServiceController } from './controllers/service.controller';
import { ServiceDepartment } from './entities/service-department.entity';
import { ServiceDepartmentController } from './controllers/service-department.controller';
import { ServiceDepartmentService } from './services/service-department.service';
import { ServiceDepartmentSubscriber } from './subscriptions/service-department.subscription';
import { ServiceService } from './services/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const SERVICES = [ServiceDepartmentService, ServiceService];
const CONTROLLERS = [ServiceDepartmentController, ServiceController];
const ENTITIES = [ServiceDepartment, Service];
const SUBSCRIBERS = [ServiceDepartmentSubscriber];

@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES, ...SUBSCRIBERS],
})
export class ServiceModule {}
