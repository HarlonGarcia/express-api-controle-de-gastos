import logger from '@/utils/logger';
import { knex, testConnection } from '.';

export const setupDatabase = async () => {
    try {
        await testConnection();
        
        if (process.env.NODE_ENV === 'development') {
            await knex.migrate.rollback({}, true);
            await knex.migrate.latest();
            await knex.seed.run();
        } else {
            await knex.migrate.latest();
        }
        
        logger.info('Database migrations executed successfully');
    } catch (error) {
        if (error instanceof Error) {
            logger.error(`Database setup failed: ${error.message}`);
        }
    }
}
