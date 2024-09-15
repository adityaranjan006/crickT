import React, { useContext } from 'react'
import Rcprogress from './Rcprogress'
import StackedBar from './StackedBar'
import { MyContext } from './MyContext'

const MainCard = () => {
  const {currData}=useContext(MyContext);
  return (
    <div className='relative flex flex-col justify-start lg:w-1/2 md:w-1/2 sm:w-full lg:px-2 md:px-2 sm:px-3 xs:px-3 lg:py-1 md:py-2 sm:py-1 rounded-xl rounded-tr-3xl bg-gradient-to-tr from-black via-black to-gray-950 group'>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur-md rounded-xl rounded-tr-3xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-200" style={{ zIndex: -1 }}></div>
      <div className="relative flex flex-col lg:pt-2 lg:pb-2 md:pt-1 md:pb-1 sm:pt-0 sm:pb-0 shadow-xl">
        <ul className='relative flex justify-around text-white font-serif lg:font-semibold md:font-semibold sm:font-medium xs:text-sm lg:text-sm md:text-sm sm:text-sm'>
          <li>Name: {currData.name}</li>
        </ul>   
      </div>
      <div className="relative flex justify-center ">
        <Rcprogress progress={currData.stats[5]}/>
      </div>
      <div className="relative flex justify-start chartSize">
        <StackedBar/>
      </div>
    </div>
  )
}

export default MainCard
