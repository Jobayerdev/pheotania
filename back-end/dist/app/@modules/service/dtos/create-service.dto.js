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
exports.CreateServiceDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateServiceDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true, example: 'AC Servicing' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateServiceDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'https://i.ibb.co/PGkNG58/1619427688-acservicing.jpg',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateServiceDTO.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '7 Days service warranty',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateServiceDTO.prototype, "overview", void 0);
exports.CreateServiceDTO = CreateServiceDTO;
//# sourceMappingURL=create-service.dto.js.map