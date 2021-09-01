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
exports.PermissionTypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const insert_dto_1 = require("../dtos/permissionType/insert.dto");
const update_dto_1 = require("../dtos/permissionType/update.dto");
const permissionType_service_1 = require("./../services/permissionType.service");
let PermissionTypeController = class PermissionTypeController {
    constructor(service) {
        this.service = service;
    }
    create(createPermissionTypeDTO) {
        return this.service.insertIntoDB(createPermissionTypeDTO);
    }
    update(createPermissionTypeDTO, id) {
        return this.service.updateIntoDB(id, createPermissionTypeDTO);
    }
    delete(id) {
        return this.service.deleteFromDB(id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: insert_dto_1.CreatePermissionTypeDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_dto_1.CreatePermissionTypeDTO]),
    __metadata("design:returntype", void 0)
], PermissionTypeController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiBody({ type: update_dto_1.PermissionTypeUpdateDTO }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.PermissionTypeUpdateDTO, String]),
    __metadata("design:returntype", void 0)
], PermissionTypeController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionTypeController.prototype, "delete", null);
PermissionTypeController = __decorate([
    swagger_1.ApiTags('PermissionType'),
    common_1.Controller('permissionTypes'),
    __metadata("design:paramtypes", [permissionType_service_1.PermissionTypeService])
], PermissionTypeController);
exports.PermissionTypeController = PermissionTypeController;
//# sourceMappingURL=permissionType.controller.js.map