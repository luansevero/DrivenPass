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
var networkSchema_1 = require("../schemas/networkSchema");
var networkController = __importStar(require("../controllers/networkController"));
var authenticateTokenMiddleware_1 = __importDefault(require("../middlewares/authenticateTokenMiddleware"));
var networkRouter = (0, express_1.Router)();
networkRouter.post("/network/create", authenticateTokenMiddleware_1["default"], (0, schemaMiddleware_1.validateSchemaMiddleware)(networkSchema_1.networkSchema), networkController.create);
networkRouter.get("/network", authenticateTokenMiddleware_1["default"], networkController.getAll);
networkRouter.get("/network/:id", authenticateTokenMiddleware_1["default"], networkController.getOne);
networkRouter["delete"]("/network/delete/:id", authenticateTokenMiddleware_1["default"], networkController.deleteOne);
exports["default"] = networkRouter;
