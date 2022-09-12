"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.networkSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.networkSchema = joi_1["default"].object({
    title: joi_1["default"].string().min(1).max(50).required(),
    username: joi_1["default"].string().min(1).required(),
    password: joi_1["default"].string().min(1).required()
});
