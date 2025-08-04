import React from 'react';

const RightDiv = () => {
  return (
    <div className="bg-gray-800 text-white border border-white rounded-xl p-4 h-full overflow-y-auto scroll-hidden">
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
