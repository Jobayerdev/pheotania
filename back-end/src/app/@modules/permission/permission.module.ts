/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Permission } from './entities/permissions.entity';
import { PermissionController } from './controllers/permission.controller';
import { PermissionService } from './services/permission.service';
import { PermissionType } from './entities/permissionType.entity';
import { PermissionTypeController } from './controllers/permissionType.controller';
import { PermissionTypeService } from './services/permissionType.service';
import { RolPermissionService } from './services/rol-permission.service';
import { Role } from './entities/role.entity';
import { RoleController } from './controllers/role.controller';
import { RolePermission } from './entities/role-premission.entity';
import { RolePermissionController } from './controllers/rolepermission.controller';
import { RoleService } from './services/role.service';
import { RoleUser } from './entities/role-user.entity';
import { RoleUserService } from './services/role-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
      PermissionType,
      Permission,
      RolePermission,
      RoleUser,
    ]),
  ],
  controllers: [
    RoleController,
    PermissionTypeController,
    PermissionController,
    RolePermissionController,
  ],
  providers: [
    PermissionService,
    RoleService,
    PermissionTypeService,
    PermissionService,
    RolPermissionService,
    RoleUserService,
  ],
})
export class PermissionModule {}
