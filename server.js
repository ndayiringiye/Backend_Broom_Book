import express from "express";
import dotenv from "dotenv";
import { connectbd } from "./config/db.js";

dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(5000, async () =>{
    await connectbd();
    console.log(`server is running on port ${PORT}`)
});