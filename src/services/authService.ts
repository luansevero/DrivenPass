import bcrypt from "bcrypt"
import { AuthData } from "../types/authTypes";
import * as authValidator from "../validators/authValidator";
import * as authRepository from "../repositories/authRepository";

export async function signup(authData: AuthData){
    await authValidator.newAccount(authData["email"]);

    const password = bcrypt.hashSync(authData["password"], 10);

    await authRepository.insert({ email:authData["email"], password });
};

export async function signin(authData){
    await authValidator.haveAccount(authData["email"]);

    await authValidator.samePassword(authData["password"]);
};
