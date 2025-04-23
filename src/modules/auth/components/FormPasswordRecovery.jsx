import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPasswordRecovery = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Contraseñas ingresadas:', data);
    toast.success('Contraseña restablecida con éxito');
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Establecer nueva contraseña</h2>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="mb-1">Nueva contraseña</label>
            <input
              className="border border-gray-custom py-2 px-3 rounded-lg"
              type="password"
              placeholder="mínimo 8 caracteres"
              {...register("password", {
                required: {
                  value: true,
                  message: 'Contraseña es requerida',
                },
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener mínimo 8 caracteres',
                },
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-xs">{errors.password.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Confirmar contraseña</label>
            <input
              className="border border-gray-custom py-2 px-3 rounded-lg"
              type="password"
              placeholder="Repite la contraseña"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: 'Debes confirmar la contraseña',
                },
                validate: (value) =>
                  value === password || 'Las contraseñas no coinciden',
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-400 text-xs">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-3 rounded-lg text-xl bg-primary text-white cursor-pointer"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPasswordRecovery;
