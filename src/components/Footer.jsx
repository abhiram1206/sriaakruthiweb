import React from 'react'
import mail from '../assets/mail.png'

const Footer = () => {
  return (
    <div className='text-white px-4 py-10 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-around gap-10'>
      {/* Contact Section */}
      <div className="flex flex-col items-start md:items-center lg:items-start max-w-xs gap-4">
        <div className="flex flex-col gap-1 items-start md:items-center lg:items-start">
            <h1 className='text-lg sm:text-xl md:text-2xl'>Contact</h1>
            <div className='w-3/4 h-[4px] bg-red-700 rounded-lg'></div>
        </div>
        <div className="flex flex-col md:items-center lg:items-start">
            <p className='text-sm sm:text-base md:text-lg text-center lg:text-start'>
              At Aakruthi Constructions, we believe in transforming visions into reality. Our journey began with a simple yet profound mission: to build structures that inspire and endure.
            </p>
        </div>
      </div>

      {/* Head Office Section */}
      <div className="flex flex-col items-start max-w-xs gap-4 md:items-center lg:items-start">
        <div className="flex flex-col gap-1 items-start md:items-center lg:items-start">
            <h1 className='text-lg sm:text-xl md:text-2xl'>Head Office</h1>
            <div className='w-3/4 h-[4px] bg-red-700 rounded-lg'></div>
        </div>
        <div className="flex flex-col text-center lg:text-start">
            <p className='text-sm sm:text-base md:text-lg'>9-11/5/3 SWARNA BHARATHI NAGAR, Pedda Rushikonda, Visakhapatnam, Andhra Pradesh 530045</p>
            <p className='text-sm sm:text-base md:text-lg'>Phone: 0891 677 0264</p>
            <p className='text-sm sm:text-base md:text-lg'>Email: aakruthiconstructions@gmail.com</p>
            <p className='text-sm sm:text-base md:text-lg'>Office Hours: 9am to 5pm</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-start max-w-xs gap-4 md:items-center lg:items-start">
        <div className="flex flex-col gap-1 items-start md:items-center lg:items-start">
            <h1 className='text-lg sm:text-xl md:text-2xl'>Newsletter</h1>
            <div className='w-3/4 h-[4px] bg-red-700 rounded-lg'></div>
        </div>
        <div className="flex flex-col gap-5 ">
            <p className='text-sm sm:text-base md:text-lg'>Subscribe to our newsletter and always be updated with us.</p>
            <div className="flex flex-row bg-white items-center px-2 text-black rounded-lg">
                <input type="text" className='w-full p-2 outline-0 text-sm sm:text-base md:text-lg' placeholder='Email Address'/>
                <img src={mail} width={20} alt="Email Icon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
