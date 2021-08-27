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
var ServiceController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const permissionfor_decorator_1 = require("./../../../@application/decorators/permissionfor.decorator");
const base_enums_1 = require("./../../../@application/enums/base.enums");
const create_service_dto_1 = require("./../dtos/create-service.dto");
const get_all_dto_1 = require("./../dtos/get-all.dto");
const service_service_1 = require("./../services/service.service");
let ServiceController = ServiceController_1 = class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    async getAll() {
        return this.serviceService.filters();
    }
    async create(createServiceDto) {
        return this.serviceService.insertIntoDB(createServiceDto);
    }
    async update(id, createServiceDto) {
        return this.serviceService.updateIntoDB(id.trim(), createServiceDto);
    }
    async delete(id) {
        return this.serviceService.deleteFromDB(id.trim());
    }
    async getById(id) {
        return this.serviceService.getByIdFromDB(id.trim());
    }
};
ServiceController.NAME = 'Service';
__decorate([
    common_1.Get('filter'),
    permissionfor_decorator_1.PermissionFor(`${ServiceController_1.NAME}${base_enums_1.AppPermissionTypes.VIEW}`),
    swagger_1.ApiProperty({ type: get_all_dto_1.GetAllServiceDTO }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "getAll", null);
__decorate([
    common_1.Post(''),
    swagger_1.ApiBody({ type: create_service_dto_1.CreateServiceDTO }),
    permissionfor_decorator_1.PermissionFor(`${ServiceController_1.NAME}${base_enums_1.AppPermissionTypes.CREATE}`),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDTO]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiBody({ type: create_service_dto_1.CreateServiceDTO }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_service_dto_1.CreateServiceDTO]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "getById", null);
ServiceController = ServiceController_1 = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Service'),
    common_1.Controller('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map