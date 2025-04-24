import React from 'react';
import { Footer, Navbar } from '../../core/components';
import { SearchForm, RoomCard, ResultHeader, LateralFilters, PaginationRoom } from '../components';

export const RoomListPage = () => {

    const colorsHeader = {
        textColor: "text-black",
        borderColor: "hover:border-black",
        bgOpacity: "bg-black/50",
    }

    return (
        <div>
            <Navbar colors={colorsHeader} />
        
            <div className="w-full border-t-2 border-gray-100 mt-22"></div>

            <div className='w-[100%] m-auto pt-10 flex'>
                {/* Contenedor izquierdo (formulario completo) */}
                <div className="w-[50%] flex flex-col gap-4 pr-10">
                    <SearchForm />
                    <LateralFilters />
                </div>

                {/* Contenedor derecho (más protagonista) */}
                <div className="w-[100%] pl-10">
                    <ResultHeader />
                    <RoomCard />
                    <PaginationRoom />
                </div>
            </div>



            <Footer />
        </div>
    );
};
