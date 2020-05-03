import {graphql} from "graphql";
import {schema} from "../graphql/schema";

export const graphqlApi = (query: string) => {
    return graphql(schema, query);
};