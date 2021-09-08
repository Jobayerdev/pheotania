import { BaseService } from '@application/base';
import { asyncForEach } from '@application/utils';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AddUserExtendedPermissionDTO } from '../dtos/permission/add-user-permission.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/permission/remove-user-permission.dto';
import { UserExtendedPermission } from '../entities/userExtendedPermission.entity';
import { IGetAllFromDBResponse } from './../../../@application/interfaces/base.interfaces';
import { Permission } from './../entities/permissions.entity';
import { RolePermission } from './../entities/role-premission.entity';
import { RoleUser } from './../entities/role-user.entity';
import { RolePermissionService } from './role-permission.service';
import { RoleUserService } from './role-user.service';
import { RoleService } from './role.service';
import { UserExtendedPermissionService } from './userExtendedPermission.service';

@Injectable()
export class PermissionService extends BaseService<Permission> {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
    private roleService: RoleService,
    private roleUserService: RoleUserService,
    private readonly rolePermissionService: RolePermissionService,
    private readonly userPermissionService: UserExtendedPermissionService,
  ) {
    super(permissionRepository, Permission.name);
  }

  async getUserPermissions(userId: string): Promise<any> {
    const userRoles: IGetAllFromDBResponse<RoleUser> =
      await this.roleUserService.getAllFromDB(
        { user: userId as any },
        { relations: ['role'] },
      );

    const roleIDs: string[] = userRoles.data.map((o) => o.role.id);

    const rolePermissions: IGetAllFromDBResponse<RolePermission> =
      await this.rolePermissionService.getAllFromDB(
        { role: In(roleIDs) },
        { relations: ['permission'] },
      );

    let permissions = rolePermissions.data.map((o) => o.permission.title);
    const userExtendedPermissions: IGetAllFromDBResponse<UserExtendedPermission> =
      await this.userPermissionService.getAllFromDB(
        { user: userId as any },
        { relations: ['permission'] },
      );

    const userExtendedPermissionNames: string[] =
      userExtendedPermissions.data.map((uP) => uP.permission.title);

    permissions = [...permissions, ...userExtendedPermissionNames];

    return permissions;
  }

  async addUserExtendedPermissions(
    userId: string,
    payload: AddUserExtendedPermissionDTO,
  ): Promise<string[]> {
    const userPermissions: UserExtendedPermission[] = [];

    await asyncForEach(payload.permissions, async (p: string) => {
      const t = {
        user: userId,
        permission: p,
      };

      userPermissions.push(t as any);
    });

    await this.userPermissionService.bulkInsertIntoDB(userPermissions);

    return this.getUserPermissions(userId);
  }

  async removeUserExtendedPermissions(
    userId: string,
    payload: RemoveUserExtendedPermissionDTO,
  ): Promise<string[]> {
    await asyncForEach(payload.permissions, async (p: string) => {
      await this.userPermissionService.deleteByCriteriaFromDB({
        user: userId as any,
        permission: p as any,
      });
    });

    return this.getUserPermissions(userId);
  }
}
