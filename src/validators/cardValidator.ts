import * as cardRepository from "../repositories/cardRepository";
import { Cards } from "@prisma/client";
import { DuplicateCardsData, GetCardData } from "../types/cardTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findDuplicate(userId_title: DuplicateCardsData) {
    const card: Cards = await cardRepository.findByTitleAndUserId(userId_title);
    if (card) throw new ErrorInfo("error_unprocessable_entity", "Already have the same card title");
}

export async function findAll(userId: number) {
    const allCards = await cardRepository.findAll(userId);
    if (allCards.length === 0) throw new ErrorInfo("error_not_found", "Don't have any card here :(");
    return allCards;
}

export async function findOne(userId: number, id: number) {
    const card: GetCardData = await cardRepository.findById(id);
    if (!card) throw new ErrorInfo("error_not_found", "That card don't exist");
    if (card["userId"] !== userId) throw new ErrorInfo("error_forbidden", "That card don't belong to u");
    return card;
}