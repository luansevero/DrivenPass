import { SafetyNotes } from "@prisma/client";

export type GetSafetyNoteData = Omit<SafetyNotes, "creationDate" >;

export type CreateSafetyNoteData = Omit<GetSafetyNoteData, "id" >

