/*
https://docs.nestjs.com/providers#services
*/

import { ENV } from 'src/ENV';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RoleService } from '@modules/permission/services/role.service';
import { RoleUser } from '@modules/permission/entities/role-user.entity';
import { RoleUserService } from '@modules/permission/services/role-user.service';
import { USER_CREATED } from './../../constants/events.constants';

@Injectable()
export class UserCreatedEvent {
  constructor(
    private readonly roleService: RoleService,
    private readonly roleUserService: RoleUserService,
  ) {}
  @OnEvent(USER_CREATED)
  async handleUserCreatedEvent(user: any) {
    const basicRole = await this.roleService.getByCriteriaFromDB(
      { title: ENV.DEFAULT_USER_ROLE },
      {},
    );

    const roleUserPayload: RoleUser = {
      user: user,
      role: basicRole,
    };

    if (user && roleUserPayload) {
      await this.roleUserService.insertIntoDB(roleUserPayload);
    }
  }
}
