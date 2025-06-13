import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('users').del()

    return await knex('users').insert([
        { id: 'eba7c689-708b-4d6d-a15e-0bb72c5bc089', name: 'John Doe', email: 'john@email.com', password: '12345', currency: 'USD' },
        { id: '60f482e4-823f-4d5b-a73a-c73d6ce85102', name: 'Harlon', email: 'harlon@email.com', password: '12345' },
        { id: 'b3c9627f-f665-4237-8731-7a88aba9fc8b', name: 'Gustave', email: 'gustave@email.com', password: '12345' }
    ]);
};
