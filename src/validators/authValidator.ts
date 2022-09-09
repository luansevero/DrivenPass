import * as authRepository from "../repositories/authRepository";
import { AuthData } from "../types/authTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function newAccount(email: string){
    const account : AuthData = await authRepository.findByEmail(email);
    if(account) throw new ErrorInfo("error_conflict", "This email is already in use");
};
