"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.safetyNoteSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.safetyNoteSchema = joi_1["default"].object({
    title: joi_1["default"].string().min(1).max(50).required(),
    noteTitle: joi_1["default"].string().min(1).max(50).required(),
    annotation: joi_1["default"].string().min(1).max(1000).required()
});
