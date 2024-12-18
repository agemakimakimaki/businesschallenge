// src/components/MediaItem.js
import React from 'react';

const MediaItem = ({ item, isChecked, onCheck }) => {
  if (!item) {
    console.error('MediaItem received undefined item');
    return null;
  }

  const { id, media, type } = item;

  if (typeof id === 'undefined' || typeof media === 'undefined' || typeof type === 'undefined') {
    console.error('MediaItem received incomplete item:', item);
    return null;
  }

  return (
    <div 
      className="relative cursor-pointer border rounded-lg overflow-hidden"
      onClick={() => onCheck(id)}
    >
      {/* チェックボックス */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheck(id)}
        className="absolute top-2 left-2 z-10 w-4 h-4 text-black bg-white border rounded focus:ring-0"
        aria-label={`Select item ${id}`}
      />
      
      {/* メディアの表示 */}
      {type === 'video' ? (
        <video 
          className="w-full h-64 object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src={media}
          alt={`Reveal Item ${id}`}
          className="w-full h-64 object-cover"
        />
      )}
    </div>
  );
};

export default MediaItem;
