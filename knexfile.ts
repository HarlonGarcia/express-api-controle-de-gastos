// Update with your config settings.
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Knex } from 'knex';
import { config } from 'dotenv';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const development: Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: 'utf8'
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/knex/migrations',
        extension: 'ts',
        loadExtensions: ['.js', '.ts']
    },
    seeds: {
        directory: __dirname + '/knex/seeds',
        extension: 'ts',
        loadExtensions: ['.js', '.ts']
    },
};

const staging = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
        ssl: { rejectUnauthorized: false },
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};

const production = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};

export default {
    development,
    staging,
    production,
};