import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";
import * as cardController from "../controllers/cardController";
import authenticateToken from "../middlewares/authenticateTokenMiddleware";
const cardRouter = Router();

cardRouter.post(
    "/card/create",
    authenticateToken,
    validateSchemaMiddleware(cardSchema),
    cardController.create
);

cardRouter.get(
    "/card",
    authenticateToken,
    cardController.getAll
);
cardRouter.get(
    "/card/:id", 
    authenticateToken, 
    cardController.getOne
);

cardRouter.delete(
    "/card/delete/:id", 
    authenticateToken ,
    cardController.deleteOne
);

export default cardRouter;