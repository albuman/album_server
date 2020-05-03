import {
    GraphQLSchema
} from 'graphql';
import {rootQuery} from "./query";

export const schema: GraphQLSchema = new GraphQLSchema({
    query: rootQuery
});