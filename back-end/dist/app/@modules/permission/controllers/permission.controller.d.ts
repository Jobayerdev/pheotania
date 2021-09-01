import { IOptions } from '@application/interfaces/base.interfaces';
import { AddUserExtendedPermissionDTO } from '../dtos/permission/add-user-permission.dto';
import { GetAllPermissionsDTO } from '../dtos/permission/get-all.dto';
import { CreatePermissionDTO } from '../dtos/permission/insert.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/permission/remove-user-permission.dto';
import { PermissionUpdateDTO } from '../dtos/permission/update.dto';
import { PermissionService } from '../services/permission.service';
export declare class PermissionController {
    private service;
    constructor(service: PermissionService);
    getUserPermission(userId: string): Promise<string[]>;
    get(reqOptions: IOptions, reqPayload: GetAllPermissionsDTO): Promise<import("@application/interfaces/base.interfaces").IGetAllFromDBResponse<import("../entities/permissions.entity").Permission>>;
    create(data: CreatePermissionDTO): Promise<import("../entities/permissions.entity").Permission>;
    update(data: PermissionUpdateDTO, id: string): Promise<import("../entities/permissions.entity").Permission>;
    delete(id: string): Promise<any>;
    addUserExtendedPermissions(userId: string, payload: AddUserExtendedPermissionDTO): Promise<string[]>;
    removeUserExtendedPermissions(userId: string, payload: RemoveUserExtendedPermissionDTO): Promise<string[]>;
}
