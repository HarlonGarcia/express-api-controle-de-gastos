import { Router } from 'express';
import { getUsers } from '@/useCases/users/getUsers';
import { getUser } from '@/useCases/users/getUser';
import { getCategories } from '@/useCases/categories/getCategories';

export const router = Router();

router.get('/healthcheck', (_, res) => {
    res.status(200).json({ status: 'ok' });
});

router.get('/users', getUsers);
router.get('/users/:id', getUser);

router.get('/users/:id/categories', getCategories);