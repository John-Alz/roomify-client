import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEmailRecovery = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Correo enviado:', data.email);
    toast.success('Se ha enviado un enlace de recuperación al correo proporcionado');
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recuperar Contraseña</h2>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Ingresa Correo electrónico</label>
            <input
              className="border border-gray-custom py-2 px-3 rounded-lg"
              type="email"
              placeholder="ejemplo@correo.com"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Correo es requerido',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Correo no es válido',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-3 rounded-lg text-xl bg-primary text-white cursor-pointer"
          >
            Enviar correo
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEmailRecovery;
