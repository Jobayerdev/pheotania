import { BaseEntity } from '@application/base';
import { PermissionType } from './permissionType.entity';
export declare class Permission extends BaseEntity {
    static readonly SEARCH_TERMS: string[];
    static readonly ORDERS: string[];
    static readonly RELATIONS: string[];
    title?: string;
    permissionType?: PermissionType;
}
