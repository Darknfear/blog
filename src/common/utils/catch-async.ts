import { Request, NextFunction, Response } from "express";

export const catchAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res)).catch(next);
