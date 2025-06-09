import { knex } from '@/database';
import logger from '@/utils/logger';
import { Request, Response } from 'express';

export async function getUsers(_: Request, response: Response) {
    try {
        const users = await knex<IUser>('users').select('*');

        response.status(200).json(users);
    } catch (error) {
        logger.error('Error fetching users:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}