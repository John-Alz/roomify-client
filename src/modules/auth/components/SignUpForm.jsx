import React from 'react'
import { AuthLayout } from './AuthLayout'
import { Link } from 'react-router-dom'

export const SignUpForm = () => {
    return (
        <AuthLayout>
            <form className='w-[470px]'>
                <div className='flex flex-col gap-6 pb-8'>
                    <h2 className='text-4xl font-bold'>Crea tu cuenta</h2>
                    <p className='text-xl'>Crea tu cuenta y empieza a gestionar tus reservas de manera rápida y sencilla.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Nombre</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='text' name='name' placeholder='Escribe tu nombre...' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Correo electrónico</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='text' name='email' placeholder='ejemplo@correo.com' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='password' placeholder='mínimo 8 caracteres' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Confirmar contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='password' placeholder='mínimo 8 caracteres' />
                    </div>
                </div>
                <button className='w-full py-2 px-3 rounded-lg text-xl bg-primary cursor-pointer my-4'>Registrate</button>


                <div className='flex mt-6 justify-center'>
                    <p className=' text-gray-custom'>Ya tienes una cuenta?</p>
                    <Link to={"/auth/login"}><span className='pl-1 text-back font-semibold cursor-pointer underline'>Inicar sesion</span></Link>
                </div>

            </form>
        </AuthLayout>
    )
}
