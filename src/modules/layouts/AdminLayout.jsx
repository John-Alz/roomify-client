import React from 'react'
import { SideBar } from '../core/components/SideBar'
import { HeaderDashboard } from '../core/components/HeaderDashboard'
import { Outlet } from 'react-router-dom'
import { Footer } from '../core/components'

export const AdminLayout = () => {
    return (
        <div className='bg-admin-bg'>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <div className='w-full'>
                    <HeaderDashboard />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
