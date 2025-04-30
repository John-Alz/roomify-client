import React from 'react';

export const PaginationRoom = () => {
  const pages = [1, 2, 3, 4, '...', 25];
  const currentPage = 1;

  return (
    <div className="flex justify-center items-center gap-6 py-10">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`w-6 h-6 text-sm font-medium rounded-full flex items-center justify-center
            ${page === currentPage ? 'bg-[#34a0a4] text-white' : 'text-black'}`}
          style={{ fontSize: '14px' }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
