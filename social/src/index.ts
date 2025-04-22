import { log } from "console";
import express, { Request, Response } from "express";
import { PORT } from "./secrets";
import rootRoutes from "./routes";
const app = express()


app.use(express.json())
app.use(rootRoutes)

app.listen(PORT, () => {
    console.log("Working: http://localhost:8080/");
})
