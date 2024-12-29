import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controlers/listing.controler.js";
import { verifyToken } from "../utls/verifyUser.js";
const router = express.Router();

router.post("/create", createListing);
router.delete("/delete/:id", deleteListing);
router.post("/update/:id", updateListing);
router.get("/get/:id", getListing);
router.get("/get/", getListings);

export default router;
//verifyToken IS REMOVED FROM EDITING, CREATING, DELETING LISTING TO CHECK ERROR
