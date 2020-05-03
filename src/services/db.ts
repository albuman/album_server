import * as postgres from 'postgres';
import {dbConfig} from "../constants/db";

export const db = postgres(dbConfig);