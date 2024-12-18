// src/pages/Claim.js
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';

const Claim = ({ userPhoto }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedGender, setSelectedGender] = useState('male');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const items = useMemo(() => [
    { id: 1, image: 'https://storage.googleapis.com/ol_2330_share/item1.mp4' },
    { id: 2, image: 'https://storage.googleapis.com/ol_2330_share/item2.mp4' },
    { id: 3, image: 'https://storage.googleapis.com/ol_2330_share/item3.mp4' },
  ], []);

  const chosenItem = items.find((item) => item.id === selectedItem);

  const isVideo = (url) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  const handleItemClick = (id) => {
    console.log(`Item ${id} clicked`);
    setSelectedItem(id);
  };

  const handleBuyNow = () => {
    if (!address || !paymentMethod) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsModalOpen(true);
  };

  const confirmPurchase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemId: selectedItem,
          size: selectedSize,
          gender: selectedGender,
          address,
          paymentMethod,
        }),
      });
      if (response.ok) {
        setIsModalOpen(false);
        alert('Purchase successful!');
        // Reset form if needed
      } else {
        const errorData = await response.json();
        alert(`Purchase failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during purchase:', error);
      alert('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Headerを外に配置 */}
      <Header userPhoto={userPhoto} />

      {/* メインコンテンツ */}
      <div className="min-h-screen bg-white pt-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* アイテム選択セクション */}
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleItemClick(item.id)}
                className="cursor-pointer"
                style={{ position: 'relative' }}
                tabIndex={0}
                onKeyPress={(e) => { if (e.key === 'Enter') handleItemClick(item.id); }}
              >
                {isVideo(item.image) ? (
                  <video
                    onError={(e) => console.error('Video failed to load:', e)}
                    style={{ pointerEvents: 'none' }}
                    className="w-full h-48 object-cover"
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
                    alt={`Item ${item.id} image`}
                    className="w-full h-48 object-cover"
                    style={{ pointerEvents: 'none' }}
                    onError={(e) => console.error('Image failed to load:', e)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 選択されたアイテムの詳細セクション */}
          {chosenItem && (
            <div className="space-y-6">
              <h2 className="text-2xl font-light">Item Details</h2>
              <div 
                className="w-full overflow-hidden flex items-center justify-center mb-4 bg-gray-100"
                style={{ height: '400px', position: 'relative' }}
              >
                {isVideo(chosenItem.image) ? (
                  <video
                    onError={(e) => console.error('Video failed to load:', e)}
                    className="max-w-full max-h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    style={{ pointerEvents: 'none' }}
                  >
                    <source src={chosenItem.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={chosenItem.image}
                    alt={`Selected Item ${chosenItem.id} image`}
                    className="max-w-full max-h-full object-contain"
                    style={{ pointerEvents: 'none' }}
                    onError={(e) => console.error('Image failed to load:', e)}
                  />
                )}
              </div>
              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <label className="block mb-2">Size</label>
                  <select 
                    className="w-full p-2 border"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>

                {/* Gender Selection */}
                <div>
                  <label className="block mb-2">Gender</label>
                  <select
                    className="w-full p-2 border"
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Address Input */}
                <input 
                  type="text" 
                  placeholder="Address"
                  className="w-full p-2 border"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                {/* Payment Method Selection */}
                <select 
                  className="w-full p-2 border"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Apple Pay">Apple Pay</option>
                  <option value="Google Pay">Google Pay</option>
                </select>
              </div>
              <button 
                className="bg-black text-white px-8 py-3 w-full"
                onClick={handleBuyNow}
              >
                BUY NOW
              </button>
            </div>
          )}
        </div>

        {/* Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl mb-4">Confirm Purchase</h2>
              <p>Are you sure you want to buy this item?</p>
              <div className="mt-4 flex justify-end">
                <button 
                  className="bg-gray-300 px-4 py-2 mr-2"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button 
                  className="bg-black text-white px-4 py-2"
                  onClick={confirmPurchase}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Confirm'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Claim;
