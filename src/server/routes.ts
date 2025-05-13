import { Router } from 'express';

export const router = Router();

router.get('/healthcheck', (_, res) => {
    res.status(200).json({ status: 'ok' });
});

router.get('/');