"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHelper = void 0;
const bcryptjs_1 = require("bcryptjs");
const ENV_1 = require("./../../../ENV");
const typedi_1 = require("typedi");
const SALT_ROUNDS = Number(ENV_1.ENV.SALT_ROUNDS) || 10;
let BcryptHelper = class BcryptHelper {
    async hashString(plainText, slatRounds = SALT_ROUNDS) {
        return bcryptjs_1.hash(plainText, slatRounds);
    }
    async compareHash(plainText, hashString) {
        return bcryptjs_1.compare(plainText, hashString);
    }
};
BcryptHelper = __decorate([
    typedi_1.Service()
], BcryptHelper);
exports.BcryptHelper = BcryptHelper;
//# sourceMappingURL=bcrypt.helper.js.map