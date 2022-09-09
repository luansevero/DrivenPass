import { prisma } from "../config/database";
import { AuthData } from "../types/authTypes";

export async function findByEmail(email: string){
    return await prisma.users.findUnique({
        where: {email}
    })
};

export async function insert (authData : AuthData){
    await prisma.users.create({
        data: authData
    })
};