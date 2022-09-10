import { prisma } from "../config/database";
import { DuplicateNetworksData, NetworkData } from "../types/networkTypes";

export async function findByTitleAndUserId(userId_title : DuplicateNetworksData){
    return await prisma.network.findUnique({
        where:{userId_title}
    })
};

export async function insert(networkData:NetworkData){
    await prisma.network.create({
        data:networkData
    })
}

export async function findAll(){
    return await prisma.network.findMany({
        select : {
            id: true,
            title: true
        }
    })
}

export async function findById(id:number){
    return await prisma.network.findUnique({
        where : {id}
    })
};

export async function deleteOne(id:number){
    await prisma.network.delete({
        where: {id}
    })
};