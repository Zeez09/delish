import React from 'react'
import img1 from '../assets/images/depositphotos_49659123-Cheese-selection-platter-cheese-board.jpg'
import img2 from "../assets/images/20250626_154358.jpg"
import img3 from "../assets/images/20250626_154335.jpg"

const foodcategory = [
  { id: 1, name: "QUALITY CHEESE", img: img1 },
  { id: 2, name: "CRUNCHY FRENCH FRY", img: img2 },
  { id: 3, name: "100% HALAL MEAT", img: img3 },
];

const FoodCategory = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 ">
        {foodcategory.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden transition"
          >
            <img
              src={item.img}
              className="w-full h-60 object-cover"
              alt={item.name}
            />
            <div className=" text-center space-y-4 mt-5">
              <h3 className="font-bold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">
                Consectetur adipiscing elit, quisque eget maximus<br/>
                velit, non eleifend libero. Curabitur dapibus mauris<br/> sed leo cursus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
