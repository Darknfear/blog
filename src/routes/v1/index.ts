import { Router } from "express";
import authRoute from './auth.route';
const router = Router();

// auth route
router.use('/auth', authRoute);

export default router;
