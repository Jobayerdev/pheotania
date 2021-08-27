import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { PermissionType } from './../entities/permissionType.entity';
export declare class PermissionTypeService extends BaseService<PermissionType> {
    private readonly permissionTypeRepository;
    constructor(permissionTypeRepository: Repository<PermissionType>);
}
