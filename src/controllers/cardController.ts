import { Request, Response } from 'express';

import { CreateCardData } from '../types/cardTypes';
import * as cardService from "../services/cardService"

export async function create(req:Request, res:Response){
    const { userId }  = res.locals
    const { title, number, cardholderName, securityCode, expirationDate, password, isVirtual, type } : CreateCardData = req.body;

    await cardService.create(userId, {title, number, cardholderName, securityCode, expirationDate, password, isVirtual, type});
    res.sendStatus(201);
}

export async function getAll(req:Request, res:Response){
    const { userId }  = res.locals;
    const allCards = await cardService.getAll(userId);
    res.status(200).send(allCards);
}

export async function getOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    const card = await cardService.getOne(userId, Number(id))
    res.status(200).send(card);
}

export async function deleteOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    await cardService.deleteOne(userId, Number(id));
    res.sendStatus(204);
}