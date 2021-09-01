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
exports.ServiceController = void 0;
const requestoptions_decorator_1 = require("../../../@application/decorators/requestoptions.decorator");
const base_interfaces_1 = require("../../../@application/interfaces/base.interfaces");
const dtos_1 = require("../../user/dtos");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_dtos_1 = require("../dtos/service.dtos");
const service_dtos_2 = require("./../dtos/service.dtos");
const service_service_1 = require("./../services/service.service");
let ServiceController = class ServiceController {
    constructor(service) {
        this.service = service;
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
__decorate([
    common_1.Get(),
    swagger_1.ApiProperty({ type: dtos_1.GetAllUsersDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, service_dtos_2.GetAllServiceDTO]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiProperty({ type: dtos_1.GetUserByIdDTO }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: service_dtos_1.ServiceDTO }),
    __param(0, requestoptions_decorator_1.RequestOptions()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, service_dtos_1.ServiceDTO]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "insert", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiBody({ type: service_dtos_1.ServiceDTO }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, service_dtos_1.ServiceDTO]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "delete", null);
ServiceController = __decorate([
    swagger_1.ApiTags('Service'),
    common_1.Controller('services'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map