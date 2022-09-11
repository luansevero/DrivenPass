import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import { Users } from "@prisma/client";

export async function newAccount(email: string){
    const account : Users = await authRepository.findByEmail(email);
    if(account) throw new ErrorInfo("error_conflict", "This email is already in use");
};

export async function haveAccount(email:string){
    const account : Users = await authRepository.findByEmail(email);
    if(!account) throw new ErrorInfo("error_forbidden", "Invalid email our password");
    return account;
};

export function samePassword(password:string, userPassword:string){
    const isPasswordRight = bcrypt.compareSync(password, userPassword);
    if(!isPasswordRight) throw new ErrorInfo("error_forbidden", "Invalid email our password")
}
