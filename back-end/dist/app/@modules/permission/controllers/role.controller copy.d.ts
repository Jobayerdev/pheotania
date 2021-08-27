import { RoleDTO } from '../dtos/role/role.dto';
import { RoleService } from './../services/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDTO: RoleDTO): Promise<import("../entities/role.entity").Role>;
    update(createRoleDTO: RoleDTO, id: string): Promise<import("../entities/role.entity").Role>;
    delete(id: string): Promise<any>;
}
