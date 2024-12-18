import React from 'react';
import Header from '../components/Header';

const Story = ({ userPhoto }) => (
  <div className="min-h-screen bg-white pt-20">
    <Header userPhoto={userPhoto}/>
    <div className="max-w-2xl mx-auto px-8 text-center space-y-8">
      <h1 className="text-4xl font-light">Our Story</h1>
      <p className="text-gray-600">
      At Level Shoes, we redefine luxury by seamlessly blending exquisite 
      craftsmanship with a steadfast commitment to sustainability and 
      inclusivity. Founded with a vision to create exceptional footwear, 
      we meticulously source ethically produced materials and employ 
      eco-friendly manufacturing processes that align with the United Nations
       Sustainable Development Goals. Our dedication to Diversity, Equity,
        and Inclusion ensures that our diverse team and inclusive designs
        celebrate and empower individuals from all walks of life. Beyond 
        creating stunning shoes, we actively support local artisans and 
        invest in community initiatives, fostering positive change and 
        sustainable growth. Every pair of Level Shoes embodies our promise 
        to honor the planet and its people, offering not just elegance and 
        comfort, but also a meaningful stride towards a more responsible
         and equitable future. Join us in walking the path of conscious 
         luxury, where every step reflects our shared values of excellence, 
         sustainability, and diversity.
      </p>
      <p className="text-gray-600">
      Level Shoes – Luxury with a Conscience
       </p>
      
    </div>
  </div>
);

export default Story;
