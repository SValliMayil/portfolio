import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/VALLIPHOTO.jpg";

const techSkills = [
  { skill: "HTML & CSS", color: "#f7df1e" }, // Yellow
  { skill: "Javascript", color: "#e34c26" }, // Orange
  { skill: "React.js", color: "#61dafb" }, // Light Blue
  { skill: "Express js", color: "#68a063" }, // Green
  { skill: "MongoDB", color: "#4db33d" }, // Green
  { skill: "SQL", color: "#f29111" }, // Orange-Red
  { skill: "C", color: "#4db33d" }, // Green
  { skill: "Java", color: "#f89820" }, // Orange
  
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image on the left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src={AboutImage}
              alt="About Me"
              className="w-80 h-96 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500 object-cover"
            />
          </div>

          {/* About Me text and skills on the right */}
          <div className="flex-1">
            {/* About Me Text */}
            <p className="text-xl mb-6 italic text-gray-300">
              I am good at <span className="text-gradient">C programming</span> and <span className="text-gradient">Java</span>. Exploring the fundamentals of data structures, I am dedicated to continuous learning and seeking opportunities to apply my evolving skill set. Eager to contribute to innovative projects and collaborate within the dynamic landscape of technology.
            </p>
            <p className="text-xl mb-8 italic text-gray-300">
              SELF MOTIVATED AND HARDWORKING STUDENT SEEKING FOR AN OPPORTUNITY IN A CHALLENGING ENVIRONMENT TO PROVE MY SKILLS AND UTILIZE MY KNOWLEDGE AND INTELLIGENCE IN THE GROWTH OF THE ORGANIZATION
            </p>

            {/* Animated Tech Skills with Colors */}
            <div className="text-2xl">
              {techSkills.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: techSkills.length * 0.5,
                  }}
                  style={{ color: item.color }}
                  className="inline-block mr-6 font-semibold"
                >
                  {item.skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
