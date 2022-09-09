import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import { Users } from "@prisma/client";
import { AuthData } from "../types/authTypes";
import * as authValidator from "../validators/authValidator";
import * as authRepository from "../repositories/authRepository";

dotenv.config();

export async function signup(authData: AuthData){
    await authValidator.newAccount(authData["email"]);

    const password = bcrypt.hashSync(authData["password"], 10);

    await authRepository.insert({ email:authData["email"], password });
};

export async function signin(authData: AuthData){
    const user : Users = await authValidator.haveAccount(authData["email"]);

    authValidator.samePassword(authData["password"], user["password"]);

    return jwt.sign({id:user["id"]}, process.env.ACESS_SECRET_TOKEN, {expiresIn: '7d'});
};
