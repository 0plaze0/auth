import { Router } from "express";
import register from "../controllers/register.js";

const router = Router();

//register user
router.route("/register").post(register.registerUser);

export default router;
