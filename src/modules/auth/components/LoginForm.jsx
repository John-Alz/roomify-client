import React from 'react'

export const LoginForm = () => {
    return (
        <div>
            <form>
                <div>
                    <h2>Bienvenido de nuevo 🏨</h2>
                    <p>Hoy es un nuevo día. Tu próxima estancia te espera.
                        Inicia sesión para gestionar tus reservas.</p>
                </div>

                <div>
                    <div>
                        <label>Correo electrónico</label>
                        <input type='text' name='email' placeholder='ejemplo@correo.com' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='password' name='password' placeholder='mínimo 8 caracteres' />
                    </div>
                    <span>¿Olvidaste tu contraseña?</span>
                    <button>Iniciar sesión</button>
                </div>

            </form>
        </div>
    )
}
