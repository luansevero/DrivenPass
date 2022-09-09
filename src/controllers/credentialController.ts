import { Request, Response } from 'express';

import { CreateCredentialData } from '../types/credentialTypes';
import * as credentialService from "../services/credentialService";

export async function create(req:Request, res:Response){
    const { userId }  = res.locals
    const { url, password, title } : CreateCredentialData = req.body;

    await credentialService.create(userId, {url, password, title});
    res.sendStatus(201);
}

export async function getAll(req:Request, res:Response){
    const allCredentials = await credentialService.getAll();
    res.status(200).send(allCredentials);
}

export async function getOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    const credential = await credentialService.getOne(userId, Number(id))
    res.status(200).send(credential);
}

export async function deleteOne(req:Request, res:Response){
    const { userId } = res.locals;
    const { id } = req.params;
    await credentialService.deleteOne(userId, Number(id));
    res.sendStatus(200);
}