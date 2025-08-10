import React, { useState, useEffect } from "react";
import img1 from "../assets/images/image-baklava-mobile.jpg";
import img2 from "../assets/images/image-creme-brulee-mobile.jpg";
import img3 from "../assets/images/image-waffle-mobile.jpg";
import img4 from "../assets/images/image-meringue-mobile.jpg";
import img5 from "../assets/images/image-brownie-mobile.jpg";
import img6 from "../assets/images/image-cake-mobile.jpg";
import { Star, X, ShoppingCart } from "lucide-react";
import { useAuth } from "../context/useAuth";           
import AuthModal from "../components/AuthModal"; 
import axios from "axios";


const foodItems = [
  { id: 1, name: "Baklava", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img1 },
  { id: 2, name: "Creme Brulee", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img2 },
  { id: 3, name: "Waffles", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img3 },
  { id: 4, name: "Meringue", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img4 },
  { id: 5, name: "Brownie", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img5 },
  { id: 6, name: "Cake", description: "Non nisi est sit amet facilisis magna", price: 15.0, image: img6 },
];

const renderStars = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-orange-700 fill-orange-700" />
    ))}
  </div>
);

export default function FoodMenu() {
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useAuth();                 // ✅ global login state
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [wantCheckout, setWantCheckout] = useState(false); // track intent to checkout

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const proceedToPayment = async () => {
  try {
    const token = localStorage.getItem("token"); // make sure you stored the token on login

    if (!token) {
      alert("You must be logged in to place an order.");
      return;
    }

    const formattedItems = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image, // if your backend stores image too
    }));

    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items: cart,
        totalAmount: total,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Order failed");
    }

    alert("✅ Order placed successfully!");
    setCart([]);
    setWantCheckout(false);
  } catch (error) {
    console.error("Order error:", error);
    alert("❌ Order failed. Please try again.");
  }
};


  const checkout = () => {
    if (cart.length === 0) return; // button is hidden when empty, but guard anyway
    if (!isLoggedIn) {
      setWantCheckout(true);
      setShowAuthModal(true); // open login/signup
      return;
    }
    proceedToPayment();
  };

  // Auto-continue checkout right after successful login (modal will call login())
  useEffect(() => {
    if (isLoggedIn && wantCheckout && cart.length > 0) {
      setShowAuthModal(false);
      proceedToPayment();
    }
  }, [isLoggedIn, wantCheckout, cart.length]);

  return (
    <div className="flex flex-col md:flex-row mt-10 gap-8">
      
      <div className="w-full md:w-1/3">
        <div className="bg-gray-200 shadow-lg p-4 border border-gray-200">
          <h2 className="font-bold text-xl mb-4"><ShoppingCart /> Your Cart</h2>
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
                      <span className="text-orange-700">${(item.price).toFixed(2)}</span>
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

          {/* Only show button if cart has items */}
          {cart.length > 0 && (
            <button
              className="mt-5 w-full bg-orange-700 text-white rounded-xl py-2 font-bold"
              onClick={checkout}
            >
              PROCEED TO CHECKOUT
            </button>
          )}
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-200 p-2">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md overflow-hidden border border-gray-100"
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

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
}
