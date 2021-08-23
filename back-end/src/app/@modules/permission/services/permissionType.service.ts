/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionType } from './../entities/permissionType.entity';

@Injectable()
export class PermissionTypeService extends BaseService<PermissionType> {
  constructor(
    @InjectRepository(PermissionType)
    private readonly permissionTypeRepository: Repository<PermissionType>,
  ) {
    super(permissionTypeRepository, PermissionType.name);
  }
}
