import { CreateNetworkData } from "../types/networkTypes";
import * as networkValidator from "../validators/networkValidator";
import * as networkRepository from "../repositories/networkRepository";
import { encrypt, decrypt } from "../utils/cryptr";


export async function create(userId : number, createNetworkData : CreateNetworkData){
    await networkValidator.findDuplicate({userId, title:createNetworkData["title"]});

    const encryptPassword = encrypt(createNetworkData["password"]);

    await networkRepository.insert({...createNetworkData, password:encryptPassword, userId});
}

export async function getAll(){
    const allNetworks = await networkValidator.findAll();
    return allNetworks
}

export async function getOne(userId: number, id : number){
    const network = await networkValidator.findOne(userId, id);

    const decryptPassword = decrypt(network["password"]);

    return {...network, passord:decryptPassword }
}

export async function deleteOne(userId:number , id: number){
    await networkValidator.findOne(userId, id);

    await networkRepository.deleteOne(id);
}