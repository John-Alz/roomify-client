import React from 'react'
import { Footer, Navbar } from '../../core/components'
import { RoomDetail } from '../components/RoomDetail'
import { FormBookingRoomDetail } from '../components/FormBookingRoomDetail'

export const RoomDetailPage = () => {

    const colorsHeader = {
        textColor: "text-black",
        borderColor: "hover:border-black",
        bgOpacity: "bg-black/50",
    }

    return (
        <div>
            <Navbar colors={colorsHeader} />
            <div className='w-[86%] m-auto flex pt-20'>
                <div className='w-[68%]'>
                    <RoomDetail />
                </div>
                <div className='w-[38%] pl-10 py-4 '>
                    <FormBookingRoomDetail />
                </div>
            </div>
            <Footer />
        </div>
    )
}
