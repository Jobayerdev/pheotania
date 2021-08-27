import { BaseService } from '@application/base/base.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserExtendedPermission } from '../entities/userExtendedPermission.entity';

@Injectable()
export class UserExtendedPermissionService extends BaseService<UserExtendedPermission> {
  constructor(
    @InjectRepository(UserExtendedPermission)
    private readonly service: Repository<UserExtendedPermission>,
  ) {
    super(service, UserExtendedPermission.name);
  }
}
