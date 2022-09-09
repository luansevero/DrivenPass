import { Users } from "@prisma/client";

export type authData = Omit<Users, "id">;