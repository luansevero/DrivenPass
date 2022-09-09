import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";
import * as credentialController from "../controllers/credentialController";

const CredentialRouter = Router();

CredentialRouter.post(
    "/credential/create", 
    validateSchemaMiddleware(authSchema),
    credentialController.create
);

CredentialRouter.get(
    "/credential", 
    credentialController.getAll
);
CredentialRouter.get(
    "/credential/:id", 
    credentialController.getOne
);

CredentialRouter.delete(
    "/credential/delete/:id", 
    credentialController.deleteOne
);0

export default CredentialRouter;