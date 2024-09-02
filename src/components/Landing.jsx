import React from 'react'
import List from './List'
import MainCard from './MainCard'
import playerData  from '../data/player.js'

const Landing = () => {
  const data=playerData.datasets;
  // console.log(data)
  return (
    <>    
          <div className="relative flex top-16">
            <div className=" flex-col w-1/3 p-2 m-2 gap-1">
            {data.map((player,index)=>{
              return(
                <List key={index} name={player.label}/>
              )
            })}
            </div>
            <div className="flex w-2/3 justify-center m-2 p-2">
              <MainCard/>
            </div>
          </div>
    </>
  )
}

export default Landing
