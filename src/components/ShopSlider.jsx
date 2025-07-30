import React from 'react'
import { Star } from "lucide-react";
import img1 from "../assets/images/depositphotos_613651086-stock-photo-beef-bourguignon-beef-burgundy-stew.jpg";
import img2 from "../assets/images/depositphotos_602532164-stock-photo-tuna-tartare-avocado-spicy-radish.jpg";
import img3 from "../assets/images/depositphotos_23796179-Pizza-Margherita.jpg";
import img4 from "../assets/images/depositphotos_617930228-stock-photo-galbijjim-korean-braised-short-ribs.jpg";
import img5 from "../assets/images/depositphotos_214058776-stock-photo-lobster-bisque-soup-squid-ink.jpg";
import img6 from "../assets/images/depositphotos_38935051-Chicken-fettuccine-alfredo-with-spinach.jpg";
import img7 from "../assets/images/depositphotos_72362347-Caesar-salad-classic-on-a-white-plate..jpg";
import img8 from "../assets/images/DSC_4957111.jpg";
import img9 from "../assets/images/depositphotos_40605279-Barbeque-Pulled-Pork-Sandwich.jpg";
import img10 from "../assets/images/poke-bowl-with-raw-tuna-rice-avocado-edamame-beans-cucumber-bowl-hawaiian-ahi-poke-bowl-healthy-food-rustic-wooden-background-selective-focus-with-copy-space_259258-1413.jpg";
import img11 from "../assets/images/depositphotos_21836373-cake-with-strawberries.jpg";
import img12 from "../assets/images/depositphotos_150376448-stock-photo-soy-honey-glazed-salmon-and.jpg";




const shopslider = [
  {
    id: 1,
    name: "Beef Bourguignon",
    price: 15.00,
    image: img1,
  },
  {
    id: 2,
    name: "Spicy Tuna Tartare",
    price: 15.00,
    image: img2,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 15.00,
    image: img3,
  },
  {
    id: 4,
    name: "Braised Short Ribs",
    price: 15.00,
    image: img4,
  },
  {
    id: 5,
    name: "Vegan Buddha Bowl",
    price: 15.00,
    image: img5,
  },
  {
    id: 6,
    name: "Chicken Alfredo Pasta",
    price: 15.00,
    image: img6,
  },
  {
    id: 7,
    name: "Classic Caesar Salad",
    price: 15.00,
    image: img7,
  },
  {
    id: 8,
    name: "Roasted Vegetable Platter",
    price: 15.00,
    image: img8,
  },
  {
    id: 9,
    name: "Pulled Pork Sandwich",
    price: 15.00,
    image: img9,
  },
  {
    id: 10,
    name: "Ahi Poke Bowl",
    price: 15.00,
    image: img10,
  },
  {
    id: 11,
    name: "Chocolate Lava Cake",
    price: 15.00,
    image: img11,
  },
  {
    id: 12,
    name: "Lobster Bisque",
    price: 15.00,
    image: img12,
  },
];


const renderStars = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-orange-700 fill-orange-700" />
    ))}
  </div>
);

const ShopSlider = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {shopslider.map((item) => (
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
              <h3 className="font-bold text-lg text-center">{item.name}</h3>
              <p className="text-orange-700 font-semibold">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopSlider
