import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';
import {Photo} from "./types/photo";
import {Movie} from "./types/movie";
import {getAllPhotos, getAllMovies, getMovieById} from "../api/album";

export const rootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'Root',
    fields: {
        photos: {
            type: new GraphQLList(Photo),
            args: {
                //TODO: define filters
            },
            resolve: () => {
                return getAllPhotos();
            }
        },
        movies: {
            type: new GraphQLList(Movie),
            args: {
                first: {type: GraphQLInt}
            },
            resolve: (parent, args) => {
                return getAllMovies().then(movies => {
                    if(args.first) {
                        return movies.slice(0, args.first); //TODO: make this in query to db
                    }

                    return movies;
                });
            }
        },
        movie: {
            type: Movie,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => {
                if(args.id) {
                    return getMovieById(args.id);
                }
            }
        }
    }
});