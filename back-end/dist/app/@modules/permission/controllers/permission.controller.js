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
var PermissionController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const permissionfor_decorator_1 = require("../../../@application/decorators/permissionfor.decorator");
const requestoptions_decorator_1 = require("../../../@application/decorators/requestoptions.decorator");
const enums_1 = require("../../../@application/enums");
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const add_user_permission_dto_1 = require("../dtos/permission/add-user-permission.dto");
const get_all_dto_1 = require("../dtos/permission/get-all.dto");
const get_by_id_dto_1 = require("../dtos/permission/get-by-id.dto");
const insert_dto_1 = require("../dtos/permission/insert.dto");
const remove_user_permission_dto_1 = require("../dtos/permission/remove-user-permission.dto");
const update_dto_1 = require("../dtos/permission/update.dto");
const permission_service_1 = require("../services/permission.service");
let PermissionController = PermissionController_1 = class PermissionController {
    constructor(service) {
        this.service = service;
    }
    async getUserPermissions(userId) {
        return this.service.getUserPermissions(userId);
    }
    async addUserExtendedPermissions(userId, payload) {
        return this.service.addUserExtendedPermissions(userId, payload);
    }
    async removeUserExtendedPermissions(userId, payload) {
        return this.service.removeUserExtendedPermissions(userId, payload);
    }
    async getAll(reqOptions, reqPayloads) {
        return this.service.getAllFromDB(reqPayloads, reqOptions);
    }
    async getById(id) {
        return this.service.getByIdFromDB(id);
    }
    async insert(reqOptions, reqPayloads) {
        return this.service.insertIntoDB(reqPayloads);
    }
    async update(id, reqPayloads) {
        return this.service.updateIntoDB(id, reqPayloads);
    }
    async delete(id) {
        return this.service.deleteFromDB(id);
    }
};
PermissionController.NAME = 'Permission';
__decorate([
    (0, common_1.Get)('user-permissions/:userId'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.VIEW}`),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getUserPermissions", null);
__decorate([
    (0, common_1.Post)('user-extended-permissions/:userId'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.CREATE}`),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_user_permission_dto_1.AddUserExtendedPermissionDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "addUserExtendedPermissions", null);
__decorate([
    (0, common_1.Delete)('user-extended-permissions/:userId'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.DELETE}`),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, remove_user_permission_dto_1.RemoveUserExtendedPermissionDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "removeUserExtendedPermissions", null);
__decorate([
    (0, common_1.Get)(),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.VIEW}`),
    (0, swagger_1.ApiProperty)({ type: get_all_dto_1.GetAllPermissionsDTO }),
    __param(0, (0, requestoptions_decorator_1.RequestOptions)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_all_dto_1.GetAllPermissionsDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.VIEW}`),
    (0, swagger_1.ApiProperty)({ type: get_by_id_dto_1.GetPermissionByIdDTO }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.CREATE}`),
    (0, swagger_1.ApiBody)({ type: insert_dto_1.CreatePermissionDTO }),
    __param(0, (0, requestoptions_decorator_1.RequestOptions)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, insert_dto_1.CreatePermissionDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.MODIFY}`),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.PermissionUpdateDTO]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissionfor_decorator_1.PermissionFor)(`${PermissionController_1.NAME}${enums_1.AppPermissionTypes.DELETE}`),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "delete", null);
PermissionController = PermissionController_1 = __decorate([
    (0, swagger_1.ApiTags)('Permissions'),
    (0, common_1.Controller)('permissions'),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map