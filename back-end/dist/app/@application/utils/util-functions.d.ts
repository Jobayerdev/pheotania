/// <reference types="multer" />
import { IProperties } from '@application/interfaces/base.interfaces';
export declare const ILIKE: (searchterm: any) => import("typeorm").FindOperator<any>;
export declare function extractToken(headers: any): string;
export declare function getEntityProperties(entityName: any): Promise<IProperties>;
export declare const asyncForEach: (array: any[], callback: any) => Promise<void>;
export declare const getRandomString: (length: any) => string;
export declare const storageImageOptions: import("multer").StorageEngine;
export declare function generateFilename(file: any): string;
export declare function toBool(value: any): boolean;
