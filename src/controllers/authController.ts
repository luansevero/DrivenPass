import { Request, Response } from 'express';

import { AuthData } from '../types/authTypes';
import * as authService from "../services/authService";

export async function signup(req:Request, res:Response){
    const { email, password } : AuthData = req.body;
    await authService.signup({email, password});
};

export async function signin(req:Request, res:Response){
    const { email, password } : AuthData = req.body;
};