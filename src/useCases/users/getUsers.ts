import { knex } from '@/database';
import { Request, Response } from 'express';

export async function getUsers(_: Request, response: Response) {
    try {
        const users = await knex<IUser>('users').select('*');

        response.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);

        response.status(500).json({
            error: 'Internal server error',
        });
    }
}