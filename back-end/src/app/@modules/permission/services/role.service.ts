/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './../entities/role.entity';

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {
    super(roleRepository, Role.name);
  }

  async filter() {
    const result = await this.roleRepository.findAndCount({});
    return result[0];
  }
}
