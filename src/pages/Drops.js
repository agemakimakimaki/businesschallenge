// src/pages/Drops.js
import React from 'react';
import Header from '../components/Header';

const Drops = ({ userPhoto }) => {
  const items = [
    {
      id: 1,
      title: 'Silver Box $300',
      description: 'The Silver Box is a perfect starting point for those looking to dip their toes into the world of affordable luxury. Though it sits at the most accessible price level, this box still delivers a taste of opulence, sophistication, and style. Contents are generally from reputable premium brands, limited-edition collaborations, and sought-after seasonal items.',
      image: 'https://storage.googleapis.com/ol_2330_share/silver.mp4', 
    },
    {
      id: 2,
      title: 'Gold Box $800',
      description: 'The Gold Box steps up the game with more exclusive items and well-regarded global brands. This level includes an expanded variety of fashion apparel, higher-end accessories, and elevated lifestyle enhancements. Each Gold Box is designed for customers who desire a richer, more indulgent experience that reflects current trends and timeless style.',
      image: 'https://storage.googleapis.com/ol_2330_share/gold2.mp4', 
    },
    {
      id: 3,
      title: 'Diamond Box $1500',
      description: 'The Diamond Box stands at the pinnacle of luxury and exclusivity. This is a meticulously curated selection of premier designer pieces, rare limited editions, and elevated lifestyle goods that cater to the most discerning customers. Expect items that exude not only craftsmanship and heritage but also reflect the cutting-edge of contemporary luxury markets.',
      image: 'https://storage.googleapis.com/ol_2330_share/diamond.mp4', 
    },
  ];

  return (
    <>
      {/* 共通のHeaderをパディングなしで配置 */}
      <Header userPhoto={userPhoto} />

      {/* メインコンテンツをヘッダーの下に配置 */}
      <div className="min-h-screen bg-white pt-20 px-8">
        <h2 className="text-3xl font-light mb-12">GENESIS COLLECTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const isVideo = item.image.toLowerCase().endsWith('.mp4');
            return (
              <div key={item.id} className="space-y-4">
                {isVideo ? (
                  <video 
                    className="w-full h-96 object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  >
                    <source src={item.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={item.image} 
                    alt={`Product ${item.id}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                )}
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Drops;
