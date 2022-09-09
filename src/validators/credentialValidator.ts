import * as credentialRepository from "../repositories/credentialRepository";
import { Credentials } from "@prisma/client";
import { DuplicateCredentials } from "../types/credentialTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findUserDuplication(userId_title: DuplicateCredentials) {
    const credential : Credentials = await credentialRepository.findByTitleAndUserId(userId_title);
    if(credential) throw new ErrorInfo("error_unprocessable_entity", "Already have the same credential title");
}

export async function findAll(){
    const allCredentials = await credentialRepository.findAll();
    if(allCredentials.length === 0) throw new ErrorInfo("error_not_found", "Don't have any credential here :(");
    return allCredentials;
}

export async function findOne(id:number, userId:number){
    const credential : Credentials = await credentialRepository.findById(id);
    if(!credential ) throw new ErrorInfo("error_not_found", "That credential don't exist");
    if(credential["userId"] !== userId) throw new ErrorInfo("error_bad_request", "That credential don't belong to u");

    return credential;
}