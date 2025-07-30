import React, { useState } from 'react';
import logo from "../assets/images/Vector.png";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { FaChevronDown } from 'react-icons/fa';
import AuthModal from '../components/AuthModal';
import { CircleUserRound } from 'lucide-react';
import { useAuth } from "../context/useAuth"; 

const navLinks = [
  {
    label: "HOME",
    path: "/home",
    children: [
      { label: "HOME-TWO", path: "/home-two" },
      { label: "HOME-THREE", path: "/home-three" },
    ],
  },
  {
    label: "PAGES",
    path: "/pages",
    children: [
      { label: "", path: "/" },
      { label: "OUR-TEAM", path: "/team" },
      { label: "FOOD-GALLERY", path: "/food-gallery" },
    ],
  },
  {
    label: "SHOP",
    path: "/shop",
    children: [
      { label: "MENU", path: "/menu" },
      { label: "SHOP", path: "/shop" },
      { label: "SHOP-DETAILS", path: "/shop-details" },
    ],
  },
  {
    label: "BLOG",
    path: "/blog",
    children: [
      { label: "Latest Posts", path: "/blog" },
      { label: "Featured", path: "/featured" },
    ],
  },
  {
    label: "CONTACT",
    path: "/contact",
    children: null,
  },
];

const NavBar3 = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // ✅ added missing state
  const [isOpen, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false); 

  const { isLoggedIn, logout } = useAuth(); 

  const toggleDropdown = (label) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setAuthMode("login");
      setShowModal(true); 
    } else {
      setShowProfileMenu((prev) => !prev); 
    }
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    logout(); 
  };

  return (
    <div>
      <nav className='flex items-center justify-between w-full px-4 md:px-16 h-[96px] text-white bg-black relative'>
        
        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='w-7 h-7' />
          <span className='font-semibold text-2xl'>DELISH</span>
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-bold items-center relative">
          {navLinks.map((link, index) => (
            <li key={index} className="relative capitalize">
              {link.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 focus:outline-none hover:cursor-pointer hover:text-amber-500 transition"
                  >
                    {link.label}
                    <FaChevronDown
                      className={`text-xs mt-[2px] transition-transform ${dropdownOpen[link.label] ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen[link.label] && (
                    <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-md z-20 w-44">
                      {link.children.map((child, idx) => (
                        <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                          <Link to={child.path}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.path} className='hover:text-amber-500 transition'>{link.label}</Link>
              )}
            </li>
          ))}

          
          <li className="relative">
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-2 text-sm font-bold hover:text-amber-500 transition"
            >
              <CircleUserRound size={20} />
              <span>{isLoggedIn ? "PROFILE" : "LOGIN / SIGN UP"}</span>
              {isLoggedIn && (
                <FaChevronDown
                  className={`text-xs mt-[2px] transition-transform ${showProfileMenu ? 'rotate-180' : ''}`}
                />
              )}
            </button>

            
            {isLoggedIn && showProfileMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md z-30 w-48">
                <Link
                  to="/account"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  My Account
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  My Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>

        
        <div className="md:hidden z-20">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </nav>

      
      {isOpen && (
        <div className="md:hidden mt-4 border-t border-gray-700 pt-4 space-y-4 px-4">
          <div className="flex items-center gap-2 text-sm text-white mb-4">
            {!isLoggedIn ? (
              <button
                onClick={() => { setAuthMode("login"); setShowModal(true); setOpen(false); }}
                className="flex items-center gap-2 text-white text-sm font-bold hover:text-amber-500 transition"
              >
                <CircleUserRound size={20} />
                <span>LOGIN / SIGN UP</span>
              </button>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <CircleUserRound size={20} />
                  <span className="font-bold">PROFILE</span>
                </div>
                <button
                  onClick={() => { handleLogout(); setOpen(false); }}
                  className="text-sm border border-amber-600 px-3 py-1 rounded hover:bg-amber-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {navLinks.map((link, index) => (
            <div key={index}>
              {link.children ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="flex justify-between w-full text-sm font-bold capitalize text-white"
                  >
                    <span>{link.label}</span>
                    <FaChevronDown className={`transition-transform ${mobileDropdownOpen[link.label] ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen[link.label] && (
                    <div className="mt-2 space-y-2 ml-4">
                      {link.children.map((child, idx) => (
                        <Link
                          key={idx}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className="block text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-bold capitalize text-white"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Link to="/book-table">
            <button
              className="mt-2 w-full border border-amber-600 py-2 text-sm rounded hover:bg-amber-600 transition text-white"
              onClick={() => setOpen(false)}
            >
              BOOK A TABLE
            </button>
          </Link>
        </div>
      )}

      
      {showModal && (
        <AuthModal
          mode={authMode}
          setAuthMode={setAuthMode}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default NavBar3;
