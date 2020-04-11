export const getAllPhotos = (ctx) => {
    return ctx.psql`select * from photos`;
};

export const getPhotoById = (ctx, id) => {
    return ctx.psql`select * from photos where id=${id}`;
};

export const getAllMovies = (ctx) => {
    return ctx.psql`select * from movies`;
};