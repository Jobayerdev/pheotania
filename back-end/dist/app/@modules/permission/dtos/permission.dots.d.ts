import { BaseFilterDTO } from '@application/base';
export declare class PermissionDTO {
    title: string;
    permissionType: any;
}
export declare class GetAllPermissionsDTO extends BaseFilterDTO {
    readonly selects: string;
    readonly relations: string;
    readonly order: string;
    readonly title: string;
    readonly permissionType: any;
}
