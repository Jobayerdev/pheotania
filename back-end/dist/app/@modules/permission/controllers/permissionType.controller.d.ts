import { CreatePermissionTypeDTO } from '../dtos/permissionType/insert.dto';
import { PermissionTypeUpdateDTO } from '../dtos/permissionType/update.dto';
import { PermissionTypeService } from './../services/permissionType.service';
export declare class PermissionTypeController {
    private readonly service;
    constructor(service: PermissionTypeService);
    create(createPermissionTypeDTO: CreatePermissionTypeDTO): Promise<import("../entities/permissionType.entity").PermissionType>;
    update(createPermissionTypeDTO: PermissionTypeUpdateDTO, id: string): Promise<import("../entities/permissionType.entity").PermissionType>;
    delete(id: string): Promise<any>;
}
