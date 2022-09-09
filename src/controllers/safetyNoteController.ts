import { Request, Response } from 'express';

import { CreateSafetyNoteData } from '../types/safetyNoteTypes';
// import * as safetyNoteService from "../services/safetyNoteService";

export async function create(req:Request, res:Response){
    const { userId }  = res.locals
    const { title, annotation } : CreateSafetyNoteData = req.body;

    // await safetyNoteService.create(userId, {url, password, title});
    res.sendStatus(201);
}

export async function getAll(req:Request, res:Response){
    // const allCredentials = await safetyNoteService.getAll();
    // res.status(200).send(allCredentials);
}

export async function getOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    // const credential = await safetyNoteService.getOne(userId, Number(id))
    // res.status(200).send(credential);
}

export async function deleteOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    // await safetyNoteService.deleteOne(userId, Number(id));
    // res.sendStatus(200);
}