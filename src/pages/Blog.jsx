import React from 'react'
import { Link } from "react-router-dom"
import NavBar4 from '../components/NavBar4'
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import blog from "../assets/images/depositphotos_5114294-Bar-sign.jpg"
import { Calendar, User, ChevronsRight, Search, CircleUser, MoveRight } from 'lucide-react'
import restaurant from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import asian from "../assets/images/depositphotos_411408240-stock-photo-asian-woman-sitting-separated-restaurant.jpg"
import fineappearance from "../assets/images/depositphotos_581910094-stock-photo-luxury-table-settings-fine-dining.jpg"
import foodwine from "../assets/images/depositphotos_86123238-Still-life-with-various-types-of-Italian-food-and-wine.jpg"
import excellence from "../assets/images/depositphotos_62765133-Hard-worker.jpg"
import gourmet from "../assets/images/depositphotos_110990144-Chef-cooking-gourmet-pizza.jpg"
import chicken from "../assets/images/20250626_154335.jpg"
import meat from "../assets/images/20250626_154341.jpg"
import rice from "../assets/images/20250626_154347.jpg"
import spag from "../assets/images/20250626_154352.jpg"
import fries from "../assets/images/20250626_154358.jpg"
import Footer1 from '../components/Footer1'

const Blog = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">LATEST NEWS</h1>
          <div className='flex gap-2 font-bold'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/blog"><span>LATEST NEWS</span></Link>
            </div>

<h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">NEWS INSIGHTS</h2>

          
        </div>
        
        
    </div>
      
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
  
  <div className="md:col-span-2 space-y-8">
    <div className="space-y-2 bg-gray-100 pb-10">
      <span className="bg-orange-600 text-white text-xs p-4 absolute top-25 left-15 font-bold">FOODIES</span>
      <img src={blog} alt="" className='w-full' />
      <div className="flex flex-row items-center text-xs text-gray-500 space-x-4 px-10 py-5">
        <div className='flex items-center'><Calendar />
        <div>24 Feb, 2024</div>
        </div>
        <div className='flex items-center'><User/>
        <div>by admin</div>
        </div>
        </div>
        <div className='px-10 space-y-6'>
      <h2 className="text-2xl font-bold">ICONIC ESTABLISHMENTS ARE REINVENTING</h2>
      <p className="text-gray-600 text-sm">
        Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added<br/>
        partnerships. Holisticly reintermediate client based materials...
      </p>
      <hr className='w-full border-gray-400'/>
      <a href="#" className="text-orange-700 font-semibold text-sm hover:underline flex items-center gap-1">
        READ DETAILS<ChevronsRight />
      </a>
    </div>
    </div>

    <div className="space-y-2 bg-gray-100 pb-10 relative">
      <span className="bg-orange-600 text-white text-xs p-4 absolute top-10 left-10 font-bold">FOODIES</span>
      <img src={foodwine} alt="" className='w-full' />
      <div className="flex flex-row items-center text-xs text-gray-500 space-x-4 px-10 py-5">
        <div className='flex items-center'><Calendar />
        <div>24 Feb, 2024</div>
        </div>
        <div className='flex items-center'><User/>
        <div>by admin</div>
        </div>
        </div>
        <div className='px-10 space-y-6'>
      <h2 className="text-2xl font-bold">EXPLORING THE WORLD OF FOOD AND WINE</h2>
      <p className="text-gray-600 text-sm">
        Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added<br/>
        partnerships. Holisticly reintermediate client based materials...
      </p>
      <hr className='w-full border-gray-400'/>
      <Link to="/blog-details"><p className="text-orange-700 font-semibold text-sm hover:underline flex items-center gap-1">
        READ DETAILS<ChevronsRight />
      </p>
      </Link>
    </div>
    </div>

    <div className="space-y-2 bg-gray-100 pb-10 relative">
      <span className="bg-orange-600 text-white text-xs p-4 absolute top-10 left-10 font-bold">FOODIES</span>
      <img src={excellence} alt="" className='w-full' />
      <div className="flex flex-row items-center text-xs text-gray-500 space-x-4 px-10 py-5">
        <div className='flex items-center'><Calendar />
        <div>24 Feb, 2024</div>
        </div>
        <div className='flex items-center'><User/>
        <div>by admin</div>
        </div>
        </div>
        <div className='px-10 space-y-6'>
      <h2 className="text-2xl font-bold">WHAT IT TAKES TO ACHIEVE EXCELLENCE</h2>
      <p className="text-gray-600 text-sm">
        Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added<br/>
        partnerships. Holisticly reintermediate client based materials...
      </p>
      <hr className='w-full border-gray-400'/>
      <a href="#" className="text-orange-700 font-semibold text-sm hover:underline flex items-center gap-1">
        READ DETAILS<ChevronsRight />
      </a>
    </div>
    </div>

    <div className="space-y-2 bg-gray-100 pb-10 relative">
      <span className="bg-orange-600 text-white text-xs p-4 absolute top-10 left-10 font-bold">FOODIES</span>
      <img src={gourmet} alt="" className='w-full' />
      <div className="flex flex-row items-center text-xs text-gray-500 space-x-4 px-10 py-5">
        <div className='flex items-center'><Calendar />
        <div>24 Feb, 2024</div>
        </div>
        <div className='flex items-center'><User/>
        <div>by admin</div>
        </div>
        </div>
        <div className='px-10 space-y-6'>
      <h2 className="text-2xl font-bold">AFFODABLE GOURMET EXPERIENCES</h2>
      <p className="text-gray-600 text-sm">
        Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added<br/>
        partnerships. Holisticly reintermediate client based materials...
      </p>
      <hr className='w-full border-gray-400'/>
      <a href="#" className="text-orange-700 font-semibold text-sm hover:underline flex items-center gap-1">
        READ DETAILS<ChevronsRight />
      </a>
    </div>
    </div>

    <div className='gap-2 font-semibold flex'>

      <button className='text-sm bg-gray-100 px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>1</button>
    <button className='text-sm bg-gray-100 px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>2</button>
    <button className='text-sm bg-gray-100 px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>3</button>
    <button className='text-sm bg-gray-100 px-5 py-3 text-black hover:bg-orange-700 hover:text-white'><MoveRight size={12}/></button>
      
    </div>




    
  </div>

  
  <div className="space-y-8">
    
    <div className='bg-gray-100 p-8'>
