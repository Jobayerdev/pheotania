import { AddUserRoleDTO } from '../dtos/add-user-role.dto';
import { RemoveUserRoleDTO } from '../dtos/remove-user-role.dto';
import { RoleDTO } from '../dtos/role.dto';
import { RoleService } from './../services/role.service';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    getUserRoles(userId: string): Promise<string[]>;
    addUserRoles(userId: string, payload: AddUserRoleDTO): Promise<string[]>;
    create(createRoleDTO: RoleDTO): Promise<import("../entities/role.entity").Role>;
    removeUserRoles(userId: string, payload: RemoveUserRoleDTO): Promise<string[]>;
    update(createRoleDTO: RoleDTO, id: string): Promise<import("../entities/role.entity").Role>;
    delete(id: string): Promise<any>;
}
