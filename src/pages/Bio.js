// src/pages/Bio.js
import React, { useState } from 'react';
import Header from '../components/Header';

const Bio = ({ userPhoto, setUserPhoto }) => {
  const [tempUserName, setTempUserName] = useState('');

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result); // グローバル状態にセット
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      {/* Headerをメインコンテナの外に配置 */}
      <Header userPhoto={userPhoto} />

      {/* メインコンテンツ */}
      <div className="min-h-screen bg-white pt-20 px-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
              {userPhoto ? (
                <img 
                  src={userPhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Photo
                </div>
              )}
            </div>
            <input 
              type="file"
              onChange={handlePhotoUpload}
              className="mb-4"
            />
            <input 
              type="text"
              placeholder="Username"
              className="text-2xl text-center border-b border-gray-300 pb-2 w-full"
              value={tempUserName}
              onChange={(e)=>setTempUserName(e.target.value)}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Payment Methods</h2>
            <div className="space-y-2">
              <input 
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border"
              />
              <div className="grid grid-cols-3 gap-4">
                <input 
                  type="text"
                  placeholder="MM/YY"
                  className="p-2 border"
                />
                <input 
                  type="text"
                  placeholder="CVC"
                  className="p-2 border"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Shipping Address</h2>
            <div className="space-y-2">
              <input 
                type="text"
                placeholder="Street Address"
                className="w-full p-2 border"
              />
              <input 
                type="text"
                placeholder="City"
                className="w-full p-2 border"
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="State"
                  className="p-2 border"
                />
                <input 
                  type="text"
                  placeholder="ZIP Code"
                  className="p-2 border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
