import React from 'react'

export const AuthLayout = ({ children }) => {
    return (
        <div className='w-full flex'>
            <div className='w-[50%] flex justify-center items-center'>
                {children}
            </div>
            <div className='w-[50%] h-screen'>
                <img className='rounded-3xl p-3' src={'/public/room-1.jpeg'} alt='img-art' />
            </div>
        </div>
    )
}
