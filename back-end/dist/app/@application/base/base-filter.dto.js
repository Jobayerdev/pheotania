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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class BaseFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'abc' }),
    __metadata("design:type", String)
], BaseFilterDTO.prototype, "searchTerm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: "['2020-04-08', '2020-06-02']" }),
    __metadata("design:type", String)
], BaseFilterDTO.prototype, "between", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: '2021-04-08' }),
    __metadata("design:type", String)
], BaseFilterDTO.prototype, "before", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: '2021-04-06' }),
    __metadata("design:type", String)
], BaseFilterDTO.prototype, "after", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: '10' }),
    __metadata("design:type", Number)
], BaseFilterDTO.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: '1' }),
    __metadata("design:type", Number)
], BaseFilterDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'false' }),
    __metadata("design:type", Boolean)
], BaseFilterDTO.prototype, "fetchAll", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'false' }),
    __metadata("design:type", Boolean)
], BaseFilterDTO.prototype, "single", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'false' }),
    __metadata("design:type", Boolean)
], BaseFilterDTO.prototype, "isActive", void 0);
exports.BaseFilterDTO = BaseFilterDTO;
//# sourceMappingURL=base-filter.dto.js.map