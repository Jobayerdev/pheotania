import { IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { CreateRolePermissionDTO } from '../dtos/rolePermission/insert.dto';
import { RolePermissionUpdateDTO } from '../dtos/rolePermission/update.dto';
import { RolePermission } from '../entities/role-premission.entity';
import { RolePermissionService } from '../services/role-permission.service';
export declare class RolePermissionController {
    private readonly service;
    private static NAME;
    constructor(service: RolePermissionService);
    insert(reqOptions: IOptions, reqPayloads: CreateRolePermissionDTO): Promise<RolePermission>;
    update(id: string, reqPayloads: RolePermissionUpdateDTO): Promise<RolePermission>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
