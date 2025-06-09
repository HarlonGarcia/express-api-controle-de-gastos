import express from 'express';
import { router } from './routes';
import { knex } from '@/database';
import logger from '@/utils/logger';

const server = express();

server.use((_, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

server.use(router);

process.on('SIGINT', async () => {
  logger.info('Shutting down...');
  await knex.destroy();
  process.exit(0);
});


export { server };
