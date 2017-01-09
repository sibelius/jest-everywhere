import Koa from 'koa';

import { jwtSecret } from '../common/config';
import middleware from './middleware';
import api from './api';

const app = new Koa();
// Set the App Security Key used to hash JWT
app.keys = jwtSecret;

app.use(middleware());
app.use(api());
app.use(ctx => ctx.status = 404);

export default app;
