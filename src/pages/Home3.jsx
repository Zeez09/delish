import React from 'react'
import NavBar3 from '../components/NavBar3'
import bgImage from '../assets/images/alex-haney-CAhjZmVk5H4-unsplash.jpg'
import freshproducts from "../assets/images/depositphotos_120682470-Selection-of-fresh-products-from-farmers-market.jpg"
import skilledchefs from "../assets/images/depositphotos_10674566-Chef-decorating-dessert.jpg"
import drinkswine from "../assets/images/depositphotos_5036007-Cocktails-variations-Martini-Malibu-margarita.jpg"
import freshfoods from "../assets/images/depositphotos_70859561-Healthy-vegetarian-meal.jpg"
import chicken from "../assets/images/Fried Chicken and Jam on Table.jpeg"
import wings from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import dessert from "../assets/images/7829843634132f33477fad4cee90b71e5ec3ade8ee28_b.jpg"
import { Check, Star, UserPen, Tags, MoveRight } from "lucide-react"
import FoodMenu2 from '../components/FoodMenu2'
import footimg from "../assets/images/depositphotos_240618200-stock-photo-roasted-chicken-wings-barbecue-sauce.jpg"
import vector1 from "../assets/images/Vector (1).svg"
import vector2 from "../assets/images/Vector (2).svg"
import vector3 from "../assets/images/Vector (3).svg"
import vector14 from "../assets/images/Vector 14.png"
import feedback from "../assets/images/Image2.png"
import restaurant from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import asian from "../assets/images/depositphotos_411408240-stock-photo-asian-woman-sitting-separated-restaurant.jpg"
import fineappearance from "../assets/images/depositphotos_581910094-stock-photo-luxury-table-settings-fine-dining.jpg"
import Footer1 from '../components/Footer1'
import { Link } from "react-router-dom"


const products = [
  {img: freshproducts, name: "FRESH PRODUCTS"},
  {img: skilledchefs, name: "SKILLED CHEFS"},
  {img: drinkswine, name: "DRINKS & WINE"},
  {img: freshfoods, name: "FRESH FOODS"}
]

const menu1 = [

  {img: dessert, title: "Wild Mushroom Aranchi"},
  {img: dessert, title: "Truffle Mushroom Risotto"},
  {img: dessert, title: "Braised Short Ribs"},
  
]

const menu2 = [
  {img: dessert, title: "Honey Glazed Salmon"},
  {img: dessert, title: "Mediterranean Quinoa Salad"},
  {img: dessert, title: "Roasted Vegetable Platter"}
]

