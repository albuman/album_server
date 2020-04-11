import * as Koa from 'koa';
import * as postgres from 'postgres';
import {dbConfig} from "./src/constants/db";
import {getAllPhotos, getPhotoById} from "./src/album";
import {createReadStream} from "fs";

const app = new Koa();
app.context.psql = postgres(dbConfig);


app.use(async ctx => {
	// console.log(ctx.path);
	switch (ctx.path) {
		case '/image':
			const {id} = ctx.query;

			if(id) {
				const [photo] = await getPhotoById(ctx, id);

				if(photo) {
					ctx.body = createReadStream(photo.path);
				} else {
					ctx.body = `No image with id: ${id}`;
				}
			} else {
				ctx.body = 'No id passed';
			}
			break;
		default:
			const results = await getAllPhotos(ctx);
			ctx.body = '<img src="/image?id=1"/>';
			break;
	}
});

app.listen(8000);

