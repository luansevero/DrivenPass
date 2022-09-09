import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import * as credentialController from "../controllers/credentialController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const credentialRouter = Router();

credentialRouter.post(
    "/credential/create",
    authenticateToken,
    validateSchemaMiddleware(credentialSchema),
    credentialController.create
);

credentialRouter.get(
    "/credential",
    authenticateToken,
    credentialController.getAll
);
credentialRouter.get(
    "/credential/:id", 
    authenticateToken, 
    credentialController.getOne
);

credentialRouter.delete(
    "/credential/delete/:id", 
    authenticateToken ,
    credentialController.deleteOne
);0

export default credentialRouter;