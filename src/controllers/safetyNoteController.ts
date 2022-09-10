import { Request, Response } from 'express';

import { CreateSafetyNoteData } from '../types/safetyNoteTypes';
import * as safetyNoteService from "../services/safetyNoteService";

export async function create(req:Request, res:Response){
    const { userId }  = res.locals
    const { title, annotation } : CreateSafetyNoteData = req.body;

    await safetyNoteService.create({userId, title, annotation});
    res.sendStatus(201);
}

export async function getAll(req:Request, res:Response){
    const safetyNote = await safetyNoteService.getAll();
    res.status(200).send(safetyNote);
}

export async function getOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    const safetyNote = await safetyNoteService.getOne(userId, Number(id))
    res.status(200).send(safetyNote);
}

export async function deleteOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    await safetyNoteService.deleteOne(userId, Number(id));
    res.sendStatus(200);
}