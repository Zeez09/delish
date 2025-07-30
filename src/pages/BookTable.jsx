import React from 'react'
import { Link } from 'react-router-dom'
import NavBar4 from '../components/NavBar4'
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import bgvector from "../assets/images/bg-vector.png"
import { MoveRight } from 'lucide-react'
import chicken from "../assets/images/Fried Chicken and Jam on Table.jpeg"
import wings from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import Footer1 from '../components/Footer1'

const BookTable = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">BOOK A TABLE</h1>
          <div className='flex font-bold gap-2'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/book-table"><span>BOOK A TABLE</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">RESERVATION</h2>

          
        </div>
        
        
    </div>
      
    </div>

    <div className="relative">
  <div className="w-full h-auto bg-orange-50 relative overflow-hidden z-10">
    <img
      src={bgvector}
      alt="Decorative Vector"
      className="absolute inset-0 w-full h-full object-cover bg-black"
    />

    <div className="relative z-20 max-w-6xl mx-auto px-4 py-20 space-y-6">
      <form className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">NUMBER OF GUEST *</label>
          <select className="bg-black border border-white text-white px-4 py-2 w-full">
            <option>Person</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">SELECT DATE *</label>
          <select className="bg-black border border-white text-white px-4 py-2 w-full">
            <option>Date</option>
          </select>
        </div>

        <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">SELECT TIME *</label>
          <select className="bg-black border border-white text-white px-4 py-2 w-full">
            <option>Time</option>
          </select>
        </div>


      </form>

      <form className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">YOUR NAME *</label>
          <input type="text" placeholder='what is your name' className='border border-white py-2 text-white p-2'/>
          </div>

          <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">EMAIL ADDRESS *</label>
          <input type="text" placeholder='email@gmail.com' className='border border-white py-2 text-white p-2'/>
          </div>

          <div className="flex flex-col text-sm w-full">
          <label className="mb-1 text-white font-semibold">PHONE NUMBER *</label>
          <input type="text" placeholder='+234' className='border border-white py-2 text-white p-2'/>
          </div>
          </form>

          <div className="flex flex-col text-sm w-full">
  <label htmlFor="specialMessage" className="mb-1 text-white font-semibold">
    TYPE YOUR SPECIAL MESSAGE *
  </label>
  <textarea
    id="specialMessage"
    name="specialMessage"
    required
    placeholder="Tell us more about your special message"
    className="border border-white bg-transparent text-white placeholder-gray-600 p-3 resize-none min-h-[120px]"
  ></textarea>
</div>

<button className="flex mx-auto group px-6 py-2 items-center gap-2 text-white bg-orange-700 font-bold">
          <p>BOOK A TABLE</p>
          <div className="relative flex items-center h-1">
            <span className="inline-block w-4 h-px bg-white transform group-hover:translate-x-1 transition-transform duration-300"></span>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 transform text-xs transition-transform duration-300 group-hover:translate-x-1">
  <MoveRight size={10}/>
</span>

          </div>
        </button>
        

    </div>
  </div>
</div>

<div className="relative w-full bg-white mt-16 ">
      <div className="flex flex-col md:flex-row-reverse gap-12 items-center max-w-6xl mx-auto">
      <div className='flex-1 w-full space-y-6'>
        <div className="w-full border border-gray-200 p-4  space-y-2">
  <h1 className="font-semibold text-2xl">OPENING HOURS</h1>
  <p className='text-gray-600'>Lunch: 12PM – 3PM</p>
  <p className='text-gray-600'>Dinner: 7PM – 2AM (Last Order At 11:30Pm)</p>
</div>

<div className="w-full border border-gray-200 p-4  space-y-2">
  <h1 className="font-semibold text-2xl">VISIT HOUR RESTAURANT</h1>
  <p className='text-gray-600'>Eight Avenue, NY,</p>
  <p className='text-gray-600'>T. +12 344 0567899<br/>M.fidalgo@example.com</p>
</div>


        </div>

<div className='flex-1 flex items-center justify-center relative'>
  <img src={wings} alt="" className='h-[600px] object-cover' />
  <img src={chicken} alt="" className='h-40 absolute top-[50%] right-0' />
</div>



       

      </div>
    </div>

    <div className='w-full bg-gray-400 h-auto text-white p-16 mt-16'>
  <div className='max-w-6xl mx-auto flex flex-row items-center justify-between'>
    <div className='flex flex-col'>
      <h1 className='font-bold'>BOOK A TABLE FOR YOU AND YOUR FAMILY MEMBERS</h1>
      <p className='text-4xl font-bold'>NEED A TABLE ON COFFEE HOUSE</p>

    </div>
    <button className='border border-white px-6 py-2 text-sm'>
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
  )
}

export default BookTable
