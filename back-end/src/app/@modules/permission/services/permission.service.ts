import { BaseService } from '@application/base';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './../entities/permissions.entity';

@Injectable()
export class PermissionService extends BaseService<Permission> {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {
    super(permissionRepository, Permission.name);
  }
}
