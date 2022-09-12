"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var cardRouter_1 = __importDefault(require("./cardRouter"));
var credentialRouter_1 = __importDefault(require("./credentialRouter"));
var networkRouter_1 = __importDefault(require("./networkRouter"));
var safetyNoteRouter_1 = __importDefault(require("./safetyNoteRouter"));
var router = (0, express_1.Router)();
router.use(authRouter_1["default"]);
router.use(credentialRouter_1["default"]);
router.use(safetyNoteRouter_1["default"]);
router.use(cardRouter_1["default"]);
router.use(networkRouter_1["default"]);
exports["default"] = router;
