import Joi from "joi";

export const authSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false }}).required(),
    password: Joi.string().min(10).max(30).required()
});