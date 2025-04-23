import React from 'react'

export const AuthLayout = ({ children }) => {
    return (
        <div className='w-full flex'>
            <div className='w-[50%] flex justify-center items-center'>
                {children}
            </div>
            <div className='w-[50%] h-screen'>
                <img className='rounded-3xl p-3 h-screen object-cover' src={'/public/room-3.webp'} alt='img-art' />
            </div>
        </div>
    )
}