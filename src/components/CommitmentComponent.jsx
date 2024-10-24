import React from 'react';
import construction from '../assets/construction-multistorey-building-form-city 2.png';

const CommitmentComponent = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 pl-4 lg:pl-14'>
      <div className="text-white flex flex-col max-w-full lg:max-w-2xl my-10 lg:my-40 gap-4">
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight'>
          We Are Committed To Build Better
        </h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg font-thin leading-relaxed'>
          Welcome to Aakruthi Constructions, where innovation meets excellence. As a premier construction company, we specialise in delivering high-quality residential, commercial, and industrial projects that stand the test of time. Our dedication to quality, integrity, and customer satisfaction has made us a trusted name in the construction industry. We are committed to delivering exceptional construction services that exceed expectations through innovative solutions, sustainable practices, and a client-centric approach.
        </p>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={construction} alt="Construction" className='w-full h-auto max-w-sm sm:max-w-md lg:max-w-full object-contain' />
      </div>
    </div>
  );
};

export default CommitmentComponent;
