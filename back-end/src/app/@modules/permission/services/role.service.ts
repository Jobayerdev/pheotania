/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base';
import { IGetAllFromDBResponse } from '@application/interfaces/base.interfaces';
import { asyncForEach } from '@application/utils';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserRoleDTO } from '../dtos/add-user-role.dto';
import { RemoveUserRoleDTO } from '../dtos/remove-user-role.dto';
import { RoleUser } from '../entities/role-user.entity';
import { Role } from './../entities/role.entity';
import { RoleUserService } from './role-user.service';

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly userRoleService: RoleUserService,
  ) {
    super(roleRepository, Role.name);
  }

  async getUserRoles(userId: string): Promise<string[]> {
    const userRoles: IGetAllFromDBResponse<RoleUser> =
      await this.userRoleService.getAllFromDB(
        { user: userId as any },
        { relations: ['role'] },
      );

    const roles: string[] = userRoles.data.map((uP) => uP.role.title);

    return roles;
  }

  async addUserRoles(
    userId: string,
    payload: AddUserRoleDTO,
  ): Promise<string[]> {
    const userRoles: RoleUser[] = [];

    await asyncForEach(payload.roles, async (r: string) => {
      const t = {
        user: userId,
        role: r,
      };

      userRoles.push(t as any);
    });

    await this.userRoleService.bulkInsertIntoDB(userRoles);

    return this.getUserRoles(userId);
  }

  async removeUserRoles(
    userId: string,
    payload: RemoveUserRoleDTO,
  ): Promise<string[]> {
    await asyncForEach(payload.roles, async (r: string) => {
      await this.userRoleService.deleteByCriteriaFromDB({
        user: userId as any,
        role: r as any,
      });
    });

    return this.getUserRoles(userId);
  }
}
