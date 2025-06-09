import { server } from '@/server';
import dotenv from 'dotenv';
import { setupDatabase } from './database/schema';
import logger from './utils/logger';

dotenv.config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
    await setupDatabase();

    logger.info(`Server is running on port ${PORT}`);
    logger.info(`http://localhost:${PORT}`);
    logger.info('Press Ctrl+C to stop the server');
    logger.info('-----------------------------------');
    logger.info('Server started successfully');
});