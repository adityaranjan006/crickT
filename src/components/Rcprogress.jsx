import React, { useEffect, useState } from 'react'
import { Circle} from 'rc-progress';
import CountUp from 'react-countup';

const Rcprogress = () => {
  const overAllRating=88;
  const [percentage,setPercentage]=useState(81);
  return (
    <div >
        <h1 className='flex relative justify-center lg:text-4xl md:text-2xl sm:text-lg text-white font-extrabold'>T-20 Rating</h1>
        <div className='flex justify-around mt-2 p-2'>
          <div className='flex justify-center'>
          <Circle className='arc-progress progress-circle'
          percent={percentage} 
          strokeWidth={9} 
          trailWidth={9}
          trailColor="#d688d6"
          strokeLinecap="round"
          gapDegree={100}
          gapPosition='bottom'
          strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
          /> 
          <CountUp className='absolute top-40 text-6xl font-extrabold text-slate-200' start={1} end={[percentage]} delay={0}/>
        </div>
      </div>
    </div>
    
    
  )
}

export default Rcprogress
