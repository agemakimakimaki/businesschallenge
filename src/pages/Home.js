import React from 'react';

const Home = ({ onEnter }) => (
  <div 
    onClick={onEnter}
    className="w-full h-screen bg-white flex items-center justify-center cursor-pointer"
  >
    <h1 className="text-4xl font-light tracking-widest text-gray-800">
      STEP INTO THE NEXT LEVEL
    </h1>
  </div>
);

export default Home;
