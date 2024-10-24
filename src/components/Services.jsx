import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../assets/Services01.png'
import img2 from '../assets/Services02.png'
import img3 from '../assets/Services03.png'
import img4 from '../assets/Services04.png'

const Services = () => {
  return (
    <div className=''>
      <div className="relative h-96 bg-cover bg-center flex flex-col justify-between items-center" >
        
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-end">
          <Navbar />
        </div>

        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center gap-3">
          <h3 className='text-white font-bold text-3xl md:text-6xl'>
            Our Services
          </h3>
          <div className="flex justify-center items-center w-full gap-1 flex-wrap">
            <h1 className='text-white text-lg md:text-xl max-w-5xl font-semibold'>
              Home / <span className='text-red-600'>Services</span>
            </h1>
          </div>
        </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40 p-6 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full relative group">
            <img src={img1} alt="Normal Image" className="w-full h-full object-cover group-hover:hidden" />
            <img src={img4} alt="Hovered Image" className="w-full h-full object-contain hidden group-hover:block group-hover:delay-2000 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/70 to-transparent text-white shadow-lg text-center opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-2000 transition-all duration-500">
              <h1 className="text-2xl font-bold">Explore More</h1>
            </div>
          </div>
          <p className='text-white text-lg'>Design-Build Services</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full relative group">
            <img src={img2} alt="Normal Image" className="w-full h-full object-cover group-hover:hidden" />
            <img src={img3} alt="Hovered Image" className="w-full h-full object-contain hidden group-hover:block group-hover:delay-2000 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/70 to-transparent text-white shadow-lg text-center opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-2000 transition-all duration-500">
              <h1 className="text-2xl font-bold">Explore More</h1>
            </div>

          </div>
          <p className='text-white text-lg'>Residential Construction</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full relative group">
            <img src={img3} alt="Normal Image" className="w-full h-full object-cover group-hover:hidden" />
            <img src={img2} alt="Hovered Image" className="w-full h-full object-contain hidden group-hover:block group-hover:delay-2000 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/70 to-transparent text-white shadow-lg text-center opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-2000 transition-all duration-500">
              <h1 className="text-2xl font-bold">Explore More</h1>
            </div>
          </div>
          <p className='text-white text-lg'>Commercial Construction</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full relative group">
            <img src={img4} alt="Normal Image" className="w-full h-full object-cover group-hover:hidden" />
            <img src={img1} alt="Hovered Image" className="w-full h-full object-contain hidden group-hover:block group-hover:delay-2000 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/70 to-transparent text-white shadow-lg text-center opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-2000 transition-all duration-500">
              <h1 className="text-2xl font-bold">Explore More</h1>
            </div>
          </div>
          <p className='text-white text-lg'>Industrial Construction</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Services
