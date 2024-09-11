import React, { useContext } from 'react'
import Rcprogress from './Rcprogress'
import StackedBar from './StackedBar'
import { MyContext } from './MyContext'

const MainCard = () => {
  const {currData}=useContext(MyContext);
  return (
    <div className='fixed flex flex-col justify-center w-1/2 lg:px-4 md:px-2 sm:px-1 xs:px-1 lg:py-3 md:py-2 sm:py-1 rounded-xl rounded-tr-3xl bg-gradient-to-tr from-slate-900 via-blue-950 to-purple-900'>
      <div className="flex flex-col pt-2 pb-2 shadow-xl">
        <ul className='flex flex-1 gap-2 justify-around text-white font-serif lg:font-semibold md:font-semibold sm:font-medium xs:text-sm lg:text-sm md:text-sm sm:text-sm'>
            <li>Name: {currData.name}</li>
            <li>Age: cc</li>
            <li>T20 Team: xxxx</li>
        </ul>   
      </div>
      <div className="relative flex justify-center ">
        <Rcprogress progress={currData.stats[5]}/>
      </div>
      <div className="flex justify-start chartSize">
        <StackedBar/>
      </div>
    </div>
  )
}

export default MainCard
