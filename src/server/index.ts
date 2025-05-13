import express from 'express';
import { router } from './routes';

const server = express();

server.use((_, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

server.use(router);

export { server };
