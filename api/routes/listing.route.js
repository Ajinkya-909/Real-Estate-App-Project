import express from "express";
import { createListing } from "../controlers/listing.controler.js";
import { verifyToken } from "../utls/verifyUser.js";
const router = express.Router();

router.post("/creat", verifyToken, createListing);

export default router;
