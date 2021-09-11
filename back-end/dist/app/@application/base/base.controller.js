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
exports.BaseController = void 0;
const requestoptions_decorator_1 = require("../decorators/requestoptions.decorator");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const user_entities_1 = require("../../@modules/user/entities/user.entities");
const common_1 = require("@nestjs/common");
class BaseController {
    constructor(_modelService) {
        this._modelService = _modelService;
        this._service = this._modelService;
    }
    async getAll(reqOptions, reqPayloads) {
        return this._service.getAllFromDB(reqPayloads, reqOptions);
    }
    async getById(id) {
        return this._service.getByIdFromDB(id);
    }
    async insert(reqOptions, reqPayloads) {
        return this._service.createUser(reqPayloads);
    }
    async update(id, reqPayloads) {
        return this._service.updateIntoDB(id, reqPayloads);
    }
    async delete(id) {
        return this._service.deleteFromDB(id);
    }
}
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, requestoptions_decorator_1.RequestOptions)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, requestoptions_decorator_1.RequestOptions)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map