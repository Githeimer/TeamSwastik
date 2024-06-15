import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const OrganizationInfo = () => {
  const [project, setProject] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [funding, setFunding] = useState("");
  const [organization, setOrganization] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const placeholder = {
    project: "Earthquake Rescue ",
    duration: "2 months",
    location: "Gorkha Village",
    funding: "2 cr",
    organization: "ESCROW Nepal",
  };

  const URL_sign = "http://localhost:3000/org/project";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL_sign, {
        project,
        organization,
        funding,
        duration,
        location,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response);
          setStatus(response.data.message);
          setError("");
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          setError(err.response.data.message);
          setStatus("");
        } else {
          setError("An error occurred. Please try again.");
          setStatus("");
        }
      });
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleFunding = (e) => {
    setFunding(e.target.value);
  };

  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };

  return (
    <>
      <div className="container org-container">
        <div className="sign-container">
          <h1>Project Setup</h1>
          <form className="sign-form" onSubmit={handleSubmit}>
            <label htmlFor="project" className="sign-form">
              Project Name:
            </label>
            <input
              type="text"
              id="project"
              value={project}
              onChange={handleProject}
              required
              placeholder={placeholder.project}
            />

            <label htmlFor="organization">Organization Name:</label>
            <input
              type="text"
              id="organization"
              value={organization}
              onChange={handleOrganization}
              required
              placeholder={placeholder.organization}
            />

            <label htmlFor="fund">Estimated Fund Ask Amount:</label>
            <input
              type="text"
              value={funding}
              onChange={handleFunding}
              required
              placeholder={placeholder.funding}
            />

            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              value={duration}
              onChange={handleDuration}
              required
              placeholder={placeholder.duration}
            />

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              value={location}
              onChange={handleLocation}
              required
              placeholder={placeholder.location}
            ></input>

            <label htmlFor="image">Cover Image For the project:</label>
            <input type="file" accept="image/*" />

            <button type="submit" className="sign-btn">
              Upload Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrganizationInfo;
