import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import * as credentialController from "../controllers/credentialController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const CredentialRouter = Router();

CredentialRouter.post(
    "/credential/create",
    authenticateToken,
    validateSchemaMiddleware(credentialSchema),
    credentialController.create
);

CredentialRouter.get(
    "/credential",
    authenticateToken,
    credentialController.getAll
);
CredentialRouter.get(
    "/credential/:id", 
    authenticateToken, 
    credentialController.getOne
);

CredentialRouter.delete(
    "/credential/delete/:id", 
    authenticateToken ,
    credentialController.deleteOne
);0

export default CredentialRouter;