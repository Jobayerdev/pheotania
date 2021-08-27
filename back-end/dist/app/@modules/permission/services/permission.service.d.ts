import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { AddUserExtendedPermissionDTO } from '../dtos/add-user-permission.dto';
import { RemoveUserExtendedPermissionDTO } from '../dtos/remove-user-permission.dto';
import { Permission } from './../entities/permissions.entity';
import { RolePermissionService } from './role-permission.service';
import { RoleUserService } from './role-user.service';
import { RoleService } from './role.service';
import { UserExtendedPermissionService } from './userExtendedPermission.service';
export declare class PermissionService extends BaseService<Permission> {
    private permissionRepository;
    private roleService;
    private roleUserService;
    private readonly rolePermissionService;
    private readonly userPermissionService;
    constructor(permissionRepository: Repository<Permission>, roleService: RoleService, roleUserService: RoleUserService, rolePermissionService: RolePermissionService, userPermissionService: UserExtendedPermissionService);
    getUserPermissions(userId: string): Promise<any>;
    addUserExtendedPermissions(userId: string, payload: AddUserExtendedPermissionDTO): Promise<string[]>;
    removeUserExtendedPermissions(userId: string, payload: RemoveUserExtendedPermissionDTO): Promise<string[]>;
}
