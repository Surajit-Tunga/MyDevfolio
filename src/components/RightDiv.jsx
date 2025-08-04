import React from 'react';

const RightDiv = () => {
  return (
    <div className="bg-gray-900 text-gray-100 border-2 border-blue-900 rounded-xl p-4 h-full overflow-y-auto scroll-hidden shadow-[0_0_10px_#1e3a8a]">
      <h2 className="text-xl font-bold mb-2">Right Panel</h2>
      <div className="space-y-2">
        {Array.from({ length: 60 }, (_, i) => (
          <p key={i}>Right content line {i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default RightDiv;
