"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
exports.cardSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var date_1 = __importDefault(require("@joi/date"));
var client_1 = require("@prisma/client");
var Joi = joi_1["default"].extend(date_1["default"]);
var numberRegex = /^[0-9]{16}/;
var passwordRegex = /^[0-9]{4}/;
var securityCode = /^[0-9]{3}/;
exports.cardSchema = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    number: Joi.string().regex(new RegExp(numberRegex)).required(),
    cardholderName: Joi.string().min(1).required(),
    securityCode: Joi.string().regex(new RegExp(securityCode)).required(),
    expirationDate: Joi.date().format("MM/YYYY").required(),
    password: Joi.string().regex(new RegExp(passwordRegex)).required(),
    isVirtual: Joi.boolean().required(),
    type: (_a = Joi.string()).valid.apply(_a, Object.values(client_1.CardType)).required()
});
