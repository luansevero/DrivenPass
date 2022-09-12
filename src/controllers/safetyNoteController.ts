import { Request, Response } from 'express';

import { CreateSafetyNoteData } from '../types/safetyNoteTypes';
import * as safetyNoteService from "../services/safetyNoteService";

export async function create(req:Request, res:Response){
    const { userId }  = res.locals
    const { title, noteTitle, annotation } : CreateSafetyNoteData = req.body;

    await safetyNoteService.create({userId, title, noteTitle, annotation});
    res.sendStatus(201);
}

export async function getAll(req:Request, res:Response){
    const { userId }  = res.locals;
    const safetyNote = await safetyNoteService.getAll(userId);
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
    res.sendStatus(204);
}