const Home3 = () => {
  return (
    <div>

    <div className="w-full bg-black text-white">
      
      <div className="bg-orange-700 w-full text-xs px-4 md:px-16 py-4 hidden md:block">
        <div className="flex justify-between text-[10px] md:text-xs">
          <div className="flex gap-6">
            <h1>Mon‑Wed: 11a‑9p</h1>
            <ul className="list-disc">
              <li className="marker:text-gray-600">Thurs‑Sat: 11a‑10p</li>
            </ul>
          </div>
          <div className="flex gap-10">
            <h3>reservations@delish.com</h3>
            <ul className="list-disc flex gap-5">
              <li className="marker:text-gray-600">123 456 7899</li>
              <li className="marker:text-gray-600">296 Rideo Avenue Mor Berlin 251584</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="flex w-full relative">
        
<div className="flex-1">
  <div className="max-w-6xl mx-auto px-4 md:px-16 py-4">
    <NavBar3 hideButtons />

    <div className="pt-12 pb-16 space-y-6 max-w-2xl ml-auto">
      <p className="uppercase tracking-wide text-sm text-gray-300">
        We serve food, harmony, & laughter since 1998
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Delicious Foods with <br /> Wonderful Eating
      </h1>
      <Link to="/menu"><button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition hover:cursor-pointer">
        VIEW FOOD MENU
      </button></Link>
    </div>
  </div>
</div>


       
        <div className="w-[40%] relative h-[420px] hidden lg:block">
          <img src={bgImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 flex gap-4 z-30">
            <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
              ORDER ONLINE
            </button>
            <button className="bg-orange-700 text-white px-4 py-2 text-sm font-semibold">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>

     
      
<div className="max-w-6xl mx-auto px-4 py-20">
  <h2 className="font-semibold text-lg mb-4">Book a Table</h2>
  <hr className="border-gray-700 mb-6" />

  <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">

    <div className="flex flex-col text-sm w-full">
      <label className="mb-1 text-gray-300">Number of Guest *</label>
      <select className="bg-black border border-white px-4 py-2 w-full">
        <option>Person</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>

    
    <div className="flex flex-col text-sm w-full">
      <label className="mb-1 text-gray-300">Select Date *</label>
      <select className="bg-black border border-white px-4 py-2 w-full">
        <option>Date</option>
      </select>
    </div>


    <div className="flex flex-col text-sm w-full">
      <label className="mb-1 text-gray-300">Select Time *</label>
      <select className="bg-black border border-white px-4 py-2 w-full">
        <option>Time</option>
      </select>
    </div>

    
    <div className="flex items-end w-full">
      <button
        type="submit"
        className="bg-orange-700 text-white w-full px-4 py-3 hover:bg-orange-800 transition"
      >
        BOOK RESERVATION
      </button>
    </div>
  </form>
</div>



    </div>

    <div className="max-w-6xl mx-auto px-4 mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded overflow-hidden"
      >
        <img
          src={product.img}
          alt=""
          className="w-full h-64 object-cover"
        />

        <div className="p-6 text-black bg-blue-50 space-y-4">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <p className="text-sm font-semibold text-gray-600">
            For each dish, the growth of every <br /> element & the selection
          </p>
          <button className="text-orange-700 underline underline-offset-6 font-bold text-sm">
            BOOK A TABLE
          </button>
        </div>
      </div>
    ))}

  </div>
</div>

    

    <div className="relative w-full bg-white mt-16">
  <div className="flex flex-col md:flex-row gap-6 items-center max-w-6xl mx-auto px-4 py-8">

    
    <div className="flex-1 w-full space-y-6">
      <button className="text-white bg-orange-700 rounded-xl px-5 py-2 text-sm font-semibold">
        MAKE RESERVATIONS
      </button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        ENJOY AN EXCEPTIONAL<br />JOURNEY OF TASTE
      </h1>

      <p className="text-gray-500 mt-6 text-sm leading-relaxed text-left">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien
        mattis nulla litora proin purus varius, pulvinar diam netus volutpat morbi
        magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis
        integer, feugiat aptent netus gravida enim neque posuere penatibus, sed
        imperdiet maecenas venenatis scelerisque consequat tempus mauris.
      </p>

      <button className="text-white bg-orange-700 px-5 py-4 mt-5 font-semibold">
        EXPLORE OUR CATEGORY
      </button>
    </div>

    
    <div className="flex-1 flex items-center justify-center relative w-full">
      <img
        src={wings}
        alt=""
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
      <img
        src={chicken}
        alt=""
        className="h-24 sm:h-32 md:h-40 absolute top-[50%] left-0 transform -translate-y-1/2"
      />
    </div>

  </div>
</div>


    <div class="flex flex-col items-center justify-center w-full bg-gray-900 py-16 px-4 mt-16">
  <div class="text-center space-y-6 mt-16">
    <button class="text-white bg-orange-700 rounded-xl px-4 py-2 text-sm">
      CRISPY, EVERY BITE TASTE
    </button>
    <h1 class="text-white font-bold text-3xl sm:text-4xl leading-tight">
      LOOKING FOR POPULAR<br />FAST FOOD
    </h1>
    <div class="flex justify-center">
      <button class="hidden md:flex group border border-white px-6 py-2 items-center gap-2 text-white">
        <p>READ MORE</p>
        <div class="relative flex items-center h-1">
          <span class="inline-block w-6 h-px bg-white transform group-hover:translate-x-1 transition-transform duration-300"></span>
          <span class="absolute -right-4 top-1/2 -translate-y-1/2 text-xs transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </button>
    </div>
  </div>
