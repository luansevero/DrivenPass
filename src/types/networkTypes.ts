import { Network } from "@prisma/client";

export type GetNetworkData = Omit<Network, "createAt" >;

export type NetworkData = Omit<GetNetworkData, "id" >

export type CreateNetworkData = Omit<NetworkData, "userId">;

export type DuplicateNetworksData = Omit<NetworkData, "name" | "password">
