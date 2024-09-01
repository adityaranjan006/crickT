import React from 'react'
import List from './List'
import MainCard from './MainCard'

const Landing = () => {
  return (
    <>    
          <div className="relative flex top-16">
            <div className=" flex-col w-1/3 p-2 m-2 gap-1">
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
            </div>
            <div className="flex w-2/3 justify-center m-2 p-2">
              <MainCard/>
            </div>
          </div>
    </>
  )
}

export default Landing
