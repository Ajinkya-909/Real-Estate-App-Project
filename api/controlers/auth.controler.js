import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utls/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    return res.status(201).json("User Created Successfully");
  } catch (error) {
    return next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validuser = await User.findOne({ email: email });
    if (!validuser) {
      return next(errorHandler(404, "User not Found"));
    }
    const validpassword = bcryptjs.compareSync(password, validuser.password);
    if (!validpassword) {
      return next(errorHandler(401, "Invalid Credentials"));
    }
    const token = jwt.sign({ id: validuser._id }, process.env.JWT_Secret);
    res.cookie("token", token, { httpOnly: true }).status(200).json(validuser);
  } catch (error) {
    next(error);
  }
};
