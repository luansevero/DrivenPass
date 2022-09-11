import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safetyNoteSchema } from "../schemas/safetyNoteSchema";
import * as safetyNoteController from "../controllers/safetyNoteController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const safetyNoteRouter = Router();

safetyNoteRouter.post(
    "/safetynote/create",
    authenticateToken,
    validateSchemaMiddleware(safetyNoteSchema),
    safetyNoteController.create
);

safetyNoteRouter.get(
    "/safetynote",
    authenticateToken,
    safetyNoteController.getAll
);
safetyNoteRouter.get(
    "/safetynote/:id", 
    authenticateToken, 
    safetyNoteController.getOne
);

safetyNoteRouter.delete(
    "/safetynote/delete/:id", 
    authenticateToken ,
    safetyNoteController.deleteOne
);

export default safetyNoteRouter;