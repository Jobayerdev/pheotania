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
exports.RolePermissionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const insert_dto_1 = require("../dtos/rolePermission/insert.dto");
const update_dto_1 = require("../dtos/rolePermission/update.dto");
const role_permission_service_1 = require("../services/role-permission.service");
let RolePermissionController = class RolePermissionController {
    constructor(service) {
        this.service = service;
    }
    create(rolePermissionDTO) {
        return this.service.insertIntoDB(rolePermissionDTO);
    }
    update(id, rolePermissionDTO) {
        return this.service.updateIntoDB(id, rolePermissionDTO);
    }
    delete(id) {
        return this.service.deleteFromDB(id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiProperty({ type: insert_dto_1.CreateRolePermissionDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_dto_1.CreateRolePermissionDTO]),
    __metadata("design:returntype", void 0)
], RolePermissionController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiProperty({ type: update_dto_1.RolePermissionUpdateDTO }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.RolePermissionUpdateDTO]),
    __metadata("design:returntype", void 0)
], RolePermissionController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolePermissionController.prototype, "delete", null);
RolePermissionController = __decorate([
    swagger_1.ApiTags('RolePermissions'),
    common_1.Controller('role-permissions'),
    __metadata("design:paramtypes", [role_permission_service_1.RolePermissionService])
], RolePermissionController);
exports.RolePermissionController = RolePermissionController;
//# sourceMappingURL=rolepermission.controller.js.map