// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';

const Header = ({ userPhoto }) => (
  <nav className="w-full px-8 py-4 flex items-center justify-between fixed top-0 z-50 bg-black text-white">
    <div className="flex items-center">
      <Link to="/main" className="flex items-center">
        <img 
          src="https://storage.googleapis.com/ol_2330_share/Screenshot%202024-12-18%20at%2010.55.03.png" 
          alt="Logo" 
          className="h-8 w-auto" // 必要に応じてサイズを調整
        />
      </Link>
    </div>
    <div className="flex gap-8">
      <Link to="/drops" className="hover:text-gray-300">DROPS</Link>
      <Link to="/reveal" className="hover:text-gray-300">REVEAL</Link>
      <Link to="/claim" className="hover:text-gray-300">CLAIM</Link>
      <Link to="/marketplace" className="hover:text-gray-300">MARKET PLACE</Link>
      <Link to="/story" className="hover:text-gray-300">OUR STORY</Link>
    </div>
    <div className="cursor-pointer ml-4">
      <Link to="/profile">
        <UserIcon userPhoto={userPhoto} />
      </Link>
    </div>
  </nav>
);

export default Header;
