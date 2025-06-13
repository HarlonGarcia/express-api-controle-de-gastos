import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('categories', (table) => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid());
        table.string('name').notNullable();
        table.string('color').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.uuid('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('categories');
}