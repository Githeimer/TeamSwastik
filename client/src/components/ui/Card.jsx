// src/ProjectCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/organization/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Donations: {project.donations}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
