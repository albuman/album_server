import {Context} from "koa";

export const getResponseError = (ctx: Context, err: Error): void => {
    ctx.type = 'application/json';
    ctx.body = JSON.stringify({
        successful: false,
        message: err.message
    });
};