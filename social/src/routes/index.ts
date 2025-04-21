import { Router } from "express";
import authRoutes from "./auth";
import roleRoutes from "./roleRouter";

const rootRoutes: Router = Router()

//roleRoute
rootRoutes.use("/role", roleRoutes)

//authRoute
rootRoutes.use("/auth", authRoutes)


export default rootRoutes