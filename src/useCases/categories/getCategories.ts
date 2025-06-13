import { NextFunction, Request, Response } from 'express';

import { knex } from '@/database';
import logger from '@/utils/logger';
import { CategoryDTO } from '@/dtos/category';

export async function getCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        const categories = await knex<ICategory>('categories').select('*').where('user_id', id);

        res.status(200).json(CategoryDTO.toResponseMany(categories));
    } catch (error) {
        logger.error('Error fetching categories:', error);
        next(error);
    }
}