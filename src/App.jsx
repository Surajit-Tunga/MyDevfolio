import React from 'react';
import LeftDiv from './components/LeftDiv';
import RightDiv from './components/RightDiv';

const App = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-6">
      {/* Large screens: side-by-side */}
      <div className="hidden lg:flex gap-6 h-[90vh]">
        <div className="w-1/4 h-full">
          <LeftDiv />
        </div>
        <div className="w-3/4 h-full">
          <RightDiv />
        </div>
      </div>

      {/* Small screens: stacked */}
      <div className="flex flex-col gap-4 lg:hidden h-[90vh]">
        <div className="h-1/4">
          <LeftDiv />
        </div>
        <div className="flex-1 mt-2">
          <RightDiv />
        </div>
      </div>
    </div>
  );
};

export default App;
