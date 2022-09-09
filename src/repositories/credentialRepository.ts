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

export async function findAll(){
    return await prisma.credentials.findMany()
}

export async function findById(id:number){
    return await prisma.credentials.findUnique({
        where : {id}
    })
};