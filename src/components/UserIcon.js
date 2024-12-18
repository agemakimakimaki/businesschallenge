// src/components/UserIcon.js
import React from 'react';

const UserIcon = ({ userPhoto }) => {
  return (
    userPhoto ? (
      <img 
        src={userPhoto} 
        alt="User" 
        className="w-8 h-8 rounded-full object-cover" 
      />
    ) : (
      <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
        U
      </div>
    )
  );
};

export default UserIcon;