</div>


<div className="w-full bg-gray-100">
  <div className="max-w-6xl flex flex-col items-center mx-auto space-y-4 pb-28 px-4">
    <button className="text-white bg-orange-700 rounded-xl px-5 py-2 text-sm mt-16">
      MAKE RESERVATION
    </button>

    <h1 className="font-bold text-3xl text-center">DISCOVER OUR CATEGORY</h1>
    <div className="w-px h-8 bg-orange-700"></div>

    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-700 rotate-45" />
        ))}
      </div>
    </div>

    
    <div className="flex flex-col md:flex-row justify-between w-full gap-6 mt-10">
      
      
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {menu1.map((item, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-3 sm:p-4 rounded w-full">
            <img src={item.img} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
            <div className="flex flex-col w-full text-xs sm:text-sm">
              <div className="flex items-center w-full gap-2">
                <span className="font-semibold whitespace-nowrap truncate text-sm sm:text-base">
                  {item.title}
                </span>
                <div className="flex-1 border-b-2 border-dashed border-orange-700 opacity-50"></div>
                <span className="text-orange-700 font-semibold whitespace-nowrap text-sm sm:text-base">
                  $15.00
                </span>
              </div>
              <p className="text-gray-600 mt-1 leading-snug truncate sm:whitespace-normal">
                Ricotta, goat cheese, beetroot and dateline
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {menu2.map((item, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-3 sm:p-4 rounded w-full">
            <img src={item.img} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
            <div className="flex flex-col w-full text-xs sm:text-sm">
              <div className="flex items-center w-full gap-2">
                <span className="font-semibold whitespace-nowrap truncate text-sm sm:text-base">
                  {item.title}
                </span>
                <div className="flex-1 border-b-2 border-dashed border-orange-700 opacity-50"></div>
                <span className="text-orange-700 font-semibold whitespace-nowrap text-sm sm:text-base">
                  $15.00
                </span>
              </div>
              <p className="text-gray-600 mt-1 leading-snug truncate sm:whitespace-normal">
                Ricotta, goat cheese, beetroot and dateline
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>



<div className="bg-black w-full relative p-8 sm:p-12 lg:p-16 pb-32 min-h-screen">
  <div className="absolute bottom-0 left-0 w-full bg-orange-700 z-0">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white pb-28 items-center mt-100">
        
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl">15</h1>
          <div className="flex flex-col leading-tight">
            <p className="text-sm">NEW</p>
            <span className="text-sm">COOL PROJECTS</span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl">15</h1>
          <div className="flex flex-col leading-tight">
            <p className="text-sm">TOTAL</p>
            <span className="text-sm">AWARDS WIN</span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl">20</h1>
          <div className="flex flex-col leading-tight">
            <p className="text-sm">UNIQUE</p>
            <span className="text-sm">FOOD SPECIALITIES</span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl">69</h1>
          <div className="flex flex-col leading-tight">
            <p className="text-sm">HARD</p>
            <span className="text-sm">TEAM MEMBERS</span>
          </div>
        </div>
      </div>
    </div>
  </div>

 
  <div className="max-w-6xl w-full mx-auto relative z-20 px-4">
    <div className="bg-white w-full md:w-4/5 p-6 sm:p-10 space-y-6 shadow-lg flex flex-col transform translate-y-[10%]">
      <button className="self-start text-white bg-orange-700 rounded-xl px-5 py-2 text-sm">
        MAKE RESERVATION
      </button>

      <h1 className="font-bold text-2xl sm:text-3xl">
        MOST TRUSTED RESTAURANT
      </h1>

      <p className="text-sm text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipiscing elit netus sagittis
        aenean malesuada, velit sodales hendrerit lacus iaculis porta lobortis
        sollicitudin quisque dictum porttitor donec...
      </p>

      
      <div className="flex flex-col gap-4">
  <div className="flex items-start text-gray-500 bg-gray-200 p-4 bg-gradient-to-r from-gray-200 to-white">
    <Check className="text-orange-700 mt-1 mr-2 min-w-[16px]" />
    <p className="text-sm sm:text-base leading-snug">
      Analyzing Restaurant Customer Feedback for Enhanced Dining Experiences
    </p>
  </div>

  <div className="flex items-start text-gray-500 bg-gray-200 p-4 bg-gradient-to-r from-gray-200 to-white">
    <Check className="text-orange-700 mt-1 mr-2 min-w-[16px]" />
    <p className="text-sm sm:text-base leading-snug">
      Leveraging Customer Reviews to Elevate Your Restaurant's Reputation
    </p>
  </div>

  <div className="flex items-start text-gray-500 bg-gray-200 p-4 bg-gradient-to-r from-gray-200 to-white">
    <Check className="text-orange-700 mt-1 mr-2 min-w-[16px]" />
    <p className="text-sm sm:text-base leading-snug">
      Decoding Online Reviews to Improve Your Restaurant's Service and Menu
    </p>
  </div>
</div>

    </div>
  </div>
</div>


<div className="w-full bg-gray-100">
  <div className="max-w-6xl mx-auto">

    
    <div className="flex flex-col items-center py-16">
      <div className="flex flex-row gap-8 font-semibold text-xl sm:text-2xl md:text-3xl">
  <div className="group">
    <h1 className="cursor-pointer pb-2 border-b-2 border-transparent group-hover:border-red-600 transition">
      BREAKFAST
    </h1>
  </div>
  <div className="group">
    <h1 className="cursor-pointer pb-2 border-b-2 border-transparent group-hover:border-red-600 transition">
      LUNCH
    </h1>
  </div>
  <div className="group">
    <h1 className="cursor-pointer pb-2 border-b-2 border-transparent group-hover:border-red-600 transition">
      DINNER
    </h1>
  </div>
</div>



      <hr className=" w-full border-gray-300" />
    </div>

   
    <FoodMenu2 />
  </div>
</div>


<div className=" w-full bg-white mt-16">
  
  <div className="flex flex-1 flex-col md:flex-row gap-6 items-center max-w-6xl mx-auto px-4 py-8">
      <div className='flex-1 w-full space-y-4'>
        <button className='text-white bg-orange-700 rounded-xl px-5 py-2 text-sm'>CRISPY, EVERY BITE TASTE</button>
        <h1 className='font-bold text-black text-4xl'>WHY DELISH YOUR PRIORITY</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipiscing elit netus sagittis aenean malesuada, velit<br/>
        sodales hendrerit lacus iaculis porta lobortis sollicitudin quisque dictum porttitor donec...</p>
        
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-6 mx-auto items-center mt-5' >
  <div className="w-22 h-22 bg-orange-700 rounded-full flex items-center justify-center overflow-hidden">
    <img src={vector1} alt="" className="w-12 h-12 object-contain" />
    </div>
    <div className='space-y-2'>
      <h1 className='font-semibold text-2xl'>Efficiency & Management</h1>
      <p className='text-gray-500 text-sm'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>

    </div>
</div>

 <div className='flex flex-row gap-6 mx-auto items-center mt-5' >
  <div className="w-22 h-22 bg-orange-700 rounded-full flex items-center justify-center overflow-hidden">
    <img src={vector2} alt="" className="w-16 h-16 object-contain" />
    </div>
<div className='space-y-2'>
      <h1 className='font-semibold text-2xl'>Effective Team Work</h1>
      <p className='text-gray-500 text-sm'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>

    </div>
</div>

 <div className='flex flex-row gap-6 mx-auto items-center mt-5' >
  <div className="w-22 h-22 bg-orange-700 rounded-full flex items-center justify-center overflow-hidden">
    <img src={vector3} alt="" className="w-16 h-16 object-contain" />
    </div>
    <div className='space-y-2'>
      <h1 className='font-semibold text-2xl'>Amazing Growth Flow</h1>
      <p className='text-gray-500 text-sm'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>

    </div>
</div>


          
          
          </div>



      </div>

      <div className='flex-1 bg-gray-300'>
        <img src={footimg} alt="" className='object-cover h-[500px]' />

      </div>

      </div>






    </div>


    <div className='w-full mt-16 pb-28 bg-black'>
  <div className="max-w-6xl flex flex-col items-center mx-auto space-y-4">
    <button className="text-white bg-orange-700 rounded-xl px-5 py-2 text-sm mt-16">
      CUSTOMER FEEDBACK
    </button>

    <h1 className="font-bold text-3xl text-center text-white">SEE WHAT OUR CLIENTS HAVE TO SAY</h1>
    <div className="w-px h-8 bg-orange-700"></div>

    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-700 rotate-45" />
        ))}
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-6 mt-10 w-full px-4">
      
      <div className="flex-1 bg-blue-50 p-4 sm:p-8 flex flex-col justify-between relative">
  {/* Top section with image and text */}
  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
    <img
      src={feedback}
      alt="Feedback"
      className="w-24 h-24 sm:w-40 sm:h-40 object-cover"
    />
    <p className="text-gray-500 text-sm sm:text-base leading-relaxed sm:max-w-md">
      The scallops were perfectly cooked, tender, and flavorful, paired beautifully
      with a creamy risotto and seasonal vegetables. The presentation was artful,
      showcasing the chef's attention to detail. Highly recommend it for anyone
      looking for a memorable dining experience.
    </p>
  </div>

  {/* Bottom section: stars, name, title, icons */}
  <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 text-center sm:text-left">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-orange-800 fill-orange-800" />
      ))}
    </div>

    <div>
      <h1 className="font-bold text-base sm:text-xl">KUMAN TUNMAN</h1>
      <p className="text-sm sm:text-base">WAITER</p>
    </div>

    <div className="flex gap-2">
      <img src={vector14} alt="" className="w-5 sm:w-6 h-10 sm:h-12" />
      <img src={vector14} alt="" className="w-5 sm:w-6 h-10 sm:h-12" />
    </div>
  </div>

  {/* Bottom border stripe */}
  <span className="absolute bottom-0 right-0 w-3/4 h-1 bg-orange-800 transition-all"></span>
