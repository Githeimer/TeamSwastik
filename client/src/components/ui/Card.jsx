import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link to={link}>
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={project.imageUrl}
          alt={project.title}
        />
      </Link>
      <div className="p-5">
        <Link to={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-[#5cb5d1] transition-colors duration-300">
            {project.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{project.description}</p>
        <Link to={link}>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3d4753] rounded-lg hover:bg-[#0a1215] focus:ring-4 focus:outline-none focus:ring-[#3d4753] transition duration-50">
            Donate
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              ></path>
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
      title: "Rural Housing Reconstruction in Nepal",
      imageUrl: "/cards/image.png",
      description:
        "The Rural Housing Reconstruction Project aims to rebuild houses destroyed by the 2015 earthquake, ensuring they are more resilient to future disasters.",
      location: "Earthquake-affected districts, Nepal",
      amount: "$450 million",
      organization: "Asian Development Bank (ADB)",
      link: "/landing/cards/one",
    },
    {
      id: 2,
      title: "Boosting Transport and Trade Connectivity in Nepal",
      imageUrl: "/cards/Infrastructure-1.png",
      description:
        "This initiative focuses on improving transport infrastructure to enhance trade connectivity within Nepal and with neighboring countries.",
      location: "Across Nepal",
      amount: "$275 million",
      organization: "World Bank, Government of Nepal",
      link: "/landing/cards/two",
    },
    {
      id: 3,
      title: "Education Quality Improvement in Nepal",
      imageUrl: "/cards/education.webp",
      description:
        "The project aims to improve the quality of education by upgrading infrastructure, training teachers, and developing inclusive education policies.",
      location: "Various locations, Nepal",
      amount: "N/A",
      organization: "Asian Development Bank (ADB)",
      link: "/landing/cards/three",
    },
    {
      id: 4,
      title: "Safe Drinking Water Initiative",
      imageUrl: "/cards/drinkingWater.jpg",
      description:
        "Ensures access to safe and reliable drinking water for residents of the Kathmandu Valley.",
      location: "Kathmandu Valley, Nepal",
      amount: "$130 million",
      organization: "JICA (Japan International Cooperation Agency)",
      link: "/landing/cards/four",
    },
    {
      id: 5,
      title: "Healthcare Improvement Program in Syria",
      imageUrl: "/cards/healthcareSyria.jpg",
      description:
        "Focuses on providing essential health services and rebuilding healthcare infrastructure in war-torn regions.",
      location: "Aleppo, Syria",
      amount: "N/A",
      organization: "WHO (World Health Organization), Local NGOs",
      link: "/landing/cards/five",
    },
    {
      id: 6,
      title: "Agricultural Development in Sub-Saharan Africa",
      imageUrl: "/cards/agri-in-africa.jpg",
      description:
        "Aims to enhance agricultural productivity through sustainable practices and technology adoption.",
      location: "Various countries in Sub-Saharan Africa",
      amount: "Varies by country",
      organization: "Bill & Melinda Gates Foundation",
      link: "/landing/cards/six",
    },
    {
      id: 7,
      title: "Polio Eradication Initiative",
      imageUrl: "/cards/polio.webp",
      description:
        "A global effort to eradicate polio by providing vaccines and improving immunization systems.",
      location: "Global",
      amount: "N/A",
      organization: "Bill & Melinda Gates Foundation, WHO",
      link: "/landing/cards/seven",
    },
    {
      id: 8,
      title: "Women’s Empowerment Program in South Asia",
      imageUrl: "/cards/womenEmpowerment.jpg",
      description:
        "Focuses on empowering women through education, vocational training, and legal support.",
      location: "India, Bangladesh, Nepal",
      amount: "N/A",
      organization: "CARE International",
      link: "/landing/cards/eight",
    },
    {
      id: 9,
      title: "Clean Energy Initiative in East Africa",
      imageUrl: "/cards/cleanEnergy.jpg",
      description:
        "Promotes the use of clean and renewable energy to reduce carbon emissions and improve access to electricity in rural areas.",
      location: "Kenya, Tanzania, Uganda",
      amount: "$100 million",
      organization:
        "USAID (United States Agency for International Development)",
      link: "/landing/cards/nine",
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
