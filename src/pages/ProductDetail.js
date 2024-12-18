import React from 'react';
import Header from '../components/Header';

const ProductDetail = ({ userPhoto }) => (
  <div className="min-h-screen bg-white pt-20 px-8">
    <Header userPhoto={userPhoto}/>
    <div className="grid grid-cols-2 gap-12">
      <div>
        <img 
          src="/api/placeholder/600/800" 
          alt="Product detail"
          className="w-full h-auto"
        />
        <p className="mt-4 text-gray-600">CREATED BY SOMEONE</p>
      </div>
      <div className="space-y-8">
        <h1 className="text-4xl font-light">Product Name</h1>
        <p className="text-2xl">$999.99</p>
        <button className="bg-black text-white px-8 py-3 w-full">
          BUY NOW
        </button>
        <div className="prose">
          <p>
            Detailed product description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
