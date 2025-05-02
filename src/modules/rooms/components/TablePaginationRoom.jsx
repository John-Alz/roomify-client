import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TablePaginationRoom() {
  const [flag, setFlag] = useState(0);

  const handleFlag = () => {
    if (flag > 0) {
      setFlag(flag - 1);
    }
  };

  const handleFlagNext = () => {
    if (flag < 7) {
      setFlag(flag + 1);
    }
  };

  const handleFlagClick = (i) => {
    setFlag(i);
  };

  return (
    <div className="flex pt-6 justify-center mt-6 pb-16">
      <div className="flex items-center border border-gray-400 bg-white shadow-md rounded-2xl px-2 py-1 space-x-3">
        
        <button
          onClick={handleFlag}
          className="w-10 h-10 rounded-full text-blue-800 text-2xl cursor-pointer"
        >
          <ChevronLeft size={24} className="stroke-2" />
        </button>

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <button
            key={i}
            onClick={() => handleFlagClick(i)}
            className={`w-8 h-8 rounded-full ${
              i === flag ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-200'
            } cursor-pointer`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleFlagNext}
          className="w-10 h-10 rounded-full text-blue-800 text-2xl cursor-pointer"
        >
          <ChevronRight size={24}  />
        </button>
      </div>
    </div>
  );
}
