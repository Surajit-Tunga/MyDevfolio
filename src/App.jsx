import React from 'react';
import LeftDiv from './components/LeftDiv';
import RightDiv from './components/RightDiv';

const App = () => {
  return (
    <div className="h-screen bg-black px-6 py-4 overflow-hidden">
      {/* Large screens: side-by-side */}
      <div className="hidden lg:flex items-center justify-center h-full">
        <div className="flex gap-6 w-10/12 max-w-[1440px] h-[90vh]">
          <div className="w-1/5 h-full">
            <LeftDiv />
          </div>
          <div className="w-4/5 h-full">
            <RightDiv />
          </div>
        </div>
      </div>

      {/* Small screens: stacked */}
      <div className="flex flex-col gap-4 lg:hidden h-[92vh]">
        <div className="h-1/6">
          <LeftDiv />
        </div>
        <div className="h-5/6 mt-2 mb-1">
          <RightDiv />
        </div>
      </div>
    </div>
  );
};

export default App;
