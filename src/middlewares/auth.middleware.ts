import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../common/utils/auth';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    // const { toke } = req.headers;
    // const auth = verifyToken();
};
