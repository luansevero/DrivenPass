import { Request, Response } from 'express';

import { CreateCredentialData } from '../types/credentialTypes';
import * as credentialService from "../services/credentialService";


export async function create(req:Request, res:Response){
    const { userId } = res.locals
    const { url, password, title } : CreateCredentialData = req.body;

    await credentialService.create(userId, {url, password, title});

}

export async function getAll(req:Request, res:Response){

}

export async function getOne(req:Request, res:Response){

}

export async function deleteOne(req:Request, res:Response){

}