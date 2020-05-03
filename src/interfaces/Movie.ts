import {Entity} from "./Entity";

export interface Movie extends Entity{
    time: Date,
    path: string
}