import {DbConfig} from "../interfaces/DbConfig";
import {getDbHost, getDbPort} from "../utils/args";

export const dbName: string = 'family_album';

export const dbConfig: DbConfig = {
    password: 'Pumped1994!',
    username: 'postgres',
    port: getDbPort(),
    host: getDbHost(),
    database: dbName
};
