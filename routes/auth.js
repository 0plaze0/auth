import { Router } from "express";
import registerController from "../controllers/registerController.js";
import loginController from "../controllers/loginController.js";

const router = Router();

//register user
router.route("/register").post(registerController.registerUser);
router.route("/login").post(loginController.loginUser);
router.route("/forgotPassword").post(loginController.forgotPassword);
router.route("/resetPassword").post(loginController.resetPassword);

export default router;
