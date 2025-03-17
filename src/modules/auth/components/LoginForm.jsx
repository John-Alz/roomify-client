import React from 'react'
import { AuthLayout } from './AuthLayout'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
    return (
        <AuthLayout>
            <form className='w-[470px]'>
                <div className='flex flex-col gap-6 pb-8'>
                    <h2 className='text-4xl font-bold'>Bienvenido de nuevo 👋🏼</h2>
                    <p className='text-xl'>Hoy es un nuevo día. Tu próxima estancia te espera.
                        Inicia sesión para gestionar tus reservas.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Correo electrónico</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='text' name='email' placeholder='ejemplo@correo.com' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='password' placeholder='mínimo 8 caracteres' />
                    </div>
                </div>
                <div className='flex justify-end my-2'><span>¿Olvidaste tu contraseña?</span></div>
                <button className='w-full py-2 px-3 rounded-lg text-xl bg-primary cursor-pointer'>Iniciar sesión</button>


                <div className='flex mt-6 justify-center'>
                    <p className=' text-gray-custom'>No tienes una cuenta?</p>
                    <Link to={"/auth/sign-up"}><span className='pl-1 text-back font-semibold cursor-pointer underline'>Resgistrate</span></Link>
                </div>
            </form>
        </AuthLayout>
    )
}
