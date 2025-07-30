import React from 'react'
import { Link } from 'react-router-dom'
import NavBar4 from '../components/NavBar4'
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import dessert from "../assets/images/7829843634132f33477fad4cee90b71e5ec3ade8ee28_b.jpg"
import risotto from "../assets/images/depositphotos_150376448-stock-photo-soy-honey-glazed-salmon-and.jpg"
import braised from "../assets/images/depositphotos_175773010-stock-photo-italian-snack-fried-balls-from.jpg"
import salmon from "../assets/images/depositphotos_211543316-stock-photo-honey-glazed-fillet-salmon-orange.jpg"
import salad from "../assets/images/depositphotos_632623250-stock-photo-honey-garlic-glazed-salmon.jpg"
import vegetable from "../assets/images/depositphotos_70859561-Healthy-vegetarian-meal.jpg"
import blog from "../assets/images/depositphotos_29967179-african-female-chef-garnishing-spaghetti-dish.jpg"
import { MessagesSquare, ArrowRight } from "lucide-react"
import Footer1 from '../components/Footer1'




const menu1 = [

  {img: dessert, title: "Wild Mushroom Aranchi"},
  {img: risotto, title: "Truffle Mushroom Risotto"},
  {img: braised, title: "Braised Short Ribs"},
  {img: braised, title: "Braised Short Ribs"},
  
]

const menu2 = [
  {img: salmon, title: "Honey Glazed Salmon"},
  {img: salad, title: "Mediterranean Quinoa Salad"},
  {img: vegetable, title: "Roasted Vegetable Platter"},
  {img: vegetable, title: "Roasted Vegetable Platter"}
]

const Menu = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">FOOD MENU PAGE</h1>
          <div className='flex gap-2 font-bold'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/food-gallery"><span>MENU PAGE</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">OUR FOOD MENU
