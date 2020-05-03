import {Entity} from "./Entity";

export interface Photo extends Entity{
    time: Date,
    path: string
}