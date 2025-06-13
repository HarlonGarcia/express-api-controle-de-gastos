import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('categories').del();

    await knex('categories').insert([
        {
            id: '1e7bd6ee-dc30-40f3-aab5-fc293ae755ac',
            name: 'Escritório',
            color: 'FF9A33',
            user_id: '60f482e4-823f-4d5b-a73a-c73d6ce85102'
        },
        {
            id: '9f51caad-ce20-423f-a842-3dd3401a236c',
            name: 'Feira',
            color: '009A33',
            user_id: '60f482e4-823f-4d5b-a73a-c73d6ce85102'
        },
        {
            id: '02ca0c43-be12-4094-967e-fb63fa47e68a',
            name: 'Comida (Delivery)',
            color: '5A90FF',
            user_id: '60f482e4-823f-4d5b-a73a-c73d6ce85102'
        },
    ]);
};
