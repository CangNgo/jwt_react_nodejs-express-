import { Router } from "express";
import { login } from "../controllers/authController";

const authRoutes:Router = Router()

authRoutes.get("auth/login", login)


export default authRoutes