import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { Role } from './../entities/role.entity';
export declare class RoleService extends BaseService<Role> {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
}
