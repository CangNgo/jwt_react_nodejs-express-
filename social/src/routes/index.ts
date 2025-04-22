import { Router } from "express";
import authRoutes from "./auth";
import roleRoutes from "./roleRouter";
import userRoute from "./userRouter";
import { PREFIX } from "../secrets";

const rootRoutes: Router = Router()
const refix:string = String(PREFIX)
//roleRoute
rootRoutes.use(refix, roleRoutes)

//authRoute
rootRoutes.use(refix, authRoutes)

rootRoutes.use(refix,userRoute)

export default rootRoutes