import React from 'react'

const Header = () => {
  return (
      <div className='absolute text-center min-w-full mx-auto justify-around bg-slate-900 text-white p-3 shadow-lg'>
        <img src="/cricket.png" alt="Ball" className=' absolute w-10 h-10' />
        <div className="font-extrabold text-3xl">CricNalyze</div>
    </div>
  )
}

export default Header
