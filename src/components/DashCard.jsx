import React from 'react'
import CountUp from 'react-countup';

const DashCard = (props) => {
  return (
    <div className='flex flex-col rounded-lg transition duration-150 p-2 bg-gradient-to-r from-slate-200 via-blue-200 to-purple-400 justify-end hover:scale-105 lg:gap-10 md:gap-8 sm:gap-8 rounded-tr-2xl'>
        <div className="flex- justify-start">
            <h2 className='text-2xl font-extrabold'>{props.name}</h2>
        </div>
        <div className="flex justify-start">
            <h2 className='lg:text-4xl md:text-4xl sm:text-3xl font-mono-800 font-extrabold'>
            <CountUp start={0} end={props.stat} delay={1}/>
            </h2>     
        </div>
    </div>
  )
}

export default DashCard
