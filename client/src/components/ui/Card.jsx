import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href={project.link}>
        <img
          className="rounded-t-lg"
          src={project.imageUrl}
          alt={project.title}
        />
      </a>
      <div className="p-5">
        <a href={project.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{project.description}</p>
        <Link to={link}>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Donate
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Alpha.",
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Beta.",
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Gamma.",
      link: "#",
    },
    {
      id: 4,
      title: "Project Delta",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Delta.",
      link: "#",
    },
    {
      id: 5,
      title: "Project Epsilon",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Epsilon.",
      link: "#",
    },
    {
      id: 6,
      title: "Project Zeta",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Zeta.",
      link: "#",
    },
    {
      id: 7,
      title: "Project Eta",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Eta.",
      link: "#",
    },
    {
      id: 8,
      title: "Project Theta",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Theta.",
      link: "#",
    },
    {
      id: 9,
      title: "Project Iota",
      imageUrl: "https://via.placeholder.com/150",
      description: "This is a description for Project Iota.",
      link: "#",
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
        {projects.map((project, index) => {
          let link = "/landing/cards";
          if (index === 0) {
            link += "/one";
          } else if (index === 1) {
            link += "/two";
          } else if (index === 2) {
            link += "/three";
          }
          return <ProjectCard key={project.id} project={project} link={link} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
