import React from 'react';

const LeftDiv = () => {
  return (
    <div className="bg-gray-800 text-white border border-white rounded-xl p-4 h-full overflow-y-auto scroll-hidden">
      <h2 className="text-xl font-bold mb-2">Left Panel</h2>
      <div className="space-y-2">
        {Array.from({ length: 40 }, (_, i) => (
          <p key={i}>Left content line {i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default LeftDiv;
