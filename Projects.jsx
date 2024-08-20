import React from "react";
import employeeMSImage from "../assets/ecommerce image.jpeg";
import bookMSImage from "../assets/qrcodegenerator.png";
import bookImage from "../assets/flight.jpeg";
const projects = [
  {
    id: 1,
    name: "Shopping Cart",
    technologies: "REACTJS",
    image: employeeMSImage,
    github: "https://github.com/SValliMayil/ecommerce",
  },
  {
    id: 2,
    name: "Qr Code Generator",
    technologies: "REACTJS",
    image: bookMSImage,
    github: "https://github.com/SValliMayil/qrcodegenerator",
  },
  {
    id: 3,
    name: "FlightBooking System",
    technologies: "JAVA",
    image: bookImage,
    github: "https://github.com/SValliMayil/flightbooking",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
