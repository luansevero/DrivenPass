import Cryptr from "cryptr";

import { CreateSafetyNoteData } from "../types/safetyNoteTypes";
import * as safetyNoteValidator from "../validators/safetyNoteValidator";
import * as safetyNoteRepository from "../repositories/safetyNoteRepository";

const cryptr = new Cryptr("aa")

export async function create( userId: number, createSafetyNoteData : CreateSafetyNoteData ){
    await safetyNoteValidator.findTitle(createSafetyNoteData["title"]);

    await safetyNoteRepository.insert({...createSafetyNoteData, userId: userId});
}

export async function getAll(){
    const allSafetyNotes = await safetyNoteValidator.findAll();
    return allSafetyNotes
}

export async function getOne(userId: number, id : number){
    const safetyNote = await safetyNoteValidator.findOne(userId, id);
    return safetyNote
}

export async function deleteOne(userId:number , id: number){
    await safetyNoteValidator.findOne(userId, id);

    await safetyNoteRepository.deleteOne(id);
}