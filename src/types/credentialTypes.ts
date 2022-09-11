import { Credentials } from "@prisma/client";

export type GetCredentialData = Omit<Credentials, "createAt" >;

export type CredentialData = Omit<GetCredentialData, "id" >

export type CreateCredentialData = Omit<CredentialData, "userId">;

export type DuplicateCredentials = Omit<CredentialData, "url" | "password" >