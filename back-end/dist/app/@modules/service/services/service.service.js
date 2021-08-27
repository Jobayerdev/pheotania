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
exports.ServiceService = void 0;
const base_service_1 = require("../../../@application/base/base.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const service_entities_1 = require("../entities/service.entities");
const user_entities_1 = require("./../../user/entities/user.entities");
let ServiceService = class ServiceService extends base_service_1.BaseService {
    constructor(usersRepository) {
        super(usersRepository, user_entities_1.User.name);
        this.usersRepository = usersRepository;
    }
    async filters() {
        return this.getByCriteriaFromDB({ name: 'AC Servicing' }, { relations: [] });
    }
};
ServiceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(service_entities_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiceService);
exports.ServiceService = ServiceService;
//# sourceMappingURL=service.service.js.map