import cookieParser from "cookie-parser";
import express from "express";
import productRouter from "./routes/product.js";
import "dotenv/config";
import cors from "cors";
import connectToDB from "./config/db.js"

// const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

await connectToDB()

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use("/api/product", productRouter);

app.listen(PORT, () => console.log("server started at " + PORT));