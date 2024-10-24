import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider from '../assets/Slider.png';
import Slider1 from '../assets/banner1.webp';
import Slider2 from '../assets/banner2.webp';
import arrow from '../assets/arrow.png';
import downArrow from '../assets/down-arrow.png';

import CommitmentComponent from './CommitmentComponent';
import Testimonials from './testimonials';
import CompanyDetails from './CompanyDetails';
import HomeContact from './homeContact';
import Footer from './Footer';

const Home = () => {
  // Array of background images
  const images = [Slider, Slider1, Slider2];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      console.log(`Next Image Index: ${nextIndex}`);
      return nextIndex;
    });
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => {
      const prevIndexUpdated = (prevIndex - 1 + images.length) % images.length;
      console.log(`Previous Image Index: ${prevIndexUpdated}`);
      return prevIndexUpdated;
    });
  };

  return (
    <div className=''>
      {/* Background image with slider */}
      <div 
        className="relative h-screen bg-cover bg-center flex flex-col justify-between items-center" 
        style={{ backgroundImage: `url(${images[currentImage]})`, transition: 'background-image 0.5s ease-in-out' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-end">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center gap-4 md:gap-1">
          <div className="flex justify-center items-center w-full gap-2 md:gap-3 flex-wrap">
            {/* Left Arrow */}
            <button 
              className='cursor-pointer bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.3)] text-white rounded-full hover:bg-[rgba(255,255,255,0.5)] p-3 md:p-4 border-2 rotate-180'
              onClick={prevImage}
            >
              <img src={arrow} className='w-4 md:w-6' alt="Previous" />
            </button>

            {/* Slider Text */}
            <h1 className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-5xl'>
              Expertise that Inspires Confidence. Buildings that Instill Pride.
            </h1>

            {/* Right Arrow */}
            <button 
              className='cursor-pointer bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.3)] text-white rounded-full hover:bg-[rgba(255,255,255,0.5)] p-3 md:p-4 border-2'
              onClick={nextImage}
            >
              <img src={arrow} className='w-4 md:w-6' alt="Next" />
            </button>
          </div>

          {/* Subtitle */}
          <h3 className='text-white font-bold text-sm md:text-lg lg:text-xl'>
            Sri Aakruthi Constructions
          </h3>
        </div>

        {/* Scroll Down Button */}
        <div className="mb-6">
          <button className='text-white text-sm md:text-lg rounded-full px-4 py-2 hover:bg-[rgba(255,255,255,0.3)] flex flex-row items-end gap-3'>
            Scroll Down  <img className='w-4 md:w-6' src={downArrow} alt="" />
          </button>
        </div>
      </div>

      {/* Rest of the page */}
      <CommitmentComponent/>
      <Testimonials/>
      <CompanyDetails/>
      <hr className="bg-gray-300" />
      <HomeContact/>
      <Footer/>
    </div>
  );
};

export default Home;
