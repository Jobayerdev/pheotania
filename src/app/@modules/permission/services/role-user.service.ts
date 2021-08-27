import { BaseService } from '@application/base';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleUser } from './../entities/role-user.entity';

@Injectable()
export class RoleUserService extends BaseService<RoleUser> {
  constructor(
    @InjectRepository(RoleUser)
    private service: Repository<RoleUser>,
  ) {
    super(service, RoleUser.name);
  }

  async findAll(options: any = {}, relations: string[]) {
    return this.service.find({ relations, where: options });
  }
}
