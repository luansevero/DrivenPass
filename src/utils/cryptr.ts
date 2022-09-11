import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function encrypt(value : string){
    return cryptr.encrypt(value);
};

export function decrypt(value : string){
    return cryptr.decrypt(value)
};