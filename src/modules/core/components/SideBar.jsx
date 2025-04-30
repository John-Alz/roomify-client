import { BedDouble } from 'lucide-react';
import { Users } from 'lucide-react';
import { BookDown } from 'lucide-react';
import { Bolt } from 'lucide-react';
import { NotebookTabs } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { BookTextIcon } from 'lucide-react';
import { Home } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const SideBar = () => {

    const navLinks = [
        {
            id: 1,
            icon: <Home />,
            text: 'Dashboard',
            link: '/admin/dashboard'
        },
        {
            id: 2,
            icon: <BedDouble />,
            text: 'Habitaciones',
            link: '/admin/habitaciones'
        },
        {
            id: 3,
            icon: <BookDown />,
            text: 'Reservas',
            link: '/admin/reservas'
        },
        {
            id: 4,
            icon: <Users />,
            text: 'Usuarios',
            link: '/admin/usuarios'
        },
        {
            id: 5,
            icon: <NotebookTabs />,
            text: 'T. habitaciones',
            link: '/admin/tipos-habitacion'
        },
        {
            id: 6,
            icon: <NotepadText />,
            text: 'Amenidades',
            link: '/admin/amenidades'
        },
        {
            id: 7,
            icon: <Bolt />,
            text: 'Configuracion',
            link: '/admin/configuracion',
        },
        {
            id: 8,
            icon: <LogOut />,
            text: 'Cerrar sesion',
            link: '/'
        }
    ];

    return (
        <nav className='bg-white h-screen w-58 flex flex-col gap-8 pb-8 '>
            <div className='mt-3 flex justify-center'>
                <Link to={'/'}>
                    <img src='/public/logoRoomify.png' width={180} />
                </Link>
            </div>
            <ul className='flex flex-col gap-5'>
                {navLinks.map((item) => (
                    <NavLink key={item.link} to={`${item.link}`}>
                        {({ isActive }) => (
                            <div className={`flex gap-2 items-center group h-[56px]`}>
                                <div className={`w-1 h-full rounded-tr-2xl rounded-br-2xl group-hover:bg-btn-admin ${isActive ? 'bg-btn-admin' : 'bg-transparent'}`}></div>
                                <li className={`flex gap-2 py-4 px-4 rounded-2xl w-full mr-5 group-hover:bg-btn-admin  hover:text-white ${isActive ? 'bg-btn-admin text-white' : 'bg-transparent'}`}>
                                    {item.icon}
                                    {item.text}
                                </li>
                            </div>
                        )}
                    </NavLink>
                ))}
            </ul>
        </nav >
    )
}
