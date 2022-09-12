"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.authSchema = joi_1["default"].object({
    email: joi_1["default"].string().email({ tlds: { allow: false } }).required(),
    password: joi_1["default"].string().min(10).max(30).required()
});
