import React from 'react'
import { AuthLayout } from './AuthLayout'
import { data, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { api } from '../../../shared/api/apiClient'
import { authServices } from '../services/authServices'

export const SignUpForm = () => {

    const { register, reset, handleSubmit, watch,
        formState: { errors }
    } = useForm();

    const userSignUp = async (user) => {
        let response = await authServices.register(user)
        console.log(response);
        if (response.status === 201) {
            toast.success(`Usuario creado`)
        } else {
            toast.error('error');
        }
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        let userCreated = {
            username: data.name,
            email: data.email,
            password: data.password,
            roleRequest: {
                roles: ["CUSTOMER"]
            }
        }

        userSignUp(userCreated)

        reset();

    })

    return (
        <AuthLayout>
            <ToastContainer />
            <form className='w-[470px]' onSubmit={onSubmit}>
                <div className='flex flex-col gap-6 pb-8'>
                    <h2 className='text-4xl font-bold'>Crea tu cuenta</h2>
                    <p className='text-xl'>Crea tu cuenta y empieza a gestionar tus reservas de manera rápida y sencilla.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Nombre</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='text' name='name' placeholder='Escribe tu nombre...'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                },
                                minLength: {
                                    value: 4,
                                    message: "El nombre debe tener minimo 4 caracteres"
                                }
                            })}
                        />
                        {errors.name && <span className='text-red-400 text-xs'>{errors.name.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Correo electrónico</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='text' name='email' placeholder='ejemplo@correo.com'
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
                        {errors.email && <span className='text-red-400 text-xs'>{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='password' placeholder='mínimo 6 caracteres'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "La contraseña es requerida"
                                },
                                minLength: {
                                    value: 6,
                                    message: "La contraseña debe tener minimo 6 caracteres"
                                }
                            })}
                        />
                        {errors.password && <span className='text-red-400 text-xs'>{errors.password.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-1'>Confirmar contraseña</label>
                        <input className='border border-gray-custom py-2 px-3 rounded-lg' type='password' name='confirmPassword' placeholder='mínimo 6 caracteres'
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Debes confirmar la contraseña"
                                },
                                validate: value => value === watch("password") || "Las contraseñas no coinciden"
                            })}
                        />
                        {errors.confirmPassword && <span className='text-red-400 text-xs'>{errors.confirmPassword.message}</span>}
                    </div>
                </div>
                <button className='w-full py-2 px-3 rounded-lg text-xl bg-primary cursor-pointer my-4 text-white'>Registrate</button>


                <div className='flex mt-6 justify-center'>
                    <p className=' text-gray-custom'>Ya tienes una cuenta?</p>
                    <Link to={"/auth/login"}><span className='pl-1 text-back font-semibold cursor-pointer underline'>Inicar sesion</span></Link>
                </div>

            </form>
        </AuthLayout>
    )
}
