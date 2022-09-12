import { prisma } from "../config/database";
import { CreateCredentialData, DuplicateCredentials, CredentialData } from "../types/credentialTypes";

export async function findByTitleAndUserId(userId_title : DuplicateCredentials){
    return await prisma.credentials.findUnique({
        where:{userId_title}
    })
};

export async function insert(createCredentialData:CredentialData){
    await prisma.credentials.create({
        data:createCredentialData
    })
}

export async function findAll(userId : number){
    return await prisma.credentials.findMany({
        where : {userId},
        select : {
            id: true,
            title: true
        }
    })
}

export async function findById(id:number){
    return await prisma.credentials.findUnique({
        where : {id}
    })
};

export async function deleteOne(id:number){
    await prisma.credentials.delete({
        where: {id}
    })
};