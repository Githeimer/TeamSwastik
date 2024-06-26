import express from "express";
import {
  newProjectPost,
  ProjectGet,
} from "../controller/organization-controller/organization_api.js";
const router = express.Router();

router.route("/project").post(newProjectPost).get(ProjectGet);

export { router as OrganizationRouter };
