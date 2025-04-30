import { Bell } from 'lucide-react'
import { Search } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export const HeaderDashboard = () => {
    return (
        <header className='bg-white w-full flex justify-between p-2'>
            <div className='flex items-center relative'>
                <input type='text' placeholder='Busca aqui' className='bg-[#F2F2F2] py-2 px-2 rounded-lg w-100' />
                <Search color='#737373' className='absolute right-1' />
            </div>
            <div className='flex items-center gap-3'>
                <Bell className='mr-8' />
                <img src='../../../../public/img_profile.png' className='w-[45px]' />
                <div>
                    <div className='flex'>
                        <p className='font-bold'>Sophie Reynolds</p>
                        <ChevronDown />
                    </div>
                    <p>Administrador</p>
                </div>
            </div>
        </header>
    )
}
