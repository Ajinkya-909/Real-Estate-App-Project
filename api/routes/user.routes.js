import express from "express";
import { test, updateUser, deleteUser } from "../controlers/user.controler.js";
import { verifyToken } from "../utls/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.delete("/delete/:id", verifyToken, deleteUser);
router.post("/update/:id", verifyToken, updateUser);

export default router;
