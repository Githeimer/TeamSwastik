import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Userlogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "user is not registered" });
  }

  console.log(user.role);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: "password is incorrect!" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 }); //httpOnly for security reasons
  return res.json({
    status: true,
    message: "login sucessfully",
    role: user.role,
  });
};

export { Userlogin as loginUser };
