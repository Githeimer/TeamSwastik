import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserRouter } from "./routes/user.routes.js";
import { OrganizationRouter } from "./routes/organization.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());

app.use("/auth", UserRouter);
app.use("/org", OrganizationRouter);

mongoose.connect("mongodb://127.0.0.1:27017/authentication");

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
