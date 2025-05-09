import express from "express";
import {
  google,
  signin,
  signout,
  signup,
} from "../controlers/auth.controler.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/google", google);

export default router;
