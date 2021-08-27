import { BaseService } from '@application/base';
import { Repository } from 'typeorm';
import { RolePermission } from '../entities/role-premission.entity';
export declare class RolPermissionService extends BaseService<RolePermission> {
    private rolePermissionRepository;
    constructor(rolePermissionRepository: Repository<RolePermission>);
}
