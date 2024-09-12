import React, { useContext,useEffect, useState } from 'react'
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';
import Rcprogress from './Rcprogress';


const List = (props) => {
  const {setData,data}=useContext(MyContext);
  const [currWidth,setWidth]=useState(window.innerWidth)
  const navigate=useNavigate();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Larger screen
  const handleLargeScreenClick=(e)=>{
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

  //Smaller screen
  const handleSmallScreenClick=(e)=>{
    const button = e.target.closest('button');
    if(button){
      const name=button.textContent;
        const stat = (name) => {
          const d = data.find(d => d.label === name);
          return d;
        };

        const metrics = stat(name);
        setData({ name: name, stats: metrics.data });
          const player={
            name:name,
            statistics:metrics.data,
            category:["Bat Avg", "Stk Rate","Runs","50s","100s"],
          }
          navigate("/stats", {state:player});
    }
    else{
      console.log("Not Button found");
    }
  }


  const handleOnClick = (e) => {
    if (currWidth < 640) {
      handleSmallScreenClick(e);
    } else {
      handleLargeScreenClick(e);
    }
  };

  return (
    <div className='relative flex flex-row justify-between w-full bg-gradient-to-r from-slate-200 via-blue-200 to-purple-400 rounded-md rounded-tr-2xl lg:py-1.5 md:py-3 sm:py-2 xs:py-2 px-2 mt-2 hover:scale-105 transition duration-150' onClick={handleOnClick}>
      <button className='w-full h-full flex flex-start lg:text-xl md:text-md sm:text-md xs:text-md font-mono' >{props.name}</button>
      <div className="lg:hidden md:hidden sm:hidden xs:flex"><Rcprogress progress={props.over}/></div>
    </div>
  )
}

export default List
