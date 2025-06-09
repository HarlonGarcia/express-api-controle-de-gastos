import { logger, knex, testConnection } from '.';

const errors = {
    TABLE_EXISTS: '42P07',
}

const tables = [
    'users',
]

const dropExistingTables = async (tbNames: string[]) => {
    tbNames.forEach(async (tbName) => {
        const exists = await knex.schema.hasTable(tbName);
    
        if (exists) {
            logger.tableExists(tbName);
            await knex.schema.dropTable(tbName);
        }
    });
};

export const setupDatabase = async () => {
    try {
        await testConnection();
        await dropExistingTables(tables);

        await knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.string('name').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });

        logger.tableCreated('users');
        logger.info('All tables created successfully.');
    } catch (error) {
        if (error.code !== errors['TABLE_EXISTS']) {
            logger.error(`Error creating schema: ${error.message}`);
        }

        return;
    } finally {
        await knex.destroy();
    }
}