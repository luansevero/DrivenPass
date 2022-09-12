import JoiBase from "joi"
import JoiDate from "@joi/date";
import { CardType } from "@prisma/client";

const Joi = JoiBase.extend(JoiDate);

const numberRegex = /^[0-9]{16}/;
const passwordRegex = /^[0-9]{4}/;
const securityCode = /^[0-9]{3}/;

export const cardSchema = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    number: Joi.string().regex(new RegExp(numberRegex)).required(),
    cardholderName: Joi.string().min(1).required(),
    securityCode: Joi.string().regex(new RegExp(securityCode)).required(),
    expirationDate: Joi.date().format("MM/YY").required(),
    password: Joi.string().regex(new RegExp(passwordRegex)).required(),
    isVirtual: Joi.boolean().strict().required(),
    type: Joi.string().valid(...Object.values(CardType)).required(),
});