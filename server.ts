import * as Koa from 'koa';
import {Context} from "koa";
import {graphqlApi} from "./src/api/graphql";
import {getPort} from "./src/utils/args";
import {getResponseError} from "./src/utils/response";
import {getPostMessage} from "./src/utils/request";

const app = new Koa();

app.on('error', (err) => {
    console.error(err);
});

app.use(async (ctx: Context) => {
    if (ctx.path === '/graphql') {
        let query;

        if (ctx.req.method === 'POST') {
            query = await getPostMessage(ctx);
        } else if (ctx.req.method === 'GET') {
           query = ctx.query.query;
        } else {
            return getResponseError(ctx, new Error(`${ctx.req.method} method is not supported`));
        }

        const photo = await graphqlApi(query);

        ctx.type = 'application/json';
        ctx.body = JSON.stringify(photo);
    } else {
    	ctx.status = 404;
    	getResponseError(ctx, new Error(`Not found`));
	}
});

const port: number = getPort();

app.listen(port, () => {
    console.log(`Server started at port : ${port}`);
});

