import * as cardRepository from "../repositories/cardRepository";
import { Cards } from "@prisma/client";
import { DuplicateCardsData, GetCardData } from "../types/cardTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findDuplicate(userId_title: DuplicateCardsData) {
    const credential : Cards = await cardRepository.findByTitleAndUserId(userId_title);
    if(credential) throw new ErrorInfo("error_unprocessable_entity", "Already have the same credential title");
}

export async function findAll(){
    const allCards = await cardRepository.findAll();
    if(allCards.length === 0) throw new ErrorInfo("error_not_found", "Don't have any credential here :(");
    return allCards;
}

export async function findOne(userId:number, id:number){
    const card : GetCardData = await cardRepository.findById(id);
    if(!card ) throw new ErrorInfo("error_not_found", "That card don't exist");
    if(card["userId"] !== userId) throw new ErrorInfo("error_bad_request", "That card don't belong to u");
    return card;
}