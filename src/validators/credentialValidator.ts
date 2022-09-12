import * as credentialRepository from "../repositories/credentialRepository";
import { Credentials } from "@prisma/client";
import { DuplicateCredentials, GetCredentialData } from "../types/credentialTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findUserDuplication(userId_title: DuplicateCredentials) {
    const credential: Credentials = await credentialRepository.findByTitleAndUserId(userId_title);
    if (credential) throw new ErrorInfo("error_unprocessable_entity", "Already have the same credential title");
}

export async function findAll(userId: number) {
    const allCredentials = await credentialRepository.findAll(userId);
    console.log(allCredentials)
    if (allCredentials.length === 0) throw new ErrorInfo("error_not_found", "Don't have any credential here :(");
    return allCredentials;
}

export async function findOne(userId: number, id: number) {
    const credential: GetCredentialData = await credentialRepository.findById(id);
    if (!credential) throw new ErrorInfo("error_not_found", "That credential don't exist");
    if (credential["userId"] !== userId) throw new ErrorInfo("error_forbidden", "That credential don't belong to u");
    return credential;
}