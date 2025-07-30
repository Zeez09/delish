import React from 'react'
import { Link } from 'react-router-dom'
import NavBar4 from '../components/NavBar4'
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import FoodGallery from '../components/FoodGallery'
import Footer1 from '../components/Footer1'

const Gallery = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">GALLERY PAGE</h1>
          <div className='flex gap-2 font-bold'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/food-gallery"><span>GALLERY PAGE</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">
  FOOD GALLERY
</h2>


          
        </div>
        
        
    </div>
      
    </div>

    <div className='pb-10'>
      <div className="max-w-6xl flex flex-col items-center mx-auto space-y-4  px-4">
    <button className="text-white bg-orange-700 rounded-xl px-5 py-2 text-sm mt-16">
      FOOD GALLERY
    </button>

    <h1 className="font-bold text-3xl text-center">FOOD GALLERY POSTS</h1>
    <div className="w-px h-8 bg-orange-700"></div>

   
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-700 rotate-45" />
        ))}
      </div>
    </div>

    <div>
      <FoodGallery/>
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

export default Gallery
