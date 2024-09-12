import React, { useState } from 'react'
import List from './List'
import MainCard from './MainCard'
import playerData  from '../data/player.js'
import { MyContext } from './MyContext.js'

const Landing = () => {
  const data=playerData.datasets;
  
  //First Player data in data[0] for setting default Name of Card
  const defaultData={
    name:data[0].label,
    stats:data[0].data
  }

  const [currData,setData]=useState(defaultData);
  return (
        <MyContext.Provider value={{currData,setData,data}}>
          <div className="relative flex xs:justify-center top-16">
            <div className=" flex-col lg:w-1/3 md:w-1/3 sm:1/3 xs:w-2/3 p-1 ml-2 gap-1">
            {data.map((player,index)=>{
              return(
                <List key={index} name={player.label} over={player.data[5]}/>
              )
            })}
            </div>
            <div className="flex w-2/3 justify-center mr-2 p-2 mt-2 h-auto lg:flex md:flex sm:flex xs:hidden">
              <MainCard/>
            </div>
          </div>
        </MyContext.Provider>
  )
}

export default Landing
