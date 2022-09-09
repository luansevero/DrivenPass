import Joi from "joi";

const urlRegex = /[https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

export const credentialSchema = Joi.object({
    url: Joi.string().min(1).pattern(new RegExp(urlRegex)).required(),
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
    title: Joi.string().min(1).required()
});