import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom"
import { FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import AuthModal from "../components/AuthModal"
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
      { label: "ABOUT", path: "/about" },
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
]

const NavBar2 = () => {
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState({})
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({})

  const { isLoggedIn, logout } = useAuth();

  const toggleDropdown = (label) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  const toggleMobileDropdown = (label) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <div className="text-white text-xs px-4 md:px-16 py-4 relative z-50">
      <div className="max-w-6xl mx-auto bg-black px-4 relative z-30">

        
        <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt />
            <p>Silk St, Barbican, London EC2Y 8DS, UK</p>
          </div>
          <ul className="flex gap-4 text-sm">
            <li>Find a Store</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        
        <div className='flex justify-between items-center bg-orange-700 py-3 px-4 rounded'>
          <div className='md:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
          </div>

          <div className='hidden md:flex items-center gap-2'>
            <span>EN - IT</span>
          </div>

          <div className='font-bold text-2xl'>DELISH</div>

          <div className='hidden md:block'>
            <Link to="/book-table">
              <button className='border border-white px-4 py-2 hover:cursor-pointer'>BOOK A TABLE</button>
            </Link>
          </div>
        </div>

        
        <div className='flex justify-between items-center'>
          <ul className="hidden md:flex gap-6 text-sm font-bold items-center py-4">
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
                        className={`text-xs transition-transform ${dropdownOpen[link.label] ? 'rotate-180' : ''}`}
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
          </ul>

          
          <div className="hidden md:flex gap-4 text-xl items-center pr-4">
            <FiSearch className='hover:cursor-pointer'/>

            
            {!isLoggedIn ? (
              <button
                onClick={() => setShowModal(true)}
                className="text-xl text-orange-700 hover:text-orange-900 hover:cursor-pointer"
                title="Login / Sign Up"
              >
                <FiUser />
              </button>
            ) : (
              <>
                <FiUser title="Logged in" />
                <button
                  onClick={logout}
                  className="text-xs border border-white px-3 py-1 rounded hover:bg-white/10 transition hover:cursor-pointer"
                  title="Logout"
                >
                  Logout
                </button>
              </>
            )}

            <AiOutlineHeart className='hover:cursor-pointer'/>
            <FiShoppingCart className='hover:cursor-pointer'/>
          </div>
        </div>

        
        {isOpen && (
          <div className="absolute top	full left-0 w-full bg-black p-4 space-y-4 z-40 border-t border-gray-700 mt-2 md:hidden">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="flex justify-between w-full text-sm font-bold capitalize"
                    >
                      <span>{link.label}</span>
                      <FaChevronDown className={`transition-transform ${mobileDropdownOpen[link.label] ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileDropdownOpen[link.label] && (
                      <div className="mt-2 ml-4 space-y-2">
                        {link.children.map((child, idx) => (
                          <Link
                            key={idx}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className="block text-sm"
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
                    className="block text-sm font-bold capitalize"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile right icons */}
            <div className="flex gap-4 text-xl items-center pt-4 border-t border-gray-700">
              <FiSearch />
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setShowModal(true);
                    setOpen(false);
                  }}
                  className="text-xl text-orange-700 hover:text-orange-900"
                  title="Login / Sign Up"
                >
                  <FiUser />
                </button>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="text-xs border border-white px-3 py-1 rounded hover:bg-white/10 transition"
                  title="Logout"
                >
                  Logout
                </button>
              )}
              <AiOutlineHeart />
              <FiShoppingCart />
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  )
}

export default NavBar2
