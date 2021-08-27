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
exports.UserSubscriber = void 0;
const events_constants_1 = require("../constants/events.constants");
const helpers_1 = require("../helpers");
const user_entities_1 = require("../../@modules/user/entities/user.entities");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const typedi_1 = require("typedi");
const typeorm_2 = require("typeorm");
let UserSubscriber = class UserSubscriber {
    constructor(connection, appEvent) {
        this.connection = connection;
        this.appEvent = appEvent;
        connection.subscribers.push(this);
    }
    listenTo() {
        return user_entities_1.User;
    }
    async beforeInsert(event) {
        event.entity.password = await this._hashPassword(event.entity.password);
    }
    async afterInsert(event) {
        this.appEvent.emit(events_constants_1.USER_CREATED, event.entity);
    }
    async _hashPassword(password) {
        const bcryptHelper = typedi_1.default.get(helpers_1.BcryptHelper);
        return bcryptHelper.hashString(password);
    }
};
UserSubscriber = __decorate([
    typeorm_2.EventSubscriber(),
    __param(0, typeorm_1.InjectConnection()),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        event_emitter_1.EventEmitter2])
], UserSubscriber);
exports.UserSubscriber = UserSubscriber;
//# sourceMappingURL=user.subscriber.js.map