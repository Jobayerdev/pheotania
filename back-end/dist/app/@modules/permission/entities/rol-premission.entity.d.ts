import { BaseEntity } from '@application/base';
import { Permission } from './permissions.entity';
import { Role } from './role.entity';
export declare class RolePermission extends BaseEntity {
    role?: Role | unknown;
    permissions?: Permission;
}
