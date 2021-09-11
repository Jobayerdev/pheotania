"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterDate = exports.BeforeDate = exports.createTypeORMFindManyOptions = exports.createTypeORMFindOneOptions = void 0;
const typeorm_1 = require("typeorm");
const date_fns_1 = require("date-fns");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const _1 = require(".");
const createTypeORMFindOneOptions = async (criteria, options, entity) => {
    const properties = await (0, _1.getEntityProperties)(entity);
    const opts = {};
    properties.ownColumns = [...properties.ownColumns, ...properties.relations];
    opts.where = {};
    properties.ownColumns.map((c) => {
        if (Object.keys(criteria).includes(c)) {
            opts.where[c] = criteria[c];
        }
    });
    if (options.selects && options.selects.length !== 1) {
        opts.select = options.selects;
    }
    if (options.relations && options.relations.length > 0) {
        opts.relations = options.relations;
    }
    return opts;
};
exports.createTypeORMFindOneOptions = createTypeORMFindOneOptions;
const createTypeORMFindManyOptions = async (filters, options, entity) => {
    const properties = await (0, _1.getEntityProperties)(entity);
    const opts = {};
    properties.ownColumns = [...properties.ownColumns, ...properties.relations];
    if (options.searchTerm) {
        opts.where = [];
        const where = [];
        properties.searchTerms.map((c) => {
            let criterias;
            if (options.between && options.startDate && options.endDate) {
                criterias = {
                    createdAt: (0, typeorm_1.Between)(options.startDate, options.endDate),
                    [c]: (0, typeorm_1.Raw)((alias) => `LOWER(${alias}) LIKE '%${options.searchTerm.toLowerCase()}%'`),
                };
            }
            else if (options.before) {
                criterias = {
                    createdAt: (0, exports.BeforeDate)(options.before),
                    [c]: (0, typeorm_1.Raw)((alias) => `LOWER(${alias}) LIKE '%${options.searchTerm.toLowerCase()}%'`),
                };
            }
            else if (options.after) {
                criterias = {
                    createdAt: (0, exports.AfterDate)(options.after),
                    [c]: (0, typeorm_1.Raw)((alias) => `LOWER(${alias}) LIKE '%${options.searchTerm.toLowerCase()}%'`),
                };
            }
            else {
                criterias = {
                    [c]: (0, typeorm_1.Raw)((alias) => `LOWER(${alias}) LIKE '%${options.searchTerm.toLowerCase()}%'`),
                };
            }
            where.push(criterias);
        });
        opts.where = where;
    }
    else {
        opts.where = {};
        properties.ownColumns.map((c) => {
            if (Object.keys(filters).includes(c)) {
                opts.where[c] = filters[c];
            }
        });
        if (options.between && options.startDate && options.endDate) {
            opts.where.createdAt = (0, typeorm_1.Between)(options.startDate, options.endDate);
        }
        else if (options.before) {
            opts.where.createdAt = (0, exports.BeforeDate)(options.before);
        }
        else if (options.after) {
            opts.where.createdAt = (0, exports.AfterDate)(options.after);
        }
    }
    if (options.selects && options.selects.length !== 1) {
        opts.select = options.selects;
    }
    if (options.relations && options.relations.length > 0) {
        opts.relations = options.relations;
    }
    if (options.order) {
        opts.order = {
            [options.order[0]]: options.order[1],
        };
    }
    if (!options.fetchAll) {
        opts.take = options.take;
        opts.skip = options.skip;
    }
    return opts;
};
exports.createTypeORMFindManyOptions = createTypeORMFindManyOptions;
const BeforeDate = (date) => (0, typeorm_1.Between)((0, date_fns_1.subYears)(date, 100), date);
exports.BeforeDate = BeforeDate;
const AfterDate = (date) => (0, typeorm_1.Between)(date, (0, date_fns_1.addYears)(date, 100));
exports.AfterDate = AfterDate;
//# sourceMappingURL=service.utils.js.map