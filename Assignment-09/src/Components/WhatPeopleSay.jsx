import React from 'react';
import i1 from '../assets/jhankar.jpeg'
import i2 from '../assets/rakib.jpeg'
import i3 from '../assets/zihad.jpg'

const WhatPeopleSay = () => {
    return (
        <div>
            <div className="py-16 bg-white rounded-xl">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
    What People Say
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {/* Card */}
    <div className="p-6 border rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={i1}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-800">Ariana Lopes</h4>
          <p className="text-yellow-500 text-sm">★★★★★</p>
        </div>
      </div>

      <p className="text-gray-600 mt-4">
        “The platform helped me learn graphic design incredibly fast.”
      </p>
    </div>

    <div className="p-6 border rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={i2}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-800">Rafi Chowdhury</h4>
          <p className="text-yellow-500 text-sm">★★★★★</p>
        </div>
      </div>

      <p className="text-gray-600 mt-4">
        “Booking sessions is super smooth. I loved the experience!”
      </p>
    </div>

    <div className="p-6 border rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={i3}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-800">Mehnaz Rahim</h4>
          <p className="text-yellow-500 text-sm">★★★★★</p>
        </div>
      </div>

      <p className="text-gray-600 mt-4">
        “A very helpful community for learning new skills.”
      </p>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default WhatPeopleSay;