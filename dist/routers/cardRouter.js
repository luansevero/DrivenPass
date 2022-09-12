"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var schemaMiddleware_1 = require("../middlewares/schemaMiddleware");
var cardSchema_1 = require("../schemas/cardSchema");
var cardController = __importStar(require("../controllers/cardController"));
var authenticateTokenMiddleware_1 = __importDefault(require("../middlewares/authenticateTokenMiddleware"));
var cardRouter = (0, express_1.Router)();
cardRouter.post("/card/create", authenticateTokenMiddleware_1["default"], (0, schemaMiddleware_1.validateSchemaMiddleware)(cardSchema_1.cardSchema), cardController.create);
cardRouter.get("/card", authenticateTokenMiddleware_1["default"], cardController.getAll);
cardRouter.get("/card/:id", authenticateTokenMiddleware_1["default"], cardController.getOne);
cardRouter["delete"]("/card/delete/:id", authenticateTokenMiddleware_1["default"], cardController.deleteOne);
exports["default"] = cardRouter;
