import { CreateCardData } from "../types/cardTypes";
import * as cardValidator from "../validators/cardValidator";
import * as cardRepository from "../repositories/cardRepository";
import { encrypt, decrypt } from "../utils/cryptr";


export async function create(userId : number, createCardData : CreateCardData){
    await cardValidator.findDuplicate({userId, title:createCardData["title"]});

    const encryptPassword = encrypt(createCardData["password"]);
    const encryptSecurityCode = encrypt(createCardData["securityCode"]);

    await cardRepository.insert({...createCardData, password:encryptPassword, securityCode:encryptSecurityCode, userId});
}

export async function getAll(){
    const allCards = await cardValidator.findAll();
    return allCards
}

export async function getOne(userId: number, id : number){
    const card = await cardValidator.findOne(userId, id);

    const decryptPassword = decrypt(card["password"]);
    const decryptSecurityCode = decrypt(card["securityCode"]);

    return {...card, passord:decryptPassword, securityCode:decryptSecurityCode }
}

export async function deleteOne(userId:number , id: number){
    await cardValidator.findOne(userId, id);

    await cardRepository.deleteOne(id);
}