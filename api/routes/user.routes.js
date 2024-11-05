import express from "express";
import { test } from "../controlers/user.controler";

const router = express.Router();

router.get("/", test);

export default router;
