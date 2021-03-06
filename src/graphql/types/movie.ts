import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLObjectType,
    GraphQLID
} from "graphql";

export const Movie: GraphQLObjectType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        path: {type: new GraphQLNonNull(GraphQLString)},
        time: {type: GraphQLString} //TODO: create new scalar type "Time" or "Timestamp"
    }
});