import React from 'react'
import Navbar from './Navbar'
import header from '../assets/header.png'
import Footer from './Footer'

const Contactus = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="relative h-72 md:h-80 lg:h-96 bg-cover bg-center flex flex-col justify-between items-center" 
        style={{ backgroundImage: `url(${header})`, transition: 'background-image 0.5s ease-in-out' }}>
        
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-end">
          <Navbar />
        </div>

        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center gap-2">
          <div className="flex justify-center items-center w-full gap-1 flex-wrap">
            <h1 className='text-white text-base md:text-lg lg:text-xl max-w-5xl font-semibold'>
              Home / <span className='text-red-600'>Contact</span>
            </h1>
          </div>
          <h3 className='text-white font-bold text-2xl md:text-4xl lg:text-6xl'>
            Contact Us
          </h3>
        </div>
      </div>

      <div className="flex flex-col items-center flex-grow ">
        <div className="text-white text-xl md:text-2xl lg:text-3xl flex flex-col items-center w-full p-8 md:p-12 lg:p-20">
          <h1 className='p-2 md:p-3'>SEND US A MESSAGE</h1>
          <hr className='w-32 md:w-48 lg:w-64'/>
        </div>

        <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-0 lg:w-1/2 gap-4 md:gap-5 max-w-2xl mb-12">
          <div className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-5">
            <input 
              type="text" 
              placeholder='Full Name' 
              className='outline-0 border-0 p-3 w-full placeholder:text-black rounded-lg bg-white'
            />
            <input 
              type="text" 
              placeholder='Email Address' 
              className='outline-0 border-0 p-3 w-full placeholder:text-black rounded-lg bg-white'
            />
          </div>
          <textarea 
            placeholder="Leave your Message" 
            className='outline-0 border-0 w-full p-3 placeholder:text-black rounded-lg h-40 md:h-60 bg-white resize-none' 
          />
          <button className='text-white bg-red-700 hover:bg-red-800 transition-colors w-full p-3 rounded-lg text-lg'>
            Send
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contactus