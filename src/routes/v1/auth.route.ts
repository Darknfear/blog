import { Router } from "express";
import { catchAsync } from "../../common/utils/catch-async";
import AuthController  from "../../controllers/auth.controller";
const authController = new AuthController();
const router = Router();

router.post("/register", catchAsync(authController.register));

router.post("/login", catchAsync(authController.login));

export default router;
