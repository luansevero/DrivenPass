import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safetyNoteSchema } from "../schemas/safetyNoteSchema";
import * as safetyNoteController from "../controllers/safetyNoteController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const safetyNoteRouter = Router();

safetyNoteRouter.post(
    "/safetyNote/create",
    authenticateToken,
    validateSchemaMiddleware(safetyNoteSchema),
    safetyNoteController.create
);

safetyNoteRouter.get(
    "/safetyNote",
    authenticateToken,
    safetyNoteController.getAll
);
safetyNoteRouter.get(
    "/safetyNote/:id", 
    authenticateToken, 
    safetyNoteController.getOne
);

safetyNoteRouter.delete(
    "/safetyNote/delete/:id", 
    authenticateToken ,
    safetyNoteController.deleteOne
);0

export default safetyNoteRouter;