import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { networkSchema } from "../schemas/networkSchema";
import * as networkController from "../controllers/networkController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const networkRouter = Router();

networkRouter.post(
    "/network/create",
    authenticateToken,
    validateSchemaMiddleware(networkSchema),
    networkController.create
);

networkRouter.get(
    "/network",
    authenticateToken,
    networkController.getAll
);
networkRouter.get(
    "/network/:id", 
    authenticateToken, 
    networkController.getOne
);

networkRouter.delete(
    "/network/delete/:id", 
    authenticateToken ,
    networkController.deleteOne
);

export default networkRouter;