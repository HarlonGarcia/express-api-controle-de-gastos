import { NextFunction, Request, Response } from 'express';
import { knex } from '@/database';
import { Exception } from '@/exceptions';
import logger from '@/utils/logger';
import { RESPONSE_MESSAGE, STATUS_CODE } from '@/utils/constants';

export async function getUser(req: Request, response: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            throw new Exception(STATUS_CODE.BAD_REQUEST, RESPONSE_MESSAGE.ID_REQUIRED);
        }
    
        const user = await knex<IUser>('users').where('id', id);
    
        if (user.length === 0) {
            throw new Exception(STATUS_CODE.NOT_FOUND, RESPONSE_MESSAGE.USER_NOT_FOUND);
        }

        response.status(200).json(user);
    } catch (error) {
        logger.error('Error fetching user:', error);
        next(error);
    }
}