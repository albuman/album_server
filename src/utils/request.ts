export const getPostMessage = (ctx): Promise<any> => {
    let message = '';

    return new Promise<any>((resolve) => {
        ctx.req.on('data', (data) => {
            if(data) {
                message += data;
            }
        });

        ctx.req.on('end', () => {
            resolve(message);
        });
    });
};