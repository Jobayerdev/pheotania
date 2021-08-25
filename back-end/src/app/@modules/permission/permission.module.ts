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
import { Role } from './entities/role.entity';
import { RoleController } from './controllers/role.controller';
import { RolePermission } from './entities/role-premission.entity';
import { RolePermissionController } from './controllers/rolepermission.controller';
import { RolePermissionService } from './services/role-permission.service';
import { RoleService } from './services/role.service';
import { RoleUser } from './entities/role-user.entity';
import { RoleUserService } from './services/role-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExtendedPermission } from './entities/userExtendedPermission.entity';
import { UserExtendedPermissionService } from './services/userExtendedPermission.service';

const SERVICE = [
  PermissionService,
  RoleService,
  PermissionTypeService,
  PermissionService,
  RolePermissionService,
  RoleUserService,
  UserExtendedPermissionService,
];
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
      PermissionType,
      Permission,
      RolePermission,
      RoleUser,
      UserExtendedPermission,
    ]),
  ],
  controllers: [
    RoleController,
    PermissionTypeController,
    PermissionController,
    RolePermissionController,
  ],
  providers: [...SERVICE],
  exports: [...SERVICE],
})
export class PermissionModule {}
