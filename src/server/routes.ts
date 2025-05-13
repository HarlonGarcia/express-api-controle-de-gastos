import { Router } from 'express';
import { getUsers } from '@/useCases/users/getUsers';

export const router = Router();

router.get('/healthcheck', (_, res) => {
    res.status(200).json({ status: 'ok' });
});

router.get('/users', getUsers);