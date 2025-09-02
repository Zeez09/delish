import React, { useState, useEffect } from "react";
import img1 from "../assets/images/image-baklava-mobile.jpg";
import img2 from "../assets/images/image-creme-brulee-mobile.jpg";
import img3 from "../assets/images/image-waffle-mobile.jpg";
import img4 from "../assets/images/image-meringue-mobile.jpg";
import img5 from "../assets/images/image-brownie-mobile.jpg";
import img6 from "../assets/images/image-cake-mobile.jpg";
import img7 from "../assets/images/depositphotos_40605279-Barbeque-Pulled-Pork-Sandwich.jpg";
import img8 from "../assets/images/depositphotos_23796179-Pizza-Margherita.jpg";
import img9 from "../assets/images/depositphotos_38935051-Chicken-fettuccine-alfredo-with-spinach.jpg";
import { Star, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import AuthModal from "../components/AuthModal";
import PaymentModal from "../components/PaymentModal";
import { useCart } from "../context/CartContext";

const foodItems = {
  breakfast: [
    { id: 1, name: "Baklava", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img1 },
    { id: 2, name: "Creme Brulee", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img2 },
    { id: 7, name: "pork sand-wich", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img7},
  ],
  lunch: [
    { id: 3, name: "Waffles", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img3 },
    { id: 4, name: "Meringue", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img4 },
    { id: 8, name: "Pizza-Margherita", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img8 },
  ],
  dinner: [
    { id: 5, name: "Brownie", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img5 },
    { id: 6, name: "Cake", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img6 },
    { id: 9, name: "Fettucine", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img9 },
  ],
};

const renderStars = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-orange-700 fill-orange-700" />
    ))}
  </div>
);

export default function FoodMenu() {
  const {cart, addToCart, removeFromCart, total } = useCart();
  const {isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [wantCheckout, setWantCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPayment, setShowPayment] = useState(false);

  const navigate = useNavigate(); 
  
  const checkout = () => {
    if (cart.length === 0) return;
    if (!isLoggedIn) {
      setWantCheckout(true);
      setShowAuthModal(true);
      return;
    }
    setShowPayment(true);
  };

  useEffect(() => {
    if (isLoggedIn && wantCheckout && cart.length > 0 && !showPayment) {
      setShowAuthModal(false);
      setShowPayment(true);
    }
  }, [isLoggedIn, wantCheckout, cart.length]);

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setWantCheckout(false);
    navigate("/successful-order");  // ✅ redirect to success page
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-6xl space-y-6">
        
        <div>
          <Link to="/menu">
            <button className="text-white bg-orange-700 rounded-xl px-5 py-2 hover:bg-orange-800 hover:cursor-pointer">
              FOOD MENU
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="font-bold text-3xl">OUR DELICIOUS FOODS</h1>

          <div className="flex gap-4">
            {["all", "breakfast", "lunch", "dinner"].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-orange-700 text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400 hover:cursor-pointer"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "All Foods" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* CART */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 shadow-lg p-4 border border-gray-200">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                <ShoppingCart /> Your Cart
              </h2>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <ul className="space-y-2">
                  {cart.map((item, index) => (
                    <div key={item.id}>
                      <li className="text-sm">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-bold text-xl">
                              {item.name}
                              <span className="text-xs font-semibold"> ×{item.quantity}</span>
                            </p>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                          <span className="text-orange-700">${item.price.toFixed(2)}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 mt-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </li>
                      {index !== cart.length - 1 && <hr className="my-2 border-gray-300" />}
                    </div>
                  ))}
                  <li className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-orange-700">${total.toFixed(2)}</span>
                  </li>
                </ul>
              )}

              {cart.length > 0 && (
                <button
                  className="mt-5 w-full bg-orange-700 text-white rounded-xl py-2 font-bold hover:cursor-pointer hover:bg-orange-800"
                  onClick={checkout}
                >
                  PROCEED TO CHECKOUT
                </button>
              )}
            </div>
          </div>

          {/* MENU */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-200 p-2">
              {(selectedCategory === "all"
                ? Object.values(foodItems).flat()
                : foodItems[selectedCategory]
              ).map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md overflow-hidden border border-gray-100 cursor-pointer"
                  onClick={() => addToCart(item)}
                >
                  <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
                  <div className="p-4 flex items-center flex-col">
                    {renderStars()}
                    <h3 className="font-bold text-2xl">{item.name}</h3>
                    <p className="text-orange-700">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

        {showPayment && (
          <PaymentModal
            amount={total}
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}  
          />
        )}
      </div>
    </div>
  );
}
