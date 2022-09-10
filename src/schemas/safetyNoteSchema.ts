import Joi from "joi";

export const safetyNoteSchema = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    annotation: Joi.string().min(1).max(1000).required()
});