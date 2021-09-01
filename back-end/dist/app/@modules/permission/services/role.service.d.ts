import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { AddUserRoleDTO } from '../dtos/role/add-user-role.dto';
import { RemoveUserRoleDTO } from '../dtos/role/remove-user-role.dto';
import { Role } from './../entities/role.entity';
import { RoleUserService } from './role-user.service';
export declare class RoleService extends BaseService<Role> {
    private readonly roleRepository;
    private readonly userRoleService;
    constructor(roleRepository: Repository<Role>, userRoleService: RoleUserService);
    getUserRoles(userId: string): Promise<string[]>;
    addUserRoles(userId: string, payload: AddUserRoleDTO): Promise<string[]>;
    removeUserRoles(userId: string, payload: RemoveUserRoleDTO): Promise<string[]>;
}
