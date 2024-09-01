import React from 'react'
import Rcprogress from './Rcprogress'
import StackedBar from './StackedBar'

const MainCard = () => {
  return (
    <div className='fixed flex flex-col justify-center w-1/2 p-3 rounded-xl rounded-tr-3xl bg-gradient-to-tr from-slate-900 via-blue-950 to-purple-900'>
      <div className="flex flex-col pt-2 pb-2 shadow-xl">
        <ul className='flex flex-1 gap-2 justify-around text-white font-serif lg:font-semibold md:font-semibold sm:font-medium lg:text-sm md:text-sm sm:text-sm'>
            <li>Name: M S Dhoni</li>
            <li>Age: 26</li>
            <li>T20 Team: CSK</li>
        </ul>   
      </div>
      <div className="relative flex justify-center ">
        <Rcprogress/>
      </div>
      <div className="flex justify-start chartSize">
        <StackedBar/>
      </div>
    </div>
  )
}

export default MainCard
