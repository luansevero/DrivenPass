import { prisma } from "../config/database";
import { CreateAuthData } from "../types/authTypes";

export async function findByEmail(email: string){
    return await prisma.users.findUnique({
        where: {email}
    })
};

export async function insert (createAuthData : CreateAuthData){
    await prisma.users.create({
        data: createAuthData
    })
};