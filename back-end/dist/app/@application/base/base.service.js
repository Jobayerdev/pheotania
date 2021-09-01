"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const typeorm_1 = require("typeorm");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const service_utils_1 = require("./../utils/service.utils");
const common_1 = require("@nestjs/common");
class BaseService extends typeorm_1.Repository {
    constructor(repository, entityName) {
        super();
        this.repository = repository;
        this.entityName = entityName;
    }
    async insertIntoDB(payload) {
        try {
            const result = await this.repository.insert(payload);
            return this.repository.findOne(result.identifiers[0].id).catch((err) => {
                throw new Error(err);
            });
        }
        catch (error) {
            return error;
        }
    }
    async bulkInsertIntoDB(payload) {
        try {
            const result = await this.repository.insert(payload);
            return {
                message: `${this.entityName} data bulk insert success`,
                ids: result.identifiers,
            };
        }
        catch (error) {
            return error;
        }
    }
    async updateIntoDB(id, payload) {
        try {
            await this.repository.update(id, payload);
            return this.repository.findOne(id).catch((err) => {
                throw new Error(err);
            });
        }
        catch (error) {
            return error;
        }
    }
    async deleteFromDB(id) {
        try {
            const find = await this.repository.findOne(id);
            if (!find) {
                throw new Error('Not Found');
            }
            await this.repository.delete(id);
            return { message: `${this.entityName} data successfully deleted`, id };
        }
        catch (error) {
            return error;
        }
    }
    async deleteByCriteriaFromDB(entity) {
        try {
            await this.repository.delete(entity).catch((err) => {
                throw new Error(err === null || err === void 0 ? void 0 : err.name);
            });
            return { message: `${this.entityName} data successfully deleted` };
        }
        catch (error) {
            return error;
        }
    }
    async getByIdFromDB(id, options = {}) {
        try {
            const payload = await this.repository
                .findOne(id, { relations: options.relations })
                .catch((err) => {
                throw new Error(err === null || err === void 0 ? void 0 : err.name);
            });
            if (!payload) {
                throw new common_1.NotFoundException(`Not Found with ${id}`);
            }
            return payload;
        }
        catch (error) {
            return error;
        }
    }
    async getByCriteriaFromDB(criteria, options) {
        try {
            const opt = await service_utils_1.createTypeORMFindOneOptions(criteria, options, this.entityName);
            const entity = await this.repository.findOne(opt).catch((err) => {
                throw new Error(err);
            });
            return entity;
        }
        catch (error) {
            return error;
        }
    }
    async getAllFromDB(filters, options) {
        try {
            const result = { data: null, total: 0 };
            if (options.single) {
                const opts = await service_utils_1.createTypeORMFindOneOptions(filters, options, this.entityName);
                result.data = await this.repository.findOne(opts).catch((err) => {
                    throw new Error(err === null || err === void 0 ? void 0 : err.name);
                });
            }
            else {
                const opts = await service_utils_1.createTypeORMFindManyOptions(filters, options, this.entityName);
                const res = await this.repository.findAndCount(opts).catch((err) => {
                    throw new Error(err === null || err === void 0 ? void 0 : err.name);
                });
                if (res.length === 2) {
                    result.data = res[0];
                    result.total = res[1];
                }
            }
            return result;
        }
        catch (error) {
            return error;
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map