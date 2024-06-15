import React, { useState } from "react";
import axios from "axios";

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
    <div className="container mx-auto p-4">
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Project Setup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="project"
              className="block text-gray-500 font-bold mb-2"
            >
              Project Name:
            </label>
            <input
              type="text"
              id="project"
              value={project}
              onChange={handleProject}
              required
              placeholder={placeholder.project}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block text-gray-500 font-bold mb-2"
            >
              Organization Name:
            </label>
            <input
              type="text"
              id="organization"
              value={organization}
              onChange={handleOrganization}
              required
              placeholder={placeholder.organization}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fund"
              className="block text-gray-500 font-bold mb-2"
            >
              Estimated Fund Ask Amount:
            </label>
            <input
              type="text"
              id="fund"
              value={funding}
              onChange={handleFunding}
              required
              placeholder={placeholder.funding}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block text-gray-500 font-bold mb-2"
            >
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={handleDuration}
              required
              placeholder={placeholder.duration}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-500 font-bold mb-2"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocation}
              required
              placeholder={placeholder.location}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-500 font-bold mb-2"
            >
              Cover Image For the project:
            </label>
            <input
              type="file"
              accept="image/*"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="shadow bg-[#3d4753] hover:bg-[#21262d] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Upload Project
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {status && <p className="text-green-500 mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default OrganizationInfo;
