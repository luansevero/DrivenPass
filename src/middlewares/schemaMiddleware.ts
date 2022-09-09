import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { ErrorInfo } from "./errorHandlerMiddleware";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, {abortEarly: false});
    if (validation.error) {
        const details = validation.error.details;
        const errors = details.map(details => {
            const erro = details.path;
            const message = details.message.split(" ").splice(1).join(" ");
            return {[erro[0]]:message}
        })
      return res.status(422).send(errors)
    }

    next();
  };
}