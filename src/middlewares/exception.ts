import { Exception } from '@/exceptions';
import { RESPONSE_MESSAGE, STATUS_CODE } from '@/utils/constants';
import { NextFunction, Request, Response } from 'express';

export const exceptionMiddleware = (
    exception: Exception,
    _: Request,
    res: Response,
    next: NextFunction,
) => {
    const status = exception.status || STATUS_CODE.INTERNAL_SERVER_ERROR;
    let message = exception.message;
    
    if (status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
        message = RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR;
    }

    res.status(exception.status).json({
        status,
        message,
        details: exception.error || {},
    });

    next();
}