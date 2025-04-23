
import React from 'react'
import useRoomStore from '../store/useRoomStore'


export const FormBookingRoomDetail = () => {

    const roomSelected = useRoomStore(state => state.roomSelected)

    return (
        <div className='border-2 border-gray-200 rounded-lg p-4' >
            <h2 className='text-xl font-bold mb-5'>Reserva tu habitacion.</h2>
            <form>
                <div className='flex flex-col gap-1'>
                    <label>check-in</label>
                    <input type='date' name="checkin" className='bg-gray-200 py-2 px-4 rounded-lg' />
                </div>
                <div className='flex flex-col gap-1 mt-5'>
                    <label> check-out</label>
                    <input type='date' name="checkout" className='bg-gray-200 py-2 px-4 rounded-lg' />
                </div>
                <div className='w-full flex flex-col mt-5 gap-1'>
                    <label>Huespedes</label>
                    <select className='bg-gray-200 py-2 px-4 rounded-lg'>
                        <option>1 huesped</option>
                        <option>2 huesped</option>
                        <option>3 huesped</option>
                        <option>4 huesped</option>
                        <option>5 huesped</option>
                    </select>
                </div>
            </form>
            <div className='mt-5'>
                <h3>Precio</h3>
                <div className='bg-gray-200 p-4 rounded-lg'>
                    <p className='flex justify-between'>1 noche <span>${roomSelected?.room_price}</span></p>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <h3>Precio total:</h3>
                <p>${roomSelected?.room_price}</p>
            </div>
            <div className='mt-5'>
                <button className='w-full py-2 px-4 bg-primary rounded-lg text-white cursor-pointer'>Reservar ahora</button>
            </div>
        </div>
    )
}
