import { PermissionTypeDTO } from './../dtos/permissionType.dto';
import { PermissionTypeService } from './../services/permissionType.service';
export declare class PermissionTypeController {
    private readonly service;
    constructor(service: PermissionTypeService);
    create(createPermissionTypeDTO: PermissionTypeDTO): Promise<import("../entities/permissionType.entity").PermissionType>;
    update(createPermissionTypeDTO: PermissionTypeDTO, id: string): Promise<import("../entities/permissionType.entity").PermissionType>;
    delete(id: string): Promise<any>;
}
