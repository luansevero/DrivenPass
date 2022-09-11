import { prisma } from "../config/database";
import { DuplicateCardsData, CardData } from "../types/cardTypes";

export async function findByTitleAndUserId(userId_title : DuplicateCardsData){
    return await prisma.cards.findUnique({
        where:{userId_title}
    })
};

export async function insert(cardData:CardData){
    await prisma.cards.create({
        data:cardData
    })
}

export async function findAll(){
    return await prisma.cards.findMany({
        select : {
            id: true,
            title: true
        }
    })
}

export async function findById(id:number){
    return await prisma.cards.findUnique({
        where : {id}
    })
};

export async function deleteOne(id:number){
    await prisma.cards.delete({
        where: {id}
    })
};