import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import AuthRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("Successful conection");
  })
  .catch((err) => {
    console.log(err);
  });

const _dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(_dirname, "/main/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "main", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!!";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
