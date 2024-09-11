import React from 'react'
import { useLocation } from "react-router-dom";
import DashCard from './DashCard';

const Dashboard = () => {
    //Recieving data from Stacked Bar Chart using useLocation Hook
    const location=useLocation();
    const data=location.state;
    //Destructuring Object data 
    const {name,statistics,category}=data;

    const TopPlayers=[
        {
            label: 'S.Tendulkar',
            data: [1080,736,2000,500,400],
        },
        {
            label: 'Virat',
            data: [980,806,1200,600,500],
        },
        {
            label: 'MS Dhoni',
            data: [780,800,1000,400,300],
        },
    ]


  return (
    <div className='relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-5 top-20 mx-4'>
      {category.map((e,id)=>{
        return(<DashCard name={name} val={e} key={id} stat={statistics[id]} top1={TopPlayers[0].data[id]} top2={TopPlayers[1].data[id]} top3={TopPlayers[2].data[id]} />)
      })}
    </div>
  )
}

export default Dashboard
