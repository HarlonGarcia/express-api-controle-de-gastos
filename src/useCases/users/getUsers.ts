import { NextFunction, Request, Response } from 'express';

import { knex } from '@/database';
import logger from '@/utils/logger';
import { UserDTO } from '@/dtos/user';

export async function getUsers(_: Request, response: Response, next: NextFunction) {
    try {
        const users = await knex<IUser>('users').select('*');

        response.status(200).json(UserDTO.toResponseMany(users));
    } catch (error) {
        logger.error('Error fetching users:', error);
        next(error);
    }
}