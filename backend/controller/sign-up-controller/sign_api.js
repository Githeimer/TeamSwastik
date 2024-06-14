import { User } from "../../models/user.js";

import bcrypt from "bcrypt";

//signup
const postNewUser = async (req, res) => {
  const { username, email, password, phonenumber, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    const checkPhone = await User.findOne({ phonenumber });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "A User Already Exists with the email: " + email });
    }
    if (checkPhone) {
      return res.status(400).json({
        message:
          "Phone number " + checkPhone.phonenumber + " already registered",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
      phonenumber,
      role,
    });

    await newUser.save();
    return res.status(201).json({ message: "Record registered" });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { postNewUser as newPost };