<div className="relative w-full max-w-sm">
  <input
    type="text"
    placeholder="Enter Keyword"
    className="w-full border border-gray-300 px-4 py-2 pr-14 bg-white focus:outline-none"
  />

  <button
    type="submit"
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-700 w-10 h-10 flex items-center justify-center text-white hover:bg-orange-800"
  >
    <Search size={18} />
  </button>
</div>

      </div>


    <div className='bg-gray-100 p-4 space-y-6'>
      <h3 className="font-bold mb-2 text-2xl">RECENT POSTS</h3>
      <div className='flex gap-2 items-center mt-5'>
        <img src={restaurant} alt=""  className='w-20 h-20'/>
        <div className='flex flex-col'>
          <div className='flex gap-2 text-sm text-gray-500 items-center' >
            <CircleUser size={20}/><span> by David Smith</span>
          </div>
          <h1 className='font-semibold text-lg'>Craftsmanship of Artisanal<br/>Foods in Restaurants</h1>

        </div>

      </div>

      <div className='flex gap-2 items-center'>
        <img src={asian} alt=""  className='w-20 h-20'/>
        <div className='flex flex-col'>
          <div className='flex gap-2 text-sm text-gray-500 items-center' >
            <CircleUser size={20}/><span> by David Smith</span>
          </div>
          <h1 className='font-semibold text-lg'>Restaurants Are Adapting to<br/>Changing Dietary Trends</h1>

        </div>

      </div>

      <div className='flex gap-2 items-center'>
        <img src={fineappearance} alt=""  className='w-20 h-20'/>
        <div className='flex flex-col'>
          <div className='flex gap-2 text-sm text-gray-500 items-center' >
            <CircleUser size={20}/><span> by David Smith</span>
          </div>
          <h1 className='font-semibold text-lg'>Passion and Perseverance<br/>from Renownwed Chefs</h1>

        </div>

      </div>



    </div>

    
    <div className="bg-gray-100 p-8">
  <h3 className="font-bold mb-2 text-2xl">CATEGORIES</h3>

  <div className="flex flex-col space-y-4 mt-6">
    <div className="w-full flex text-gray-500 bg-white">
  <div className="flex-1 flex items-center p-4">
    <p>Soups and Salads</p>
  </div>
  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
    
    <button className="h-full px-4 flex items-center justify-center text-orange-700 hover:text-orange-900">
      <MoveRight />
    </button>
  </div>
</div>


    <div className="w-full flex text-gray-500 bg-white">
  <div className="flex-1 flex items-center p-4">
    <p>Pasta and Noodles</p>
  </div>
  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
    <button className="h-full px-4 flex items-center justify-center text-orange-700 hover:text-orange-900">
      <MoveRight />
    </button>
  </div>
</div>

    <div className="w-full flex text-gray-500 bg-white">
  <div className="flex-1 flex items-center p-4">
    <p>Vegetarian and Vegan</p>
  </div>
  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
    
    <button className="h-full px-4 flex items-center justify-center text-orange-700 hover:text-orange-900">
      <MoveRight />
    </button>
  </div>
</div>

    <div className="w-full flex text-gray-500 bg-white">
  <div className="flex-1 flex items-center p-4">
    <p>Pizza and Flatbreads</p>
  </div>
  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
    
    <button className="h-full px-4 flex items-center justify-center text-orange-700 hover:text-orange-900">
      <MoveRight />
    </button>
  </div>
</div>

    
  </div>
</div>

<div className="bg-gray-100 p-8">
  <h3 className="font-bold mb-4 text-2xl">GALLERY</h3>
  <div className="grid grid-cols-3 gap-2 mt-5">
    <img src={chicken} alt="Chicken" className="w-full h-24 object-cover" />
    <img src={meat} alt="Meat" className="w-full h-24 object-cover" />
    <img src={rice} alt="Rice" className="w-full h-24 object-cover" />
    <img src={spag} alt="Spaghetti" className="w-full h-24 object-cover" />
    <img src={fries} alt="Fries" className="w-full h-24 object-cover" />
    <img src={chicken} alt="Chicken Again" className="w-full h-24 object-cover" />
  </div>
</div>


<div className="bg-gray-100 p-8">
  <h3 className="font-bold mb-4 text-2xl">POPULAR TAGS</h3>
  <div className='flex gap-2 font-semibold '>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>ADVICE</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>AUTHOR</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>CONSULTING</button>

  </div>

  <div className='flex gap-2 font-semibold mt-4 '>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>DELISH</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>FAMILY</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>HEALTH</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>TIP</button>

  </div>

  <div className='flex gap-2 font-semibold mt-4  '>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>JUDGE</button>
    <button className='text-sm bg-white px-5 py-3 text-black hover:bg-orange-700 hover:text-white'>SOLUTION</button>
    
  </div>
  



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

export default Blog
