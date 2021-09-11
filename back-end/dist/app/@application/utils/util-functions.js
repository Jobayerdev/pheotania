"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBool = exports.generateFilename = exports.storageImageOptions = exports.getRandomString = exports.asyncForEach = exports.getEntityProperties = exports.extractToken = exports.ILIKE = void 0;
const path = require("path");
const typeorm_1 = require("typeorm");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const multer_1 = require("multer");
const ILIKE = (searchterm) => {
    return (0, typeorm_1.Raw)((alias) => `${alias} ILIKE '%${searchterm}%'`);
};
exports.ILIKE = ILIKE;
function extractToken(headers) {
    let token = headers && headers.authorization ? headers.authorization : '';
    token = token.replace(/Bearer\s+/gm, '');
    return token;
}
exports.extractToken = extractToken;
async function getEntityProperties(entityName) {
    try {
        const entity = await (0, typeorm_1.getConnection)().getMetadata(entityName);
        const searchTerms = entity.target.SEARCH_TERMS || [];
        const orders = entity.target.ORDERS || [];
        const ownColumns = await entity.ownColumns
            .map((column) => column.propertyName)
            .filter((colName) => colName !== 'id');
        const relations = await entity.relations.map((column) => column.propertyName);
        relations.map((r) => {
            if (ownColumns.includes(r)) {
                const i = ownColumns.indexOf(r);
                ownColumns.splice(i, 1);
            }
        });
        return { ownColumns, relations, searchTerms, orders };
    }
    catch (error) {
        new Error('Invalid Entity Name');
    }
}
exports.getEntityProperties = getEntityProperties;
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
exports.asyncForEach = asyncForEach;
const getRandomString = (length) => {
    var randomChars = '0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};
exports.getRandomString = getRandomString;
exports.storageImageOptions = (0, multer_1.diskStorage)({
    destination: './uploads/images',
    filename: (req, file, callback) => {
        callback(null, generateFilename(file));
    },
});
function generateFilename(file) {
    return `${Date.now()}${path.extname(file.originalname)}`;
}
exports.generateFilename = generateFilename;
function toBool(value) {
    return value === 'true';
}
exports.toBool = toBool;
//# sourceMappingURL=util-functions.js.map