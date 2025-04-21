import { log } from "console";
import express, { Request, Response } from "express";
import { PORT } from "./secrets";
import rootRoutes from "./routes";
const app = express()
const prefix:string = "/api/v1"


app.use(prefix, rootRoutes)

app.listen(PORT, () => {
    console.log("Working: http://localhost:8080/");
})
