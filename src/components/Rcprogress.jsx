import React, { useEffect, useState } from 'react'
import { Circle} from 'rc-progress';
import CountUp from 'react-countup';

const Rcprogress = (props) => {
  return (
    <div >
        <h1 className='flex relative justify-center lg:text-4xl md:text-2xl sm:text-lg lg:flex md:flex sm:flex xs:hidden text-white font-extrabold'>T-20 Rating</h1>
        <div className='flex justify-around lg:mt-2 lg:p-2 md:mt-2 md:p-2 sm:mt-1 sm:p-1'>
          <div className='flex justify-center'>
          <Circle className='arc-progress progress-circle'
          percent={props.progress} 
          strokeWidth={12} 
          trailWidth={10}
          trailColor="#e0e0e0"
          strokeLinecap="round"
          gapDegree={100}
          gapPosition='bottom'
          strokeColor={{ '0%': '#ff5722', '100%': '#4caf50' }}
          /> 
          <CountUp className='absolute lg:top-40 md:top-40 sm:top-40 xs:absolute xs:top-4 lg:text-6xl md:text-4xl sm:text-3xl xs:text-xs lg:font-extrabold md:font-extrabold sm:font-extrabold xs:font-semibold text-slate-200' start={1} end={[props.progress]} delay={0}/>
        </div>
      </div>
    </div>
    
    
  )
}

export default Rcprogress
