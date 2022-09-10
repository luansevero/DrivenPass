// import { Request, Response } from 'express';

// import { CreateCardData } from '../types/cardTypes';
// import * as networkService from "../services/networkService"

// export async function create(req:Request, res:Response){
//     const { userId }  = res.locals
//     const { title, name, password } : CreateCardData = req.body;

//     await networkService.create(userId, {title, name, password});
//     res.sendStatus(201);
// }

// export async function getAll(req:Request, res:Response){
//     const allCards = await networkService.getAll();
//     res.status(200).send(allCards);
// }

// export async function getOne(req:Request, res:Response){
//     const { userId } = res.locals;
//     const { id } = req.params;
//     const card = await networkService.getOne(userId, Number(id))
//     res.status(200).send(card);
// }

// export async function deleteOne(req:Request, res:Response){
//     const { userId } = res.locals;
//     const { id } = req.params;
//     await networkService.deleteOne(userId, Number(id));
//     res.sendStatus(200);
// }