</div>


      
      <div className="flex-1 bg-blue-50 p-4 sm:p-8 flex flex-col justify-between relative">
  
  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
    <img
      src={feedback}
      alt="Feedback"
      className="w-24 h-24 sm:w-40 sm:h-40 object-cover"
    />
    <p className="text-gray-500 text-sm sm:text-base leading-relaxed sm:max-w-md">
      The scallops were perfectly cooked, tender, and flavorful, paired beautifully
      with a creamy risotto and seasonal vegetables. The presentation was artful,
      showcasing the chef's attention to detail. Highly recommend it for anyone
      looking for a memorable dining experience.
    </p>
  </div>

  
  <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 text-center sm:text-left">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-orange-800 fill-orange-800" />
      ))}
    </div>

    <div>
      <h1 className="font-bold text-base sm:text-xl">KUMAN TUNMAN</h1>
      <p className="text-sm sm:text-base">WAITER</p>
    </div>

    <div className="flex gap-2">
      <img src={vector14} alt="" className="w-5 sm:w-6 h-10 sm:h-12" />
      <img src={vector14} alt="" className="w-5 sm:w-6 h-10 sm:h-12" />
    </div>
  </div>

  
  <span className="absolute bottom-0 right-0 w-3/4 h-1 bg-orange-800 transition-all"></span>
