import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { AddUserExtendedPermissionDTO } from '../dtos/permission/add-user-permission.dto';
import { GetAllPermissionsDTO } from '../dtos/permission/get-all.dto';
import { CreatePermissionDTO } from '../dtos/permission/insert.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/permission/remove-user-permission.dto';
import { PermissionUpdateDTO } from '../dtos/permission/update.dto';
import { Permission } from '../entities/permissions.entity';
import { PermissionService } from '../services/permission.service';
export declare class PermissionController {
    private readonly service;
    private static NAME;
    constructor(service: PermissionService);
    getUserPermissions(userId: string): Promise<String[]>;
    addUserExtendedPermissions(userId: string, payload: AddUserExtendedPermissionDTO): Promise<String[]>;
    removeUserExtendedPermissions(userId: string, payload: RemoveUserExtendedPermissionDTO): Promise<String[]>;
    getAll(reqOptions: IOptions, reqPayloads: GetAllPermissionsDTO): Promise<IGetAllFromDBResponse<Permission>>;
    getById(id: string): Promise<Permission>;
    insert(reqOptions: IOptions, reqPayloads: CreatePermissionDTO): Promise<Permission>;
    update(id: string, reqPayloads: PermissionUpdateDTO): Promise<Permission>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
