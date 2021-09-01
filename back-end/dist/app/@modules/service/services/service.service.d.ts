import { BaseService } from '@application/base/base.service';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';
export declare class ServiceService extends BaseService<Service> {
    private serviceRepository;
    constructor(serviceRepository: Repository<Service>);
}
