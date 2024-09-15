import React from 'react'

const Header = () => {
  return (
      <div className='absolute text-center min-w-full mx-auto justify-around from-black via-black to-gray-950 text-white p-3 shadow-lg'>
        <img src="/cricket.png" alt="Ball" className=' absolute w-10 h-10' />
        <div className="font-extrabold text-3xl bg-gradient-to-tr from-blue-500 via bg-purple-600 to-pink-400 inline-block text-transparent bg-clip-text">CricNalyze</div>
    </div>
  )
}

export default Header