</div>

    </div>
  </div>
</div>



  <div className="bg-white py-16 min-h-screen">
  <div className="max-w-6xl mx-auto space-y-6 px-4 flex flex-col items-center">
    <Link to="/blog">
      <button className="text-white bg-orange-700 rounded-xl px-5 py-2 text-sm mt-8">
        MAKE RESERVATION
      </button>
    </Link>

    <h2 className="text-2xl md:text-3xl font-bold">LATEST NEWS INSIGHTS</h2>
    <div className="w-px h-6 bg-orange-700 mx-auto"></div>
    <div className="flex justify-center gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-orange-700 rotate-45" />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-14">
      
      <div className="md:col-span-3 bg-gray-100 flex flex-col pb-5 text-left">
        <img src={restaurant} alt="" className="h-48 sm:h-64 w-full object-cover mb-4" />
        <div className="flex flex-col text-sm gap-2 px-4">
          <div className="flex items-center gap-2 flex-wrap">
            <UserPen className="w-4 h-4" />
            <span>by Smith</span>
            <Tags className="w-4 h-4" />
            <span>Business</span>
          </div>
          <hr className="w-full border-gray-300" />
          <h3 className="font-bold text-xl mb-4 text-black leading-snug">
            How Restaurants Are <br />Adapting to Changing<br />Dietary Trends
          </h3>
          <button className="mt-auto text-orange-700 text-sm font-bold flex items-center gap-1">
            LEARN MORE <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      
      <div className="md:col-span-6 bg-gray-100 flex flex-col text-left">
        <img src={asian} alt="" className="h-48 sm:h-64 w-full object-cover mb-4" />
        <div className="flex flex-col text-sm gap-2 px-4">
          <div className="flex items-center gap-2 flex-wrap">
            <UserPen className="w-4 h-4" />
            <span>by Smith</span>
            <Tags className="w-4 h-4" />
            <span>Business</span>
          </div>
          <hr className="w-full border-gray-300" />
          <h3 className="font-bold text-xl mb-4 text-black">
            Craftsmanship of Artisanal Foods in Restaurants
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Praesent tempor mollis aliquet rhoncus vestibulum ridiculus vivamus, donec vehicula interdum congue scelerisque duis lacinia, conubia egestas...
          </p>
          <button className="mt-auto text-orange-700 text-sm font-bold flex items-center gap-1">
            LEARN MORE <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      
      <div className="md:col-span-3 bg-gray-100 flex flex-col text-left">
        <img src={fineappearance} alt="" className="h-48 sm:h-64 w-full object-cover mb-4" />
        <div className="flex flex-col text-sm gap-2 px-4">
          <div className="flex items-center gap-2 flex-wrap">
            <UserPen className="w-4 h-4" />
            <span>by Smith</span>
            <Tags className="w-4 h-4" />
            <span>Business</span>
          </div>
          <hr className="w-full border-gray-300" />
          <h3 className="font-bold text-xl mb-4 text-black leading-snug">
            How Visual Appeal <br />Enhances the Dining<br />Experience
          </h3>
          <button className="mt-auto text-orange-700 text-sm font-bold flex items-center gap-1">
            LEARN MORE <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="w-full bg-gray-400 h-auto text-white p-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">


    <div className="flex flex-col text-center md:text-left">
      <h1 className="font-bold text-sm sm:text-base md:text-lg">
        BOOK A TABLE FOR YOU AND YOUR FAMILY MEMBERS
      </h1>
      <p className="font-bold text-xl sm:text-2xl md:text-4xl mt-2">
        NEED A TABLE ON COFFEE HOUSE
      </p>
    </div>

    <button className="border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-gray-900 transition">
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

export default Home3
