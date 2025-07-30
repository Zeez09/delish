import React from 'react'
import img1 from "../assets/images/image-baklava-mobile.jpg";
import img2 from "../assets/images/image-creme-brulee-mobile.jpg";
import img3 from "../assets/images/image-waffle-mobile.jpg";
import img4 from "../assets/images/image-meringue-mobile.jpg";
import img5 from "../assets/images/image-brownie-mobile.jpg";
import img6 from "../assets/images/image-cake-mobile.jpg";
import img7 from "../assets/images/decorations_7.jpeg";
import img8 from "../assets/images/decorations_20.jpeg";
import { Star } from "lucide-react";




const foodItems = [
  {
    id: 1,
    name: "Baklava",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img1,
  },
  {
    id: 2,
    name: "Creme Brulee",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img2,
  },
  {
    id: 3,
    name: "Waffles",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img3,
  },
  {
    id: 4,
    name: "Meringue",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img4,
  },
  {
    id: 5,
    name: "Brownie",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img5,
  },
  {
    id: 6,
    name: "Cake",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img6,
  },
  {
    id: 7,
    name: "Cake",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img7,
  },
  {
    id: 8,
    name: "Cake",
    description: "Non nisi est sit amet facilisis magna",
    price: 15.00,
    image: img8,
  },
];



const renderStars = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-orange-700 fill-orange-700" />
    ))}
  </div>
);

const FoodMenu2 = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md overflow-hidden border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex items-center flex-col">
              {renderStars()}
              <h3 className="font-bold text-2xl text-center">{item.name}</h3>
              <p className="text-orange-700">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FoodMenu2;