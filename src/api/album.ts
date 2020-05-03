import {Photo} from "../interfaces/Photo";
import {Movie} from "../interfaces/Movie";
import {db} from "../services/db";

export const getAllPhotos = (): Promise<Photo[]> => {
    return db`select * from photos`;
};

export const getPhotoById = (id: string): Promise<Photo[]> => {
    return (db`select * from photos where id=${id}`).then(([photo]) => photo);
};

export const getAllMovies = (): Promise<Movie[]> => {
    return db`select * from movies`;
};

export const getMovieById = (id: string): Promise<Movie[]> => {
    return (db`select * from movies where id=${id}`).then(([movie]) => movie);
};