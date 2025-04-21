import { log } from "console";
import express from "express";
 
const app = express()

app.get("/", (req, res) =>{
    console.log("hello ")
})

app.listen(3000, () => {
    console.log("Working: http://localhost:3000/");
})
