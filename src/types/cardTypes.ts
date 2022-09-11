import { Cards } from "@prisma/client";

export type GetCardData = Omit<Cards, "createAt" >;

export type CardData = Omit<GetCardData, "id" >

export type CreateCardData = Omit<CardData, "userId">;

export type DuplicateCardsData = Omit<CardData, "number" | "cardholderName" | "securityCode" | "expirationDate" | "password" | "isVirtual" | "type">
