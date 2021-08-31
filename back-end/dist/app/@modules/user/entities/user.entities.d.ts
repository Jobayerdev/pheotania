import { BaseEntity } from '@application/base/base.entity';
export declare class User extends BaseEntity {
    static readonly SEARCH_TERMS: string[];
    static readonly ORDERS: string[];
    static readonly RELATIONS: any[];
    phoneNumber?: string;
    password?: string;
    name?: string;
    type?: string;
    email?: string;
    gender?: string;
    address?: string;
    image?: string;
}
