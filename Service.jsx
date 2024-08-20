import React from "react";
import AboutImage from "../assets/backend.jpg";
import Hello from "../assets/edyoda.png"
import Imag from "../assets/teachnook.jpg"
const services = [
  {
    id: 1,
    title: "Full Stack",
     description:"Teachnook",
    image: AboutImage // Add your image path here
  },
  {
    id: 2,
    title: "Backend Development",
    description: "DevTown",
    image: Imag
  },
  {
    id: 3,
    title: "Java",
    description: "EDYODA",
    image: Hello
  }
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-gray-800 p-8 rounded-lg overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div
                className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-blue-400 text-2xl font-bold text-white px-4 py-2 rounded-bl-lg"
              >
                {service.id}
              </div>
              <h3 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 text-lg">{service.description}</p>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

