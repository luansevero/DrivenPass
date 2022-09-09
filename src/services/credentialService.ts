import Cryptr from "cryptr";

import { CreateCredentialData } from "../types/credentialTypes";
import * as credentialValidator from "../validators/credentialValidator";
import * as credentialRepository from "../repositories/credentialRepository";
import { number } from "joi";

const cryptr = new Cryptr("aa")

export async function create( userId: number, createCredentialData : CreateCredentialData ){
    await credentialValidator.findUserDuplication({userId, title:createCredentialData["title"]})

    const encryptPassword = cryptr.encrypt(createCredentialData["password"]);

    await credentialRepository.insert({...createCredentialData, password:encryptPassword, userId: userId});
}

export async function getAll(){
    const allCredentials = await credentialValidator.findAll();
    return allCredentials
}

export async function getOne(id : number, userId: number){
    const credential = await credentialValidator.findOne(id, userId);
    return credential
}

export async function deleteOne(userId:number , id: number){
    await credentialValidator.findOne(id, userId);

    await credentialRepository.deleteOne(id);
}