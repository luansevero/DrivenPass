import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { ErrorInfo } from './errorHandlerMiddleware';

dotenv.config();

export default function authenticateToken(req:Request, res:Response, next:NextFunction){
    const authHeader : string | string[] = req.headers["authorization"];
    if(!authHeader) throw new ErrorInfo("error_unauthorized", "Token must be send it");
    if(authHeader.split(" ")[0] !== "Bearer") throw new ErrorInfo("error_unauthorized", "Invalid token format");
    const token = authHeader && authHeader.split(" ")[1]
    if(token === null) throw new ErrorInfo("error_unauthorized", "Invalid Token");

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET), (err, user) => {
        if(err) throw new ErrorInfo("error_unauthorized", "Invalid Token");
        res.locals.userId = user.id;
        next();
    }
}