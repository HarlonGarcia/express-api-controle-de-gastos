import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('users').del()

    return await knex('users').insert([
        { id: 1, name: 'John Doe', email: 'john@email.com', password: '12345', currency: 'USD' },
        { id: 2, name: 'Harlon', email: 'harlon@email.com', password: '12345' },
        { id: 3, name: 'Gustave', email: 'gustave@email.com', password: '12345' }
    ]);
};
