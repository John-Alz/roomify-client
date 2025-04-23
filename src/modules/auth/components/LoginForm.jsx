import React from 'react'
import { AuthLayout } from './AuthLayout'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { authServices } from '../services/authServices'

export const LoginForm = () => {


    const { register, reset, handleSubmit,
        formState: { errors }
    } = useForm();

    console.log(errors);

    const userLogin = async (user) => {
        try {
            let response = await authServices.login(user, { withCredentials: true },)
            console.log(response);

            if (response.status === 200) toast.success(`Bienvenido`);
        } catch (error) {
            if (error) toast.error(`Credenciales invalidas`)
        }

    }

    const onSubmit = handleSubmit((data) => {
        console.log(data)

        //Peticion a http
        userLogin(data);

        reset();
    })


    return (
        <AuthLayout>
            <ToastContainer />
            <form className='w-[470px]' onSubmit={onSubmit}>
                <div className='flex flex-col gap-6 pb-8'>
                    <h2 className='text-4xl font-bold'>Bienvenido de nuevo</h2>
                    <p className='text-xl'>Hoy es un nuevo día. Tu próxima estancia te espera.
                        Inicia sesión para gestionar tus reservas.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Correo electrónico</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='email' name='email' placeholder='ejemplo@correo.com'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Correo es requerido '
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Correo no es valido'
                                }
                            })}
                        />
                        {
                            errors.email && <span className='text-red-400 text-xs'>{errors.email.message}</span>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='password' placeholder='mínimo 8 caracteres'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Contraseña es requerida'
                                },
                                // minLength: {
                                //     value: 6,
                                //     message: 'La contraseña debe tener minimo 6 caracteres'
                                // }
                            })}
                        />
                        {
                            errors.password && <span className='text-red-400 text-xs'>{errors.password.message}</span>
                        }
                    </div>
                </div>
                <Link to={'/auth/form-recovery'}>
                    <div className='flex justify-end my-2'><span>¿Olvidaste tu contraseña?</span></div>
                </Link>
                <button className='w-full py-2 px-3 rounded-lg text-xl bg-primary text-white cursor-pointer'>Iniciar sesión</button>


                <div className='flex mt-6 justify-center'>
                    <p className=' text-gray-custom'>No tienes una cuenta?</p>
                    <Link to={"/auth/sign-up"}><span className='pl-1 text-back font-semibold cursor-pointer underline'>Resgistrate</span></Link>
                </div>
            </form>
        </AuthLayout>
    )
}