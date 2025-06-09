import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.string('money_format')
            .notNullable()
            .defaultTo('en_US')
            .comment('Money format for the user, e.g., en_US, pt_BR, etc.');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.dropColumn('money_format');
    });
}