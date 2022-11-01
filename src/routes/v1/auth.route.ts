import { Router } from "express";
import AuthController  from "../../controllers/auth.controller";
import { catchAsync } from "../../common/utils/catch-async";
import {isAuth} from "../../middlewares/auth.middleware";

const authController = new AuthController();
const router = Router();

router.post("/register", catchAsync(authController.register));

router.post("/login", catchAsync(authController.login));

router.get("/get", [isAuth], catchAsync(authController.get));

export default router;
