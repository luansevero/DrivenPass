import Cryptr from "cryptr";

import { CreateCredentialData } from "../types/credentialTypes";
import * as credentialValidator from "../validators/credentialValidator";
import * as credentialRepository from "../repositories/credentialRepository";

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

export async function getOne(userId: number, id : number){
    const credential = await credentialValidator.findOne(userId, id);

    const decryptPassword = cryptr.decrypt(credential["password"]);

    return {...credential, password: decryptPassword}
}

export async function deleteOne(userId:number , id: number){
    await credentialValidator.findOne(userId, id);

    await credentialRepository.deleteOne(id);
}