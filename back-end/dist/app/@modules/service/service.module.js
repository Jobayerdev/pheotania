"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModule = void 0;
const common_1 = require("@nestjs/common");
const service_entity_1 = require("./entities/service.entity");
const service_controller_1 = require("./controllers/service.controller");
const service_department_entity_1 = require("./entities/service-department.entity");
const service_department_controller_1 = require("./controllers/service-department.controller");
const service_department_service_1 = require("./services/service-department.service");
const service_department_subscription_1 = require("./subscriptions/service-department.subscription");
const service_service_1 = require("./services/service.service");
const typeorm_1 = require("@nestjs/typeorm");
const SERVICES = [service_department_service_1.ServiceDepartmentService, service_service_1.ServiceService];
const CONTROLLERS = [service_department_controller_1.ServiceDepartmentController, service_controller_1.ServiceController];
const ENTITIES = [service_department_entity_1.ServiceDepartment, service_entity_1.Service];
const SUBSCRIBERS = [service_department_subscription_1.ServiceDepartmentSubscriber];
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([...ENTITIES])],
        controllers: [...CONTROLLERS],
        providers: [...SERVICES, ...SUBSCRIBERS],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map