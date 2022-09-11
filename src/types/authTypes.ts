import { Users } from "@prisma/client";

export type AuthData = Omit<Users, "id">;

export type CreateAuthData = Omit<AuthData, "createAt">