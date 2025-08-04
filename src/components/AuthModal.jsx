import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/auth"; // adjust for your env system

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      if (!isLogin) {
        // Signup
        const res = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullname: form.fullname,
            email: form.email,
            password: form.password,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Signup failed");
        setSuccessMsg("Signup successful! Please log in.");
        setIsLogin(true);
      } else {
        // Login
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login failed");
        if (!data.token) throw new Error("No token returned from backend");
        login(data.token); // persist token + update auth state
        setSuccessMsg("Login successful! Redirecting...");
        setTimeout(() => onClose(), 1000);
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/30">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>

        <p className="text-sm text-center mb-4 text-black">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setSuccessMsg("");
              setErrorMsg("");
            }}
            className="text-orange-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <hr className="w-full mb-4 border-gray-300" />

        {successMsg && (
          <p className="text-green-600 text-sm font-bold text-center mb-3">
            {successMsg}
          </p>
        )}
        {errorMsg && (
          <p className="text-red-600 text-sm font-bold text-center mb-3">
            {errorMsg}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className="text-black font-semibold">Full Name</label>
              <input
                name="fullname"
                type="text"
                placeholder="John/Jane Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
                value={form.fullname}
                onChange={handleChange}
              />
            </>
          )}

          <label className="text-black font-semibold">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email@gmail.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label className="text-black font-semibold">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            required
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
