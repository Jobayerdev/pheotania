import { BaseEntity } from '@application/base/base.entity';
export declare class Service extends BaseEntity {
    static readonly SEARCH_TERMS: string[];
    static readonly ORDERS: string[];
    static readonly RELATIONS: any[];
    name?: string;
    image?: string;
    overview?: string;
}
