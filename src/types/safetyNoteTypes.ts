import { SafetyNotes } from "@prisma/client";

export type GetSafetyNoteData = Omit<SafetyNotes, "creationDate" >;

export type SafetyNoteData = Omit<GetSafetyNoteData, "id" >

export type CreateSafetyNoteData = Omit<SafetyNoteData, "userId">;
