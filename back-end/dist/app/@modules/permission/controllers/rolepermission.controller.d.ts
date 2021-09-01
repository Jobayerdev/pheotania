import { CreateRolePermissionDTO } from '../dtos/rolePermission/insert.dto';
import { RolePermissionUpdateDTO } from '../dtos/rolePermission/update.dto';
import { RolePermissionService } from '../services/role-permission.service';
export declare class RolePermissionController {
    private service;
    constructor(service: RolePermissionService);
    create(rolePermissionDTO: CreateRolePermissionDTO): Promise<import("../entities/role-premission.entity").RolePermission>;
    update(id: string, rolePermissionDTO: RolePermissionUpdateDTO): Promise<import("../entities/role-premission.entity").RolePermission>;
    delete(id: string): Promise<any>;
}
