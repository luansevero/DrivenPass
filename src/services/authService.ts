import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import { Users } from "@prisma/client";
import { CreateAuthData } from "../types/authTypes";
import * as authValidator from "../validators/authValidator";
import * as authRepository from "../repositories/authRepository";

dotenv.config();

export async function signup(createAuthData: CreateAuthData){
    await authValidator.newAccount(createAuthData["email"]);

    const password = bcrypt.hashSync(createAuthData["password"], 10);

    await authRepository.insert({ email:createAuthData["email"], password });
};

export async function signin(authData: CreateAuthData){
    const user : Users = await authValidator.haveAccount(authData["email"]);

    authValidator.samePassword(authData["password"], user["password"]);

    return jwt.sign({id:user["id"]}, process.env.ACESS_SECRET_TOKEN, {expiresIn: '7d'});
};
