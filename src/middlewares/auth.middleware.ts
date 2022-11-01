import { Request, Response, NextFunction } from "express";
import { BadRequest } from '@curveball/http-errors';
import { verifyToken } from '../common/auth/jwt';
import User from "../common/entities/user.entity";

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new BadRequest('unauthorized');
    }
    const token = String(authorization.split(' ').pop());

    const payload = verifyToken(token);
    req.user = payload;
    next();
};
