import React from 'react';
import gallery from '../assets/Visitourgallery.png';

const CompanyDetails = () => {
  return (
    <div>
      {/* Gallery Image */}
      <img src={gallery} alt="Visit our gallery" className="w-full" />

      {/* Company Details Section */}
      <div className="flex flex-col items-center text-white my-10 md:my-20 gap-10 md:gap-20 px-4">
        {/* Main Heading */}
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl sm:max-w-3xl md:max-w-4xl text-center font-semibold'>
          Build better. On time, On Budget, We deliver
        </h1>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-4/5 lg:w-1/2 gap-8 sm:gap-0">
          {/* Years Experience */}
          <div className="flex flex-col items-center gap-2 m-4">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 font-semibold'>13+</h1>
            <p className='text-lg sm:text-xl'>Years Experience</p>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col items-center gap-2 m-4">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700 font-semibold'>5</h1>
            <p className='text-lg sm:text-xl'>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
