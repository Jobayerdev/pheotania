"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModule = void 0;
const common_1 = require("@nestjs/common");
const permissions_entity_1 = require("./entities/permissions.entity");
const permission_controller_1 = require("./controllers/permission.controller");
const permission_service_1 = require("./services/permission.service");
const permissionType_entity_1 = require("./entities/permissionType.entity");
const permissionType_controller_1 = require("./controllers/permissionType.controller");
const permissionType_service_1 = require("./services/permissionType.service");
const role_entity_1 = require("./entities/role.entity");
const role_controller_1 = require("./controllers/role.controller");
const role_premission_entity_1 = require("./entities/role-premission.entity");
const rolepermission_controller_1 = require("./controllers/rolepermission.controller");
const role_permission_service_1 = require("./services/role-permission.service");
const role_service_1 = require("./services/role.service");
const role_user_entity_1 = require("./entities/role-user.entity");
const role_user_service_1 = require("./services/role-user.service");
const typeorm_1 = require("@nestjs/typeorm");
const userExtendedPermission_entity_1 = require("./entities/userExtendedPermission.entity");
const userExtendedPermission_service_1 = require("./services/userExtendedPermission.service");
const SERVICE = [
    permission_service_1.PermissionService,
    role_service_1.RoleService,
    permissionType_service_1.PermissionTypeService,
    permission_service_1.PermissionService,
    role_permission_service_1.RolePermissionService,
    role_user_service_1.RoleUserService,
    userExtendedPermission_service_1.UserExtendedPermissionService,
];
let PermissionModule = class PermissionModule {
};
PermissionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                role_entity_1.Role,
                permissionType_entity_1.PermissionType,
                permissions_entity_1.Permission,
                role_premission_entity_1.RolePermission,
                role_user_entity_1.RoleUser,
                userExtendedPermission_entity_1.UserExtendedPermission,
            ]),
        ],
        controllers: [
            role_controller_1.RoleController,
            permissionType_controller_1.PermissionTypeController,
            permission_controller_1.PermissionController,
            rolepermission_controller_1.RolePermissionController,
        ],
        providers: [...SERVICE],
        exports: [...SERVICE],
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permission.module.js.map