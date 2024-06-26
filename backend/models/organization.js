import mongoose, { mongo } from "mongoose";

const OrgSchema = new mongoose.Schema({
  project: { type: String, required: true, unique: false },
  organization: { type: String, required: true, unique: false },
  funding: { type: String, required: true, unique: false },
  duration: { type: String, required: true, unique: false },
  location: { type: String, required: true, unique: false },
});

const OrgModel = mongoose.model("Organization", OrgSchema);

export { OrgModel as Organization };
