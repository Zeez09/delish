import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar4 from '../components/NavBar4';
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg";
import herb from "../assets/images/depositphotos_605885380-stock-photo-crispy-german-pork-knuckle-roast.jpg";
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import Footer1 from '../components/Footer1';

const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(qty => qty + 1);
  const decreaseQty = () => setQuantity(qty => (qty > 1 ? qty - 1 : 1));

  const renderStars = () => (
    <div className="flex gap-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-orange-700 fill-orange-700" />
      ))}
    </div>
  );

  return (
    <div>
      <NavBar4 />

      
      <div className="relative w-full h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">GALLERY PAGE</h1>
          <div className="flex gap-2 font-bold">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <Link to="/shop-details" className="hover:underline">SHOP DETAILS</Link>
          </div>
          <h2 className="mt-10 md:mt-20 text-3xl sm:text-5xl md:text-6xl font-bold text-gray-300">
            SHOP DETAILS
          </h2>
        </div>
      </div>

      
      <div className="w-full mt-20 pb-16 px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">

          
          <div className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src={herb}
              alt="Grilled Lemon Herb Chicken"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-orange-700 text-white px-4 py-1 rounded-full shadow-lg">
              <p className="text-sm font-bold">SALE</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl">Grilled Lemon Herb Chicken</h1>

            <div className="flex gap-2 items-center">
              {renderStars()}
              <span className="text-gray-400 text-sm sm:text-base">(1 customer review)</span>
            </div>

            <p className="text-xl sm:text-2xl font-bold">$260.00 - $360.00</p>

            <hr className="w-full border-gray-400" />
            <p className="text-gray-500 text-sm sm:text-base">
              Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient<br className="hidden sm:block" />
              donec duis primis nam faucibus augue malesuada venenatis
            </p>
            <hr className="w-full border-gray-400" />

            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex bg-black text-white border border-gray-700">
                  <input
                    type="text"
                    readOnly
                    value={quantity}
                    className="w-14 text-center bg-black text-white focus:outline-none px-4 py-2"
                  />
                  <div className="flex flex-col">
                    <button onClick={increaseQty} className="hover:bg-gray-800 px-2 py-1">
                      <ChevronUp size={16} />
                    </button>
                    <button onClick={decreaseQty} className="hover:bg-gray-800 px-2 py-1">
                      <ChevronDown size={16} />
                    </button>
                  </div>
                </div>

                <button className="bg-orange-700 text-white px-6 py-2 font-bold w-full sm:w-auto">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 border-b border-gray-200 text-sm font-bold overflow-x-auto">
          <button className="hover:border-b-2 border-gray-500 py-2 hover:border-orange-700 text-gray-500 hover:text-black">
            DESCRIPTION
          </button>
          <button className="hover:border-b-2 border-gray-500 py-2 hover:border-orange-700 text-gray-500 hover:text-black">
            ADDITIONAL INFORMATION
          </button>
          <button className="hover:border-b-2 border-gray-500 py-2 hover:border-orange-700 text-gray-500 hover:text-black">
            REVIEW (03)
          </button>
        </div>

        <div className="mt-4 text-gray-600 space-y-4 leading-relaxed text-sm sm:text-base">
          <p>
            Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. 
            Compellingly whiteboard client-centric sources and cross-platform schemas. 
            Distinctively develop future-proof outsourcing without multimedia-based portals. 
            Progressively coordinate generation architectures for collaborative solutions. 
            Professionally restore backward-compatible quality vectors before customer-directed metrics. 
            Holistically restore technically sound internal or "organic" sources before client-centered 
            human capital underwhelms holistic mindshare for prospective innovation.
          </p>
          <p>
            Seamlessly target fully tested infrastructures whereas just-in-time process improvements. 
            Dynamically exploit team-driven functionalities vis-à-vis global total linkage. 
            Credibly synthesize just-in-time technology rather than open-source strategic theme areas.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-400 h-auto text-white p-6 mt-16">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">


    <div className="flex flex-col text-center md:text-left">
      <h1 className="font-bold text-sm sm:text-base md:text-lg">
        BOOK A TABLE FOR YOU AND YOUR FAMILY MEMBERS
      </h1>
      <p className="font-bold text-xl sm:text-2xl md:text-4xl mt-2">
        NEED A TABLE ON COFFEE HOUSE
      </p>
    </div>

    <button className="border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-gray-900 transition">
      BOOK A TABLE
    </button>

  </div>
</div>





        <div>
      <Footer1/>
      </div>

    <div className="w-full bg-black py-6 text-white text-sm">
  <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 px-4">
    <hr className="w-full border-gray-700" />

    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="w-full md:w-auto">
        © {new Date().getFullYear()} Delish. All Rights Reserved.
      </p>

      <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <li className="cursor-pointer">Terms of Use</li>
        <li className="cursor-pointer">Privacy Policy</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default ShopDetails;