</h2>


          
        </div>
        
        
    </div>
      
    </div>

    <div className="w-full bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
  <div className="max-w-6xl flex flex-col items-center mx-auto space-y-4">

    <div className="w-full bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10 overflow-x-hidden">
  <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
    
    <div className="flex flex-col md:flex-col lg:flex-row justify-between w-full gap-6 mt-10">
      
      
      <div className="flex flex-col gap-4 w-full md:w-full ">
        {menu1.map((menu1, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-6 rounded w-full">
            <img src={menu1.img} alt="" className="w-20 h-20 rounded-full object-cover" />
            <div className="flex flex-col w-full font-light">
              <div className="flex items-center">
                <span className="text-lg font-bold">{menu1.title}</span>
                <div className="flex-1 border-b-2 border-dashed border-orange-700 mx-2 h-[1px] opacity-50"></div>
                <span className="text-orange-700 font-semibold text-lg">$15.00</span>
              </div>
              <span className="text-gray-600 text-sm">
                Ricotta, goat cheese, beetroot and dateline
              </span>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex flex-col gap-4 w-full md:w-full">
        {menu2.map((menu2, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-6 rounded w-full">
            <img src={menu2.img} alt="" className="w-20 h-20 rounded-full object-cover" />
            <div className="flex flex-col w-full font-light">
              <div className="flex items-center">
                <span className="text-lg font-bold">{menu2.title}</span>
                <div className="flex-1 border-b-2 border-dashed border-orange-700 mx-2 h-[1px] opacity-50"></div>
                <span className="text-orange-700 font-semibold text-lg">$15.00</span>
              </div>
              <span className="text-gray-600 text-sm">
                Ricotta, goat cheese, beetroot and dateline
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>

  </div>
</div>


<div className="w-full bg-black p-6 sm:p-10 md:p-20">
  <div className="max-w-6xl flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 mx-auto text-white">
    
    <div className="flex flex-col space-y-2 min-w-0">
      <h1 className="font-semibold text-3xl">BOOK A TABLE</h1>
      <p className="text-sm font-semibold whitespace-nowrap">
  Book An Open Table For Your Happy Time Spent
</p>

    </div>

    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full lg:ml-32">

      
      <div className="flex flex-col text-sm w-full">
        <select className="bg-black border border-white px-4 py-2 w-full">
          <option>Person</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="flex flex-col text-sm w-full">
        <select className="bg-black border border-white px-4 py-2 w-full">
          <option>Date</option>
        </select>
      </div>

      <div className="flex flex-col text-sm w-full">
        <select className="bg-black border border-white px-4 py-2 w-full">
          <option>Time</option>
        </select>
      </div>

      <div className="flex items-end w-full">
        <button
          type="submit"
          className="font-semibold bg-orange-700 text-white px-4 py-2 hover:bg-orange-800 transition hover:cursor-pointer w-full"
        >
          SUBMIT
        </button>
      </div>

    </form>
  </div>
</div>


<div className='w-full h-auto mt-16 pb-16 overflow-x-hidden'>
  <div className='max-w-6xl flex flex-col items-center mx-auto space-y-4 px-4'>

    <button className="text-white bg-orange-800 rounded-xl px-5 py-2 mt-16">
      MAKE RESERVATION
    </button>

    <h1 className="font-bold text-3xl text-center">LATEST BLOG INSIGHTS</h1>

    <div className="w-px h-8 bg-orange-800"></div>

    <div className="flex items-center gap-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-orange-800 rotate-45" />
      ))}
    </div>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-10">
      <div className="relative bg-gray-400 h-92 md:h-[350px]">
        <div className="absolute top-4 left-4 bg-orange-700 text-white p-4 text-center">
          <p className="text-lg font-bold leading-tight">09</p>
          <p className="text-xs">DEC</p>
        </div>
        </div>
        
        <div className="bg-gray-300 p-8 flex flex-col">
        <div>
          <div className="flex items-center gap-4">
            <img src={blog} alt="" className='w-12 h-12 rounded-full'/>
            <span className='font-bold'>MARKUS DANIEL</span>
            <span className="flex items-center gap-1 font-semibold">
            <span className="text-orange-700"><MessagesSquare className='fill-orange-700'/></span> 2 COMMENT
            </span>
            </div>
            <h2 className="font-bold text-2xl mt-10">HOW RESTAURANTS FOSTER CONNECTIONS<br/> AND CREATE MEMORIES</h2>
            </div>
            <button className="text-orange-700 border border-orange-700 px-4 py-2 mt-10 flex items-center justify-between gap-2 text-xl w-fit bg-amber-50 font-bold">
         READ MORE 
         <span className="flex items-center gap-2">
       <span className="w-10 h-px bg-orange-700"></span>
         <span><ArrowRight size={16}/></span>
         </span>
       </button>
     </div>
   
     
     <div className="bg-gray-200 p-6 flex flex-col justify-between">
       <div>
         <div className="flex items-center gap-4">
           <img src={blog} alt="" className='w-12 h-12 rounded-full'/>
           <span className='font-bold'>MARKUS DANIEL</span>
           <span className="flex items-center gap-1 font-semibold">
             <span className="text-orange-700"><MessagesSquare className='fill-orange-700'/></span> 2 COMMENT
           </span>
         </div>
         <h2 className="font-bold text-2xl mt-10">
           DISCOVERING AFFORDABLE GOURMET<br/> EXPERIENCES IN YOUR CITY
         </h2>
       </div>
        <button className="text-orange-700 border border-orange-700 px-4 py-2 mt-10 flex items-center justify-between gap-2 text-xl w-fit bg-amber-50 font-bold">
         READ MORE 
         <span className="flex items-center gap-2">
       <span className="w-10 h-px bg-orange-700"></span>
         <span><ArrowRight size={16}/></span>
         </span>
       </button>
     </div>
   
    
     <div className="relative bg-gray-400 h-92 md:h-[350px]">
       <div className="absolute top-4 left-4 bg-orange-700 text-white p-4 text-center">
         <p className="text-lg font-bold leading-tight">09</p>
         <p className="text-xs">DEC</p>
       </div>
     </div>
   </div>
  </div>
</div>


 <div className='w-full bg-gray-400 h-auto text-white p-16'>
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

export default Menu
