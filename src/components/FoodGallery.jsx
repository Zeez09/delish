import React from 'react'
import img1 from "../assets/images/image-baklava-mobile.jpg";
import img2 from "../assets/images/image-creme-brulee-mobile.jpg";
import img3 from "../assets/images/image-waffle-mobile.jpg";
import img4 from "../assets/images/image-meringue-mobile.jpg";
import img5 from "../assets/images/image-brownie-mobile.jpg";
import img6 from "../assets/images/image-cake-mobile.jpg";
import { Eye } from 'lucide-react';

const foodgallery = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
];

const FoodGallery = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodgallery.map((item) => (
          <div
            key={item.id}
            className="relative group bg-gray-200 shadow-md overflow-hidden border border-gray-100 p-2"
          >
            <img
              src={item.img}
              className="w-full h-60 object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-700 bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out">
              <Eye className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
