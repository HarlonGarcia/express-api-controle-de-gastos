import { knex } from '@/database';
import logger from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';

export async function getUsers(_: Request, response: Response, next: NextFunction) {
    try {
        const users = await knex<IUser[]>('users').select('*');

        response.status(200).json(users);
    } catch (error) {
        logger.error('Error fetching users:', error);
        next(error);
    }
}