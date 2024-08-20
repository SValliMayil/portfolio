import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Information */}
          <div className="flex-1 mb-12 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-lg mb-4">
              <span className="font-bold">Email:</span> vallimayil0405@gmail.com
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Phone:</span> phone number
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Social Media:</span>
              <a href="https://www.linkedin.com/feed/" className="text-green-400 hover:text-green-300 ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
              <a href="https://github.com/SValliMayil" className="text-green-400 hover:text-green-300 ml-2" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form
              action="https://formspree.io/f/your-form-id" // Change to your form handling endpoint
              method="POST"
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                />
              </div>
             
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
