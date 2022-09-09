import { AuthData } from "../types/authTypes";
import * as authValidator from "../validators/authValidator";
import * as authRepository from "../repositories/authRepository";

export async function signup(authData: AuthData){
    await authValidator.newAccount(authData["email"]);

    await authRepository.insert(authData)
};

export async function signin(){

};
