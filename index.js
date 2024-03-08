import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/dbConn.js";
import auth from "./routes/auth.js";

connectDB(process.env.DB_URI);
const app = express();
const PORT = process.env.PORT || 3500;

//middleware
app.use(express.json());

//routes
app.get("/", async (req, res) => {
  res.send("hello");
});
app.use("/api/v1/auth", auth);

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
  app.listen(PORT, () => {
    console.log(`App is running in ${PORT}`);
  });
});
