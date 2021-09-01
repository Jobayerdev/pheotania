import { BaseService } from '@application/base/base.service';
/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServiceService extends BaseService<Service> {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {
    super(serviceRepository, Service.name);
  }
}
