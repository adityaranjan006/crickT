import React, { useContext,useEffect } from 'react'
import { MyContext } from './MyContext';
const List = (props) => {
  const {setData,data}=useContext(MyContext);
  
  const handleOnClick=(e)=>{
    const button = e.target.closest('button');
    if(button){
      const name=button.textContent;
      
        const stat = (name) => {
          const d = data.find(d => d.label === name);
          return d;
        };

        const metrics = stat(name);

        setData({ name: name, stats: metrics.data });
    }
    else{
      console.log("Not Button found");
    }
  }

  return (
    <div className='relative flex w-full bg-gradient-to-r from-slate-200 via-blue-200 to-purple-400 rounded-md rounded-tr-2xl lg:py-1.5 md:py-3 sm:py-2 xs:py-2 px-2 mt-2 hover:scale-105 transition duration-150' onClick={handleOnClick}>
      <button className='w-full h-full flex flex-start lg:text-xl md:text-md sm:text-md xs:text-md font-mono' >{props.name}</button>
    </div>
  )
}

export default List
