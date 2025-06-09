import * as config from '../../knexfile';
import knexClient from 'knex';

const environment = process.env.ENVIRONMENT || 'development';
const envConfig = config[environment];

export const knex = knexClient(envConfig);

export const testConnection = async () => {
    try {
        await knex.raw('SELECT 1+1 AS result');
        console.log('Database connection successful');
        return null;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

export const logger = {
    tableExists: (table: string) => {
        console.log(`[INFO] ${new Date().toISOString()} - Table ${table} already exists. Dropping it.`);
    },
    tableCreated: (table: string) => {
        console.log(`[INFO] ${new Date().toISOString()} - Table ${table} created successfully.`);
    },
    info: (message: string) => {
        console.warn(`[INFO] ${new Date().toISOString()} - ${message}`);
    },
    error: (message: string) => {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    },
    warn: (message: string) => {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }
}