import { BaseService } from '@application/base';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './../entities/permissions.entity';
import { RoleUserService } from './role-user.service';
import { RoleService } from './role.service';

@Injectable()
export class PermissionService extends BaseService<Permission> {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
    private roleService: RoleService,
    private roleUserService: RoleUserService,
  ) {
    super(permissionRepository, Permission.name);
  }

  async getUserPermissions(): Promise<any> {
    const userRoles = await this.roleUserService.findAll({}, ['role']);
    console.log(
      '🚀 ~ file: permission.service.ts ~ line 25 ~ PermissionService ~ getUserPermissions ~ userRoles',
      userRoles,
    );
  }
}
