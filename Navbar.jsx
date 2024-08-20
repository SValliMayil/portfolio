import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 py-8'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo or Brand Name */}
        <div className='text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 text-transparent bg-clip-text'>
          Vallimayil
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex space-x-12 text-3xl'>
          <a href="#home" className='hover:text-gray-400 transition-colors'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors'>About Me</a>
          <a href="#services" className='hover:text-gray-400 transition-colors'>Certificates</a>
          <a href="#projects" className='hover:text-gray-400 transition-colors'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors'>Contact</a>
        </div>

        {/* Connect Button */}
        <button className='bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-10 py-5 rounded-full text-2xl transform transition-transform duration-300 hover:scale-110 hidden md:inline'>
          Connect Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;





