import React, { useState } from 'react';
import Navbar from './Navbar';
import head from '../assets/head.png';
import head1 from '../assets/head1.jpeg';
import man from '../assets/man.png';
import Footer from './Footer';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestimonialsSlider from './TestimonialsSlider';

const Aboutus = () => {
  const [isHovered, setIsHovered] = useState(false);

  const keyPoints = [
    "40+ years of success in Construction & Engineering Industry",
    "800+ construction projects successfully completed, with 100+ Major ones",
    "Over 50 lakh sq. ft. of Buildings Completed",
    "Invested in over 2.5 lakh sq. ft. of centering and shuttering material",
    "In-house Fabrication & Carpentry capability",
    "Extensive fleet of construction Machinery and Trucks",
    "Expertise in delivering Post Tensioned beam structures",
    "Workforce of 1000+ Labourers & 75+ Staff"
  ];

  return (
    <div className='bg-black min-h-screen'>
      {/* Hero Section */}
      <div 
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center flex flex-col justify-between items-center" 
        style={{ 
          backgroundImage: `url(${head})`, 
          transition: 'background-image 0.5s ease-in-out' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-end">
          <Navbar />
        </div>

        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center">
          <div className="flex justify-center items-center w-full gap-1 flex-wrap">
            <h1 className='text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl font-semibold'>
              Home / <span className='text-red-600'>About Us</span>
            </h1>
          </div>
          <h3 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2'>
            About Us
          </h3>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 py-8 md:py-12">
          <div className="flex flex-col text-white gap-4 sm:gap-5 md:gap-6 lg:gap-7 w-full md:w-1/2">
            <p className='text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>About us</p>
            <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>We Build for Your Comfort</h1>
            <p className='text-white opacity-55 font-thin text-sm sm:text-base md:text-lg'>
              Welcome to Aakruthi Constructions, where we transform your vision into reality with precision, 
              innovation, and unwavering commitment to excellence. With a legacy of excellence in the 
              construction industry, we have established ourselves as a trusted name, renowned for delivering 
              projects that not only meet but exceed client expectations.
            </p>
            <button className='bg-blue-700 w-36 sm:w-40 p-2 sm:p-3 rounded-xl mt-4 sm:mt-7 hover:bg-blue-800 transition-colors text-sm sm:text-base'>
              More About us
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img src={man} alt="Construction worker" className="max-w-full h-auto w-4/5 md:w-full" />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
          <div 
            className="bg-white rounded-lg hover:scale-105 sm:hover:scale-110 duration-500 p-4 sm:p-6 w-full lg:w-1/2 text-center shadow-2xl flex flex-col justify-start" 
            style={{ boxShadow: "0px 0px 50px rgba(255, 0, 0, 0.9)" }}
          >
            <h1 className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">OUR VISION</h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              "Building the Future with Excellence and Integrity"
              <br /><br />
              Our vision is to be the leading construction company recognized for our commitment to quality, 
              innovation, and sustainable development.
            </p>
          </div>
          <div 
            className="bg-white rounded-lg p-4 sm:p-6 hover:scale-105 sm:hover:scale-110 duration-500 w-full lg:w-1/2 text-center shadow-lg flex flex-col justify-start" 
            style={{ boxShadow: "0px 0px 50px rgba(0, 0, 255, 0.9)" }}
          >
            <h1 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">OUR MISSION</h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              "At Aakruthi Constructions, our mission is to create innovative, sustainable, and high-quality 
              construction solutions that enhance the built environment and improve the lives of our clients 
              and communities."
            </p>
          </div>
        </div>

        {/* Aspects Section */}
        <div 
          className="w-full lg:w-3/4 rounded-xl md:rounded-none relative group cursor-pointer overflow-hidden my-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-cover bg-center transform transition-transform duration-1000 ease-out"
            style={{ 
              backgroundImage: `url(${head1})`,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-700">
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  isHovered ? 'opacity-0 transform -translate-y-20' : 'opacity-100 transform translate-y-0'
                }`}
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center tracking-wider px-4">
                  See Our Aspects
                </h2>
              </div>

              <div 
                className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-1000 ease-out ${
                  isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
                }`}
              >
                <div className="flex flex-col w-full sm:w-5/6 md:w-4/6">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
                    Our Aspects
                  </h1>
                  <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      {keyPoints.map((point, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-4 transform transition-all duration-700"
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-20px)'
                          }}
                        >
                          <li className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
                            {point}
                          </li>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-white items-center gap-4 sm:gap-5 py-8 sm:py-12 px-4 text-center">
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>We have 13+ years experience in Construction</h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-500'>Build better with Aakruthi Constructions</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-5 w-full sm:w-auto">
            <button className='border-2 border-gray-500 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 lg:px-7 lg:py-2 rounded-md hover:bg-white hover:text-black flex items-center justify-center gap-2 text-sm sm:text-base'>
              <FontAwesomeIcon icon={faPhone} /> 0987654321
            </button>
            <button className='bg-blue-700 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 lg:px-7 lg:py-2 rounded-md hover:bg-blue-800 transition-colors text-sm sm:text-base'>
              Contact us
            </button>
          </div>
        </div>
      </div>

      <TestimonialsSlider/>
      <Footer />
    </div>
  );
};

export default Aboutus;