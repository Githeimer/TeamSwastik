import express from "express";
const router = express.Router();

import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { newPost } from "../controller/sign-up-controller/sign_api.js";
import { loginUser } from "../controller/login-controller/login.controller.js";
// import { PasswordForgot } from "../controller/forgot-password-controller/forgotpassword.controller.js";
// import {
//   utoken,
//   PasswordReset,
// } from "../controller/reset-password-controller/resetpassword.controller.js";
// Route definition that uses the token as a URL parameter
router.route("/signup").post(newPost);
router.route("/signin").post(loginUser);
// router.route("/forgot-password").post(PasswordForgot);

//dont know why :token couldnt be accessed through the controller file so reser route here
// router.post(`/reset-password/:token`, async (req, res) => {
//   const { token } = req.params;
//   const { password } = req.body;
//   try {
//     const decoded = await jwt.verify(token, process.env.KEY);
//     const id = decoded.id;
//     const hashpassword = await bcrypt.hash(password, 10);
//     await User.findByIdAndUpdate({ _id: id }, { password: hashpassword });
//     return res.json({ status: true, message: "updated password successfully" });
//   } catch (error) {
//     return res.status(400).json({ message: "invalid token" });
//   }
// });

export { router as UserRouter };
