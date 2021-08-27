import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { RoleUser } from './../entities/role-user.entity';
export declare class RoleUserService extends BaseService<RoleUser> {
    private service;
    constructor(service: Repository<RoleUser>);
    findAll(options: any, relations: string[]): Promise<RoleUser[]>;
}
