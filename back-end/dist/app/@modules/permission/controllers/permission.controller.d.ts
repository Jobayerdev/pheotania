import { IOptions } from '@application/interfaces/base.interfaces';
import { AddUserExtendedPermissionDTO } from '../dtos/add-user-permission.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/remove-user-permission.dto';
import { PermissionService } from '../services/permission.service';
import { GetAllPermissionsDTO, PermissionDTO } from './../dtos/permission.dots';
export declare class PermissionController {
    private service;
    constructor(service: PermissionService);
    getUserPermission(userId: string): Promise<string[]>;
    get(reqOptions: IOptions, reqPayload: GetAllPermissionsDTO): Promise<import("@application/interfaces/base.interfaces").IGetAllFromDBResponse<import("../entities/permissions.entity").Permission>>;
    create(data: PermissionDTO): Promise<import("../entities/permissions.entity").Permission>;
    update(data: PermissionDTO, id: string): Promise<import("../entities/permissions.entity").Permission>;
    delete(id: string): Promise<any>;
    addUserExtendedPermissions(userId: string, payload: AddUserExtendedPermissionDTO): Promise<string[]>;
    removeUserExtendedPermissions(userId: string, payload: RemoveUserExtendedPermissionDTO): Promise<string[]>;
}
