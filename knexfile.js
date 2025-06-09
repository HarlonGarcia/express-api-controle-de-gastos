// Update with your config settings.

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'minoia',
    password: 'minoiadb',
    database: 'minoia',
    harset: 'utf8'
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
    directory: __dirname + '/knex/seeds'
  },

};

export const staging = {
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

export const production = {
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
