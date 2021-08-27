import { BaseService } from '@application/base/base.service';
import { Repository } from 'typeorm';
import { UserExtendedPermission } from '../entities/userExtendedPermission.entity';
export declare class UserExtendedPermissionService extends BaseService<UserExtendedPermission> {
    private readonly service;
    constructor(service: Repository<UserExtendedPermission>);
}
