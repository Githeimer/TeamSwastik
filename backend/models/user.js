import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "user" },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
