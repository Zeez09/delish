import React from 'react';
import logo from "../assets/images/Vector.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Send } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between md:items-start items-center gap-10 px-4">

        
        <div className="flex flex-col text-center md:text-left items-center md:items-start w-full sm:w-auto">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">DELISH</span>
          </div>

          <hr className="border-gray-600 my-4 w-full max-w-[200px] mx-auto md:mx-0" />
          <p className="text-sm text-gray-300">
            1234, Restaurant St, South City <br />
            New York 0124
          </p>

          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-orange-700 transition group"
              >
                <Icon className="text-black text-lg group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col text-center md:text-left items-center md:items-start w-full sm:w-auto">
          <h1 className="font-bold text-lg">LINKS</h1>
          <ul className="mt-5 space-y-2 text-sm text-gray-300">
            <li><Link to='/about-us' className="hover:text-orange-600">About us</Link></li>
            <li className="hover:text-orange-600">Meet our team</li>
            <li className="hover:text-orange-600">Case stories</li>
            <li className="hover:text-orange-600">Latest News</li>
            <li className="hover:text-orange-600">Contact</li>
          </ul>
        </div>

        
        <div className="flex flex-col text-center md:text-left items-center md:items-start w-full sm:w-auto">
          <h1 className="font-bold text-lg">OTHER LINKS</h1>
          <ul className="mt-5 space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-600">Careers</li>
            <li className="hover:text-orange-600">Creative Agency</li>
            <li className="hover:text-orange-600">Digital Agency</li>
            <li className="hover:text-orange-600">Marketing</li>
            <li className="hover:text-orange-600">Digital Services</li>
          </ul>
        </div>

        
        <div className="flex flex-col w-full sm:w-auto max-w-md">
          <h1 className="font-bold text-lg">NEWSLETTER</h1>
          <p className="mt-5 text-sm text-gray-300 text-center md:text-left">
            Subscribe to receive our offers and updates <br className="hidden sm:block" />
            directly in your inbox
          </p>

          <div className="relative w-full mt-5">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full bg-gray-900 text-white p-4 pr-12 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition"
              aria-label="Send"
            >
              <Send size={18} strokeWidth={2} className="text-white" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer1;
