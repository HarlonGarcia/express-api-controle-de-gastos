import logger from '@/utils/logger';
import config from '../../knexfile';
import client from 'knex';

type KnexEnv = 'development' | 'staging' | 'production';

const environment = (process.env.NODE_ENV as KnexEnv) || 'development';
const envConfig = config[environment];

export const knex = client(envConfig);

export const testConnection = async () => {
    try {
        await knex.raw('SELECT 1+1 AS result');
        logger.info('Database connection successful');
        return null;
    } catch (error) {
        logger.error('Database connection failed:', error);
        throw error;
    }
}