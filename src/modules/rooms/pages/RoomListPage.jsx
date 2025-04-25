import React from 'react';
import { Footer, Navbar } from '../../core/components';
import { SearchForm, RoomCard, ResultHeader, LateralFilters, PaginationRoom } from '../components';

export const RoomListPage = () => {
  const colorsHeader = {
    textColor: "text-black",
    borderColor: "hover:border-black",
    bgOpacity: "bg-black/50",
  };

  return (
    <div>
      <Navbar colors={colorsHeader} />

      <div className="w-full border-t-2 border-gray-100 mt-22"></div>

      <div className="w-full m-auto pt-10 px-4 md:px-0 flex flex-col md:flex-row">
        
      
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:pr-10 order-1 md:order-none">
          <SearchForm />
          <LateralFilters />
        </div>

        <div className="w-full md:w-[100%] md:pl-10 order-2 md:order-none">
          <ResultHeader />
          <RoomCard />
          <PaginationRoom />
        </div>
      </div>

      <Footer />
    </div>
  );
};
