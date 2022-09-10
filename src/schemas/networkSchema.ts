import Joi from "joi";

export const networkSchema = Joi.object({
    title: Joi.string().min(1).required(),
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).required()
});