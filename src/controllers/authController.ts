import { Request, Response } from 'express';

import { CreateAuthData } from '../types/authTypes';
import * as authService from "../services/authService";

export async function signup(req:Request, res:Response){
    const { email, password } : CreateAuthData = req.body;
    await authService.signup({email, password});
    res.sendStatus(201);
};

export async function signin(req:Request, res:Response){
    const { email, password } : CreateAuthData = req.body;
    const token : string = await authService.signin({email, password});
    res.status(200).send({acessToken: token});
};