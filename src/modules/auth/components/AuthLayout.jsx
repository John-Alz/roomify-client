import { CircleArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const AuthLayout = ({ children }) => {
    return (
        <div className='w-full flex'>
            <div className='relative'>
                <Link to={"/"}> <CircleArrowLeft size={35} className='absolute top-4 left-4' /></Link>
            </div>
            <div className='w-[50%] flex justify-center items-center'>
                {children}
            </div>
            <div className='w-[50%] h-screen'>
                <img className='rounded-3xl p-3 h-screen object-cover' src={'/public/room-3.webp'} alt='img-art' />
            </div>
        </div>
    )
}