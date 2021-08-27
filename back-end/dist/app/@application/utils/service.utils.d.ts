import { FindManyOptions, FindOneOptions } from 'typeorm';
import { IOptions } from '@application/interfaces/base.interfaces';
export declare const createTypeORMFindOneOptions: (criteria: any, options: IOptions, entity: any) => Promise<FindOneOptions>;
export declare const createTypeORMFindManyOptions: (filters: any, options: IOptions, entity: any) => Promise<FindManyOptions>;
export declare const BeforeDate: (date: Date) => import("typeorm").FindOperator<Date>;
export declare const AfterDate: (date: Date) => import("typeorm").FindOperator<Date>;
