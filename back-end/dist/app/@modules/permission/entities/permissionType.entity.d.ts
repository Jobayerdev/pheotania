import { BaseEntity } from '@application/base/base.entity';
export declare class PermissionType extends BaseEntity {
    static readonly SEARCH_TERMS: string[];
    static readonly ORDERS: string[];
    static readonly RELATIONS: any[];
    title?: string;
}
