import { Organization } from "../../models/organization.js";

const postNewProject = async (req, res) => {
  const { project, organization, funding, duration, location } = req.body;

  try {
    const newProject = new Organization({
      project,
      organization,
      funding,
      duration,
      location,
    });

    await newProject.save();
    return res.status(201).json({ message: "Record registered" });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProject = async (req, res) => {
  try {
    // Fetch all projects from the database
    const projects = await Organization.find();
    return res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { postNewProject as newProjectPost, getProject as ProjectGet };
