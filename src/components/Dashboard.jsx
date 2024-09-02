import React from 'react'
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    //Recieving data from Stacked Bar Chart using useLocation Hook
    const location=useLocation();
    const data=location.state;
    //Destructuring Object data 
    const {name,statistics,category}=data;
  return (
    <div className='relative flex flex-col justify-center top-20 my-auto mx-auto text-white'>
      <p>Name: {name}</p>
      {statistics.map((e,id)=>{
        return(<p key={id}>{e}</p>)
      })}
      {category.map((e,id)=>{
        return(<p key={id}>{e}</p>)
      })}
    </div>
  )
}

export default Dashboard
