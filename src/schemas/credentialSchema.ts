import Joi from "joi";

export const credentialSchema = Joi.object({
    url: Joi.string().min(1).required(),
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
    credential: Joi.string().min(1).required()
});