"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const base_1 = require("../../../@application/base");
const utils_1 = require("../../../@application/utils");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const permissions_entity_1 = require("./../entities/permissions.entity");
const role_permission_service_1 = require("./role-permission.service");
const role_user_service_1 = require("./role-user.service");
const role_service_1 = require("./role.service");
const userExtendedPermission_service_1 = require("./userExtendedPermission.service");
let PermissionService = class PermissionService extends base_1.BaseService {
    constructor(permissionRepository, roleService, roleUserService, rolePermissionService, userPermissionService) {
        super(permissionRepository, permissions_entity_1.Permission.name);
        this.permissionRepository = permissionRepository;
        this.roleService = roleService;
        this.roleUserService = roleUserService;
        this.rolePermissionService = rolePermissionService;
        this.userPermissionService = userPermissionService;
    }
    async getUserPermissions(userId) {
        const userRoles = await this.roleUserService.getAllFromDB({ user: userId }, { relations: ['role'] });
        const roleIDs = userRoles.data.map((o) => o.role.id);
        const rolePermissions = await this.rolePermissionService.getAllFromDB({ role: typeorm_2.In(roleIDs) }, { relations: ['permission'] });
        let permissions = rolePermissions.data.map((o) => o.permission.title);
        const userExtendedPermissions = await this.userPermissionService.getAllFromDB({ user: userId }, { relations: ['permission'] });
        const userExtendedPermissionNames = userExtendedPermissions.data.map((uP) => uP.permission.title);
        permissions = [...permissions, ...userExtendedPermissionNames];
        return permissions;
    }
    async addUserExtendedPermissions(userId, payload) {
        const userPermissions = [];
        await utils_1.asyncForEach(payload.permissions, async (p) => {
            const t = {
                user: userId,
                permission: p,
            };
            userPermissions.push(t);
        });
        await this.userPermissionService.bulkInsertIntoDB(userPermissions);
        return this.getUserPermissions(userId);
    }
    async removeUserExtendedPermissions(userId, payload) {
        await utils_1.asyncForEach(payload.permissions, async (p) => {
            await this.userPermissionService.deleteByCriteriaFromDB({
                user: userId,
                permission: p,
            });
        });
        return this.getUserPermissions(userId);
    }
};
PermissionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(permissions_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_service_1.RoleService,
        role_user_service_1.RoleUserService,
        role_permission_service_1.RolePermissionService,
        userExtendedPermission_service_1.UserExtendedPermissionService])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map