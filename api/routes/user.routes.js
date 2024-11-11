import express from "express";
import { test, updateUser } from "../controlers/user.controler.js";
import { verifyToken } from "../utls/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);

export default router;
