"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const pattern = /dup key: { id: "(.*?)" }/;
    const statusCode = 409;
    const message = 'Duplicate error';
    const errorSources = [
        {
            path: err.errmsg.match(pattern)[1],
            message: err === null || err === void 0 ? void 0 : err.errmsg,
        },
    ];
    return {
        statusCode,
        message,
        errorSources,
    };
};
exports.default = handleDuplicateError;
