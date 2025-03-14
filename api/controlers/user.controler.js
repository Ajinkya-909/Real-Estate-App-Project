import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utls/error.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
  res.send("HII");
};

export const updateUser = async (req, res, next) => {

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.emali,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been Deleted");
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  if (req.params.id) {
    try {
      const listing = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only see your Listings"));
  }
};
