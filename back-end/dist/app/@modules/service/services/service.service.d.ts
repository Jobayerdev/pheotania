import { BaseService } from '@application/base/base.service';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entities';
export declare class ServiceService extends BaseService<Service> {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Service>);
    filters(): Promise<Service>;
}
