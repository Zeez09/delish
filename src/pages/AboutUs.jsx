import React from 'react'
import NavBar4 from "../components/NavBar4"
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import { Link } from 'react-router-dom'
import vector from "../assets/images/Vector1.png"
import dev from "../assets/images/dev.png"
import union from "../assets/images/Union.png"
import notes from "../assets/images/notes.png"
import footimg from "../assets/images/depositphotos_240618200-stock-photo-roasted-chicken-wings-barbecue-sauce.jpg"
import FoodGallery from '../components/FoodGallery'
import FoodCategory from '../components/FoodCategory'
import Footer1 from '../components/Footer1'


const AboutUs = () => {


  


  return (
    <div>

    <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">ABOUT US</h1>
          <div className='flex gap-2 font-bold'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/contact"><span>  ABOUT US</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">ABOUT US</h2>
           
          
        </div>
        
        
    </div>

      
      
    </div>
    <div className="relative w-full bg-white mt-16 pb-16">
        <div className="absolute top-50 left-0 px-4">
          <img src={vector} alt="" className="w-10 md:w-20 lg:w-32 h-auto opacity-80" />
          </div>
    
    
          <div className="flex flex-1 flex-col md:flex-row gap-6 items-center max-w-6xl mx-auto px-4 py-8">
          <div className='flex-1 w-full space-y-4'>
            <button className='text-white bg-orange-700 rounded-xl px-5 py-2 text-sm'>CRISPY, EVERY BITE TASTE</button>
            <h1 className='font-bold text-black text-4xl'>DELICIOUS FOOD FOR<br/>HEALTHY LIFE</h1>
            <div>
              <div className='flex flex-row gap-2 mt-10'>
                <img src={dev} alt="" />
                <img src={union} alt="" />
                <div>
                  <h1 className='text-2xl font-bold'>QUALITY FOOD</h1>
                  <p className='text-gray-400'>The wise man therefore always holds Indies matters this<br/>principle information</p>
                </div>
              </div>
            </div>
    
             <div>
              <div className='flex flex-row gap-2 mt-10'>
                <img src={notes} alt="" />
                <img src={union} alt="" />
                <div>
                  <h1 className='text-2xl font-bold'>SUPPLY CHAIN MAINTAIN</h1>
                  <p className='text-gray-400'>The wise man therefore always holds Indies matters this<br/>principle information</p>
                </div>
              </div>
            </div>
    
            <button className="mt-10 relative px-6 py-2 border border-gray-700 font-semibold uppercase text-sm tracking-wide overflow-hidden group w-46">
      BOOK A TABLE
      <span className="absolute top-0 left-0 w-8 h-1 bg-black transition-all"></span>
      
    
      
      <span className="absolute bottom-0 right-0 w-8 h-1 bg-black transition-all "></span>
      
    </button>
    
    
          </div>
    
          <div className='flex-1 bg-gray-300'>
            <img src={footimg} alt="" className='p-4 object-cover h-[450px]' />
    
          </div>
    
          </div>
    
    
    
    
    
    
        </div>

        <div className='w-full bg-gray-300 pb-16'>
          <div className='flex flex-col max-w-6xl mx-auto items-center space-y-4'>
            <button className="text-white bg-orange-800 rounded-xl px-5 py-2 mt-16 text-sm">
        FOOD GALLERY
      </button>

      <h1 className="font-bold text-3xl text-center">FOOD GALLERY POSTS</h1>

      <div className="w-px h-8 bg-orange-800"></div>
      <div className="flex items-center gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-800 rotate-45" />
        ))}
      </div>

      <div>
        <FoodGallery/>

      </div>

          </div>

        </div>

        
          <div className='w-full '>
          <div className='flex flex-col max-w-6xl mx-auto items-center space-y-4'>
            <button className="text-white bg-orange-800 rounded-xl px-5 py-2 mt-16 text-sm">
        MAKE RESERVATIONS
      </button>

      <h1 className="font-bold text-3xl text-center">DISCOVER OUR CATEGORY</h1>

      <div className="w-px h-8 bg-orange-800"></div>
      <div className="flex items-center gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-800 rotate-45" />
        ))}
      </div>
      <div >
        <FoodCategory/>
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

export default AboutUs
