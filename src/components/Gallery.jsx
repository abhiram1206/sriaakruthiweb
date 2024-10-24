import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import arrow from '../assets/arrow.png';
import img1 from '../assets/Services01.png';
import img2 from '../assets/Services02.png';
import img3 from '../assets/Services03.png';
import img4 from '../assets/Services04.png';

const Gallery = () => {
  const allImages = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img1, alt: "Image 5" },
    { src: img2, alt: "Image 6" },
    { src: img3, alt: "Image 7" },
    { src: img4, alt: "Image 8" },
    { src: img1, alt: "Image 9" },
    { src: img2, alt: "Image 10" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlideDirection('slide-left');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlideDirection('slide-right');
      setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getCurrentImages = () => {
    return [
      allImages[currentIndex % allImages.length],
      allImages[(currentIndex + 1) % allImages.length],
      allImages[(currentIndex + 2) % allImages.length],
      allImages[(currentIndex + 3) % allImages.length],
      allImages[(currentIndex + 4) % allImages.length],
      allImages[(currentIndex + 5) % allImages.length],
      allImages[(currentIndex + 6) % allImages.length],
    ];
  };

  const ImageBlock = ({ image, className }) => (
    <div className={`relative group ${className}`}>
      <div className="w-full h-full p-2 rounded-lg">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-2 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center rounded-b-lg w-full">
            <h1 className="text-xs sm:text-sm md:text-base font-bold">Project Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
  

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex flex-col justify-between items-center">
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-end">
          <Navbar />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center gap-2 sm:gap-3">
          <h3 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            Our Gallery
          </h3>
          <div className="flex justify-center items-center w-full gap-1 flex-wrap">
            <h1 className='text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl font-semibold'>
              Home / <span className='text-red-600'>Gallery</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery Grid Layout */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden ${slideDirection}`}>
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-1 gap-4 transition-transform duration-500 ease-in-out">
            {getCurrentImages().map((image, index) => (
              <ImageBlock 
                key={index} 
                image={image} 
                className="h-60 sm:h-72"
              />
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 gap-4 transition-transform duration-500 ease-in-out">
            <ImageBlock image={getCurrentImages()[0]} className="col-span-2 h-72" />
            {getCurrentImages().slice(1).map((image, index) => (
              <ImageBlock 
                key={index} 
                image={image} 
                className="h-60"
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4 transition-transform duration-500 ease-in-out">
            <ImageBlock image={getCurrentImages()[0]} className="col-span-2 row-span-2 h-[480px]" />
            <ImageBlock image={getCurrentImages()[1]} className="col-span-2 row-span-1 h-60" />
            <ImageBlock image={getCurrentImages()[2]} className="col-span-1 row-span-1 h-60" />
            <ImageBlock image={getCurrentImages()[3]} className="col-span-1 row-span-1 h-60" />
            <ImageBlock image={getCurrentImages()[4]} className="col-span-1 row-span-1 h-60" />
            <ImageBlock image={getCurrentImages()[5]} className="col-span-1 row-span-1 h-60" />
            <ImageBlock image={getCurrentImages()[6]} className="col-span-2 row-span-1 h-60" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center my-6 sm:my-8 md:my-10 w-full">
        <button 
          onClick={prevSlide} 
          disabled={isAnimating} 
          className='cursor-pointer text-gray-800 rounded-full p-3 sm:p-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100/10 transition-colors'
        >
          <img src={arrow} width={16} className="rotate-180 sm:w-5 md:w-6" alt="Previous" />
        </button>
        <button 
          onClick={nextSlide} 
          disabled={isAnimating} 
          className='cursor-pointer text-gray-800 rounded-full p-3 sm:p-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100/10 transition-colors'
        >
          <img src={arrow} width={16} className="sm:w-5 md:w-6" alt="Next" />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;