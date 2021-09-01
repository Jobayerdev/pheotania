import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { GetAllPermissionTypesDTO } from '../dtos/permissionType/get-all.dto';
import { CreatePermissionTypeDTO } from '../dtos/permissionType/insert.dto';
import { PermissionTypeUpdateDTO } from '../dtos/permissionType/update.dto';
import { PermissionType } from '../entities/permissionType.entity';
import { PermissionTypeService } from './../services/permissionType.service';
export declare class PermissionTypeController {
    private readonly service;
    private static NAME;
    constructor(service: PermissionTypeService);
    getAll(reqOptions: IOptions, reqPayloads: GetAllPermissionTypesDTO): Promise<IGetAllFromDBResponse<PermissionType>>;
    getById(id: string): Promise<PermissionType>;
    insert(reqOptions: IOptions, reqPayloads: CreatePermissionTypeDTO): Promise<PermissionType>;
    update(id: string, reqPayloads: PermissionTypeUpdateDTO): Promise<PermissionType>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
