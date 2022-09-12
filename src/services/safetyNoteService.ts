import { CreateSafetyNoteData } from "../types/safetyNoteTypes";
import * as safetyNoteValidator from "../validators/safetyNoteValidator";
import * as safetyNoteRepository from "../repositories/safetyNoteRepository";

export async function create(createSafetyNoteData : CreateSafetyNoteData ){
    await safetyNoteValidator.findDuplicate({userId:createSafetyNoteData["userId"], title:createSafetyNoteData["title"]})

    await safetyNoteRepository.insert(createSafetyNoteData);
}

export async function getAll(userId : number){
    const allSafetyNotes = await safetyNoteValidator.findAll(userId);
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