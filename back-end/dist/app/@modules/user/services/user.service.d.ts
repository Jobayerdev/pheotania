import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entities';
export declare class UserService extends BaseService<User> {
    private readonly service;
    constructor(service: Repository<User>);
    checkIfUserExist(phoneNumber: string): Promise<User | unknown>;
}
