import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table) => {
        table.dropColumn('id');
    });

    await knex.schema.alterTable('users', (table) => {
        table.uuid('id').primary()
            .notNullable()
            .defaultTo(knex.fn.uuid());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table) => {
        table.dropColumn('id');
    });

    await knex.schema.alterTable('users', (table) => {
        table.increments('id').primary();
    });
}
