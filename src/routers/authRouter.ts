import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";
import * as authController from "../controllers/authController";

const authRouter = Router();

authRouter.post(
    "/signup", 
    validateSchemaMiddleware(authSchema), 
    authController.signup
);

authRouter.post(
    "/signin", 
    validateSchemaMiddleware(authSchema), 
    authController.signin
);

export default authRouter;