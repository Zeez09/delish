import React, { useState } from 'react';
import { useAuth } from '../context/useAuth'; // ✅ import global login hook

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [successMsg, setSuccessMsg] = useState(""); // ✅ success message state
  const { login } = useAuth(); // ✅ get login function from context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // ✅ Signup flow
      setSuccessMsg("Signup successful! Please log in.");
      setIsLogin(true); // Switch to login
    } else {
      // ✅ Login flow
      setSuccessMsg("Login successful! Redirecting...");
      login(); // Update global login state
      setTimeout(() => {
        onClose(); // Close modal after short delay
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/30">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>

        {/* Toggle between signup/login */}
        <p className="text-sm text-center mb-4 text-black">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setSuccessMsg(""); // Clear any message on toggle
            }}
            className="text-orange-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <hr className="w-full mb-4 border-gray-300" />

        {/* ✅ Success Message */}
        {successMsg && (
          <p className="text-black text-sm font-bold text-center mb-3">
            {successMsg}
          </p>
        )}

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className="text-black font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="John/Jane Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </>
          )}

          <label className="text-black font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email@gmail.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
          />

          <label className="text-black font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
