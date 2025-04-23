import { Router } from "express";
import { login } from "../controllers/authController";
import { postUser } from "../controllers/userController";

const authRoutes:Router = Router()

authRoutes.get("auth/sign_up",postUser)


export default authRoutes