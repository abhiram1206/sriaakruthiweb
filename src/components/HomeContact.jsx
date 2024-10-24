import React from 'react'

const HomeContact = () => {
  return (
    <div className='flex flex-col items-center text-white my-8 md:my-20 px-4 md:px-0 gap-6 md:gap-10'>
        <div className="flex flex-col gap-2 items-center w-full">
            <h1 className='text-3xl md:text-4xl lg:text-5xl'>Contact</h1>
            <div className='w-1/2 md:w-1/12 h-1 md:h-[4px] bg-red-700 rounded-lg'></div>
        </div>
      <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 gap-6 md:gap-10 my-4 md:m-10">
        <input 
          className='p-2 md:p-3 rounded-md placeholder:text-black text-black outline-0 w-full' 
          type="text" 
          placeholder='Enter your name'
        />
        <input 
          className='p-2 md:p-3 rounded-md placeholder:text-black text-black outline-0 w-full' 
          type="text" 
          placeholder='Email address'
        />
        <textarea 
          className='p-2 md:p-3 h-32 md:h-40 rounded-md placeholder:text-black text-black outline-0 w-full resize-none' 
          placeholder='Message'
        />
        <button className='p-3 md:p-4 bg-red-700 rounded-lg hover:bg-red-800 transition-colors w-full sm:w-auto'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default HomeContact