import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dtos';
import { User } from '../entities/user.entities';
import { UserType } from '../enums';
export declare class UserService extends BaseService<User> {
    private readonly service;
    constructor(service: Repository<User>);
    checkIfUserExist(phoneNumber: string, type: UserType): Promise<User | unknown>;
    createUser(user: CreateUserDTO): Promise<any>;
}
