import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { User } from '../entities/user.entities';
import { CreateUserDTO, GetAllUsersDTO, UserUpdateDTO } from './../dtos/index';
import { UserService } from './../services/user.service';
export declare class UserController {
    private readonly service;
    private static NAME;
    constructor(service: UserService);
    getAll(reqOptions: IOptions, reqPayloads: GetAllUsersDTO): Promise<IGetAllFromDBResponse<User>>;
    getById(id: string): Promise<User>;
    insert(reqOptions: IOptions, reqPayloads: CreateUserDTO): Promise<User>;
    update(id: string, reqPayloads: UserUpdateDTO): Promise<User>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
