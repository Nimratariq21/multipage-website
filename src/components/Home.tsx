import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div id='hero' className='min-h-screen'>
      <Navbar />
      <div className='container grid lg:grid-cols-1 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-self-stretch items-baseline'>
          <div>
            <p>Explore</p>
            <p>My</p>
            <p>Page</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Home
