import { Credentials } from "@prisma/client";

export type CreateCredentialData = Omit<Credentials, "id" | "userId" | "creationDate">;

export type GetCredentialData = Omit<Credentials, "userId" | "creationDate">;