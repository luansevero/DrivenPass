import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { ErrorInfo } from './errorHandlerMiddleware';
import { Users } from '@prisma/client';
import * as authRepository from "../repositories/authRepository"


dotenv.config();

export default async function authenticateToken(req:Request, res:Response, next:NextFunction){
    const authHeader : string | string[] = req.headers["authorization"];
    if(!authHeader) throw new ErrorInfo("error_unauthorized", "Token must be send it");
    if(authHeader.split(" ")[0] !== "Bearer") throw new ErrorInfo("error_unauthorized", "Invalid token format");

    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) throw new ErrorInfo("error_unauthorized", "Invalid Token");

    let decoded = {};
    const secretToken = process.env.ACESS_SECRET_TOKEN;
    try{
        decoded = jwt.verify(token, secretToken);
        const user : Users = await authRepository.findById(Number(decoded["id"]))
        if(!user) throw new ErrorInfo("error_forbidden", "That token is expired!")
        res.locals.userId = Number(decoded["id"])
        next();
    } catch (erro){
        throw new ErrorInfo("error_unprocessable_entity", "Invalid Token")
    }
}