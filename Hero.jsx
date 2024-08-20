import React from 'react';
import HeroImage from '../assets/VALLIPHOTO.jpg';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const name = "VALLIMAYIL.S";
  const roles = ["Passionate Student  ", "  Full Stack Developer"];

  return (
    <div className='relative bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden px-4'>
      {/* Hero Image */}
      <img
        src={HeroImage}
        alt="Vallimayil.S"
        className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover mb-8'
        style={{ marginTop: '-10%' }} // Adjust to move image higher
      />

      {/* Text Content */}
      <div className='text-center'>
        {/* Greeting Text */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6'>
          Hi all, I am <br />
          <span className='bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text'>
            {name}
          </span>
        </h1>

        {/* Animated Roles */}
        <div className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-12'>
          {roles.map((role, index) => (
            <div
              key={index}
              className={`inline-block ${index > 0 ? 'mt-4' : ''} animate-text`}
              style={{ animation: `textAppear 6s ease-in-out ${index * 4}s infinite` }}
            >
              <span className='bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text'>
                {role}
              </span>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center mt-8 space-x-6'>
          <a href="https://github.com/SValliMayil" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/feed/" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        
        </div>
      </div>

      {/* Custom Animation for Text */}
      <style jsx>{`
        @keyframes textAppear {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;


