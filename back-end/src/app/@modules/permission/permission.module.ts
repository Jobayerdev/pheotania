/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PermissionType } from './entities/permissionType.entity';
import { PermissionTypeController } from './controllers/permissionType.controller';
import { PermissionTypeService } from './services/permissionType.service';
import { Role } from './entities/role.entity';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role, PermissionType])],
  controllers: [RoleController, PermissionTypeController],
  providers: [RoleService, PermissionTypeService],
})
export class PermissionModule {}
