"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodSuccessMessage = void 0;
const methodSuccessMessage = (method) => {
    switch (method) {
        case 'GET':
            return 'Get Success';
        case 'POST':
            return 'Created Success';
        case 'PUT':
            return 'Update Success';
        case 'DELETE':
            return 'Delete Success';
        default:
            return 'Success';
    }
};
exports.methodSuccessMessage = methodSuccessMessage;
//# sourceMappingURL=responsePlaceholder.util.js.map