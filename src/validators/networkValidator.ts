import * as networkRepository from "../repositories/networkRepository";
import { Network } from "@prisma/client";
import { DuplicateNetworksData, GetNetworkData } from "../types/networkTypes";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";

export async function findDuplicate(userId_title: DuplicateNetworksData) {
    const network: Network = await networkRepository.findByTitleAndUserId(userId_title);
    if (network) throw new ErrorInfo("error_unprocessable_entity", "Already have the same network title");
}

export async function findAll(userId: number) {
    const allNetworks = await networkRepository.findAll(userId);
    if (allNetworks.length === 0) throw new ErrorInfo("error_not_found", "Don't have any network here :(");
    return allNetworks;
}

export async function findOne(userId: number, id: number) {
    const network: GetNetworkData = await networkRepository.findById(id);
    if (!network) throw new ErrorInfo("error_not_found", "That network don't exist");
    if (network["userId"] !== userId) throw new ErrorInfo("error_forbidden", "That network don't belong to u");
    return network;
}