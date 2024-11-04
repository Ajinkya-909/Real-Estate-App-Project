import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("Successful conection");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3005, () => {
  console.log("Server listening at port 8000");
});
