import * as safetyNoteRepository from "../repositories/safetyNoteRepository";
import { SafetyNotes } from "@prisma/client";
import { GetSafetyNoteData } from "../types/safetyNoteTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findTitle(title:string) {
    const safetyNote : SafetyNotes = await safetyNoteRepository.findByTitle(title);
    if(safetyNote) throw new ErrorInfo("error_unprocessable_entity", "Already have the same safety note title");
}

export async function findAll(){
    const allSafetyNotes = await safetyNoteRepository.findAll();
    if(allSafetyNotes.length === 0) throw new ErrorInfo("error_not_found", "Don't have any credential here :(");
    return allSafetyNotes;
}

export async function findOne(userId:number, id:number){
    const safetyNotes : GetSafetyNoteData = await safetyNoteRepository.findById(id);
    if(!safetyNotes ) throw new ErrorInfo("error_not_found", "That safety notes don't exist");
    if(safetyNotes["userId"] !== userId) throw new ErrorInfo("error_bad_request", "That safety notes don't belong to u");
    return safetyNotes;
};