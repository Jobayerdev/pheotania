import { RolePermissionService } from '../services/role-permission.service';
import { RolePermissionDTO } from './../dtos/role-permission.dtos';
export declare class RolePermissionController {
    private service;
    constructor(service: RolePermissionService);
    create(rolePermissionDTO: RolePermissionDTO): Promise<import("../entities/role-premission.entity").RolePermission>;
    update(id: string, rolePermissionDTO: RolePermissionDTO): Promise<import("../entities/role-premission.entity").RolePermission>;
    delete(id: string): Promise<any>;
}
