import { IOptions } from '@application/interfaces/base.interfaces';
import { AddUserRoleDTO } from '../dtos/role/add-user-role.dto';
import { CreateRoleDTO } from '../dtos/role/insert.dto';
import { RemoveUserRoleDTO } from '../dtos/role/remove-user-role.dto';
import { RoleUpdateDTO } from '../dtos/role/update.dto';
import { GetAllRolesDTO } from './../dtos/role/get-all.dto';
import { RoleService } from './../services/role.service';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    getAll(reqOptions: IOptions, reqPayloads: GetAllRolesDTO): Promise<import("@application/interfaces/base.interfaces").IGetAllFromDBResponse<import("../entities/role.entity").Role>>;
    getUserRoles(userId: string): Promise<string[]>;
    addUserRoles(userId: string, payload: AddUserRoleDTO): Promise<string[]>;
    create(createRoleDTO: CreateRoleDTO): Promise<import("../entities/role.entity").Role>;
    removeUserRoles(userId: string, payload: RemoveUserRoleDTO): Promise<string[]>;
    update(createRoleDTO: RoleUpdateDTO, id: string): Promise<import("../entities/role.entity").Role>;
    delete(id: string): Promise<any>;
}
