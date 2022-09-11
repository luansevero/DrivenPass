import { SafetyNotes } from "@prisma/client";

export type GetSafetyNoteData = Omit<SafetyNotes, "createAt" >;

export type CreateSafetyNoteData = Omit<GetSafetyNoteData, "id" >;


