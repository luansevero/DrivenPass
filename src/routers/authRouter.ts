import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema), );
authRouter.post("/signin", validateSchemaMiddleware(authSchema), );


export default authRouter;