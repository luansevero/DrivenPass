import { prisma } from "../config/database";
import { CreateSafetyNoteData, DuplicateSafetyNoteData } from "../types/safetyNoteTypes";

export async function findByTitleAndUserId(userId_title : DuplicateSafetyNoteData){
    return await prisma.safetyNotes.findUnique({
        where:{userId_title}
    })
};

export async function insert(createSafetyNoteData:CreateSafetyNoteData){
    await prisma.safetyNotes.create({
        data:createSafetyNoteData
    })
}

export async function findAll(userId : number){
    return await prisma.safetyNotes.findMany({
        where : { userId },
        select : {
            id: true,
            title: true
        }
    })
}

export async function findById(id:number){
    return await prisma.safetyNotes.findUnique({
        where : {id}
    })
};

export async function deleteOne(id:number){
    await prisma.safetyNotes.delete({
        where: {id}
    })
};