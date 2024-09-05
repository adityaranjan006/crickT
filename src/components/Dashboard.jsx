import React from 'react'
import { useLocation } from "react-router-dom";
import DashCard from './DashCard';

const Dashboard = () => {
    //Recieving data from Stacked Bar Chart using useLocation Hook
    const location=useLocation();
    const data=location.state;
    //Destructuring Object data 
    const {name,statistics,category}=data;
  return (
    <div className='relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-5 top-20 mx-4'>
      {category.map((e,id)=>{
        return(<DashCard name={e} key={id} stat={statistics[id]} />)
      })}
    </div>
  )
}

export default Dashboard
