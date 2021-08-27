/*
https://docs.nestjs.com/providers#services
*/
import { BaseService } from '@application/base/base.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entities';
import { User } from './../../user/entities/user.entities';

@Injectable()
export class ServiceService extends BaseService<Service> {
  constructor(
    @InjectRepository(Service)
    private readonly usersRepository: Repository<Service>,
  ) {
    super(usersRepository, User.name);
  }
  async filters() {
    return this.getByCriteriaFromDB(
      { name: 'AC Servicing' },
      { relations: [] },
    );
  }
}
