import React from 'react'

export const Hero = ({ title, subtitle }) => {
  return (
    <div className="bg-[url('/public/heroV2.jpeg')] bg-no-repeat bg-cover h-[520px] flex justify-center ">
      <div className='self-center text-center text-white'>
        <h2 className='text-7xl font-bold'>{title}</h2>
        <p className='text-lg'>{subtitle}</p>
      </div>
    </div>
  )
}
