"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.credentialSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var urlRegex = /[https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
exports.credentialSchema = joi_1["default"].object({
    url: joi_1["default"].string().min(1).pattern(new RegExp(urlRegex)).required(),
    username: joi_1["default"].string().min(1).required(),
    password: joi_1["default"].string().min(1).required(),
    title: joi_1["default"].string().min(1).max(50).required()
});
