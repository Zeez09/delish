import React from 'react'
import NavBar4 from "../components/NavBar4"
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import { Link } from 'react-router-dom'
import { Phone, MapPinCheckInside, Clock4, User, Mail, ChevronDown, ArrowRight } from 'lucide-react'
import Footer1 from '../components/Footer1'

const ContactUs = () => {
  return (
    <div>
      <NavBar4 />

      
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">CONTACT US</h1>
          <div className='flex font-bold gap-2'>
            <Link to="/"> <p>HOME /</p> </Link>
            <Link to="/contact-us"><span> CONTACT US</span></Link>
          </div>
          <h2 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-700">GET IN TOUCH</h2>
        </div>
      </div>

      
      <div className="bg-gray-400 w-full py-10 flex justify-center lg:justify-start">
  <div className=" bg-white w-full max-w-xl p-6 sm:p-10 shadow-lg flex flex-col gap-6 mx-auto lg:ml-24 lg:mx-0">
    <h1 className='font-bold text-3xl'>OFFICE INFORMATION</h1>
            <p className='text-gray-600'>Completely recapitalize 24/7 communities via standards<br className='hidden sm:block' /> compliant metrics whereas.</p>

            <div className='flex flex-col space-y-5'>
              
              <div className='flex gap-4 items-center'>
                <div className='w-12 h-12 border border-gray-300 flex items-center justify-center'>
                  <Phone size={22} className='text-orange-700' />
                </div>
                <div>
                  <h1 className='font-semibold text-xl'>Phone Number & Email</h1>
                  <p className='text-gray-600'>+(310) 2591 21563</p>
                  <span className='text-gray-600'>help-delish@gmail.com</span>
                </div>
              </div>
              <hr className='border-gray-200' />

              
              <div className='flex gap-4 items-center'>
                <div className='w-12 h-12 border border-gray-300 flex items-center justify-center'>
                  <MapPinCheckInside size={22} className='text-orange-700' />
                </div>
                <div>
                  <h1 className='font-semibold text-xl'>Our Office Address</h1>
                  <p className='text-gray-600'>258 Dancing Street, Miland Line,<br />HUYI 21563, NewYork</p>
                </div>
              </div>
              <hr className='border-gray-200' />

             
              <div className='flex gap-4 items-center'>
                <div className='w-12 h-12 border border-gray-300 flex items-center justify-center'>
                  <Clock4 size={22} className='text-orange-700' />
                </div>
                <div>
                  <h1 className='font-semibold text-xl'>Official Work Time</h1>
                  <p className='text-gray-600'>7:00am - 6:00pm ( Mon - Fri )</p>
                  <p className='text-gray-600'>Sat, Sun & <span className='text-orange-700'>Holiday Closed</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      
      <div className="w-full py-16">
        <div className="bg-gray-200 max-w-6xl mx-auto p-6 sm:p-10 flex flex-col items-center gap-6">
          <div className='text-center space-y-4'>
            <h1 className='font-bold text-3xl sm:text-5xl'>LEAVE A MESSAGE</h1>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit curae quis libero erat,<br className='hidden sm:block' />
              justo in habitasse aliquet mi. Condimentum inceptos euismod eu nunc ad nisl fermentum erat gravida
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                <User size={18} />
              </button>
            </div>

            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Select Subject"
              className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
              <ChevronDown size={18} />
            </button>
          </div>

          <div className="relative w-full">
            <textarea
              placeholder="Type Your Message"
              className="w-full bg-white text-black p-4 placeholder-gray-400 focus:outline-none min-h-[150px]"
            />
          </div>

          <button className="flex items-center justify-center gap-2 text-white bg-orange-700 px-5 py-3 w-full text-sm font-bold">
            SUBMIT MESSAGE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      
      <div className='w-full bg-gray-400 text-white p-6 sm:p-16'>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='text-center lg:text-left'>
            <h1 className='font-bold'>BOOK A TABLE FOR YOU AND YOUR FAMILY MEMBERS</h1>
            <p className='text-2xl sm:text-3xl font-bold'>NEED A TABLE ON COFFEE HOUSE</p>
          </div>
          <button className='border border-white px-6 py-2 text-sm'>
            BOOK A TABLE
          </button>
        </div>
      </div>

     
      <Footer1 />

      
      <div className="w-full bg-black py-6 text-white text-sm">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4">
          <hr className="w-full border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p>© {new Date().getFullYear()} Delish. All Rights Reserved.</p>
            <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <li className="cursor-pointer">Terms of Use</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
