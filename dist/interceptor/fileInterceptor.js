"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventInterceptor = exports.profileOrgInterceptor = exports.profileUserInterceptor = void 0;
const path_1 = require("path");
const profileUserInterceptor = (req, file, callback) => {
    let extension = (0, path_1.extname)(file.originalname);
    let fileName = `${(Math.random() * 10000000).toFixed()}`;
    fileName += `${fileName}${extension}`;
    callback(null, fileName);
};
exports.profileUserInterceptor = profileUserInterceptor;
const profileOrgInterceptor = (req, file, callback) => {
    let extension = (0, path_1.extname)(file.originalname);
    let fileName = `${(Math.random() * 10000000).toFixed()}`;
    fileName += `${fileName}${extension}`;
    callback(null, fileName);
};
exports.profileOrgInterceptor = profileOrgInterceptor;
const eventInterceptor = (req, file, callback) => {
    let extension = (0, path_1.extname)(file.originalname);
    let fileName = `ev-${(Math.random() * 10000000).toFixed()}`;
    fileName += `${fileName}${extension}`;
    callback(null, fileName);
};
exports.eventInterceptor = eventInterceptor;
//# sourceMappingURL=fileInterceptor.js.map