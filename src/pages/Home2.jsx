import React from 'react'
import NavBar2 from '../components/NavBar2'
import vfoot from "../assets/images/vectorfoot.png"
import vector from "../assets/images/vector1.png"
import dev from "../assets/images/dev.png"
import union from "../assets/images/union.png"
import notes from "../assets/images/notes.png"
import footimg from "../assets/images/depositphotos_240618200-stock-photo-roasted-chicken-wings-barbecue-sauce.jpg"
import tag from "../assets/images/Discount-Tag 1.png"
import subtag from "../assets/images/Heading-Text 1.png"
import tea from "../assets/images/depositphotos_69980013-assortment-of-fragrant-dried-teas-and-green-tea-on-dark-wooden-t.jpg"
import lunch from "../assets/images/Fried Chicken and Jam on Table.jpeg"
import dinner from "../assets/images/decorations_20.jpeg"
import dessert from "../assets/images/7829843634132f33477fad4cee90b71e5ec3ade8ee28_b.jpg"
import { PhoneCall, ChevronRight, Star, MessagesSquare, ArrowRight } from "lucide-react"
import chef1 from "../assets/images/gastro-editorial-uAEla_0RCgU-unsplash.jpg"
import chef2 from "../assets/images/vadim-markin-BFtIlGdWKbk-unsplash.jpg"
import feedback from "../assets/images/Image2.png"
import vector14 from "../assets/images/Vector 14.png"
import blog from "../assets/images/depositphotos_29967179-african-female-chef-garnishing-spaghetti-dish.jpg"
import Footer1 from '../components/Footer1'
import { Link } from 'react-router-dom' 




const labels = ['TEA & DRINKS', 'LUNCH', 'DINNER', 'DESSERT'];
const coFounders = [
  { img: chef1, name: 'MIKE HARSON' },
  { img: chef2, name: 'KENNETH OLIVER' },
  { img: chef1, name: 'QUENTIN SAMUEL' },
  { img: chef2, name: 'PATRICK JAMES' },
];

const Home2 = () => {
  return (
    <div>
    <div className='bg-black h-screen relative overflow-hidden'>
      
      
      <div className="absolute bottom-2 left-2 md:left-0 opacity-80 z-20">
        <img src={vfoot} alt="Vector" className="h-32 md:h-72 object-contain" />
      </div>

      
      <div className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-orange-700 rounded-full right-[-250px] bottom-[-200px] z-0 opacity-90"></div>

      <NavBar2 />

      
      <div className='absolute inset-0 flex justify-start items-center z-10'>
        <div className='w-full max-w-6xl mx-auto px-4 md:px-0'>
          <div className='text-white text-left'>
            <h1 className='font-bold text-4xl md:text-7xl leading-tight'>LUNCH &</h1>
            <h2 className='text-3xl md:text-7xl font-light mt-2 leading-tight'>HAPPY HOUR</h2>
            <p className='text-base md:text-xl mt-4 max-w-md'>
              CHECK OUT OUR LATEST SEASONAL PROMOTIONS
            </p>

            <button className="group border border-orange-700 px-4 py-2 md:px-6 md:py-3 mt-5 flex items-center gap-3 text-white text-sm md:text-base">
              BOOK A TABLE
              <div className="flex items-center gap-1">
                <span className="block w-4 md:w-6 h-px bg-white transform group-hover:translate-x-1 transition-transform duration-300"></span>
                <span className="text-sm transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="relative w-full bg-white mt-16">
    <div className="absolute top-50 left-0 px-4">
      <img src={vector} alt="" className="w-10 md:w-20 lg:w-32 h-auto opacity-80" />
      </div>


      <div className="flex flex-1 flex-col md:flex-row gap-6 items-center max-w-6xl mx-auto px-4 py-8">
      <div className='flex-1 w-full space-y-4'>
        <button className='text-white bg-orange-700 rounded-xl px-5 py-2'>CRISPY, EVERY BITE TASTE</button>
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

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] gap-4 mt-16 p-4">
  
  <div className="bg-orange-700 text-white p-8 space-y-4">
    <h1 className="font-bold text-lg">FIND FOOD LOUNGE</h1>

    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rotate-45" />
        ))}
      </div>
      <hr className="w-6 border-white" />
    </div>

    <div className="mt-6 text-sm font-light space-y-4">
      <div>
        <p>18/B, New Ave 1000</p>
        <p>New York</p>
        <p>999 888 999 00</p>
        <p>office@webmailfree.com</p>
      </div>
      <div>
        <p>Mon - Thu: 10 AM - 02 AM</p>
        <p>Fri - Sun: 10 AM - 02 AM</p>
      </div>
    </div>
  </div>

 
  <div className="relative bg-gradient-to-r from-black via-black to-[#3b0000] p-4 flex justify-center items-center w-full">
    <div className="relative w-full max-w-2xl h-64 sm:h-80 md:h-96">
      <img
        src={tag}
        alt="Main tag"
        className="absolute top-4 left-1/2 -translate-x-1/2 w-32 md:w-40 object-contain"
      />
      <img
        src={subtag}
        alt="Sub tag"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-24 md:w-32 object-contain"
      />
    </div>
  </div>

  
  <div className="bg-black text-white p-8 space-y-4">
    <h1 className="font-bold text-lg">CONTACT US NOW</h1>

    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-orange-700 rotate-45" />
        ))}
      </div>
      <hr className="w-6 border-orange-700" />
    </div>

    <div className="mt-6 text-sm font-light space-y-4">
      <p>
        Sus nisi platea primis dignissim quam<br />
        cras netus natoque vel senectus, quis<br />
        fames praesent sapien...
      </p>
      <button className="border border-white mt-5 px-4 py-2">
        BOOK A TABLE
      </button>
    </div>
  </div>
</div>



<div className="relative w-full h-fit bg-black text-white">
  <div className="pb-28 max-w-6xl mx-auto flex flex-col space-y-4 mt-[10%] px-4 items-center">

    <button className="text-white rounded-xl px-5 py-2 bg-orange-800 transition mt-20 text-sm">
      MAKE RESERVATION
    </button>

    <h1 className="font-bold text-4xl text-center">STARTERS AND MAIN DISHES</h1>

    <div className="w-px h-8 bg-orange-700"></div>

    <div className="flex items-center gap-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-orange-700 rotate-45" />
      ))}
    </div>

    {/* Menu Sections */}
    <div className="flex flex-col md:flex-row gap-12 mt-16 w-full">
      {/* Starters */}
      <div className="w-full">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <hr className="w-5 border-white" /> BEST DRINKS <hr className="w-5 border-white" />
          </div>
          <h2 className="text-2xl mt-2">STARTER MENU</h2>
        </div>

        <div className="flex flex-col gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <img src={dessert} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
              <div className="flex flex-col w-full font-light">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg whitespace-nowrap">Mushroom Arancini</span>
                  <div className="flex-1 border-b-2 border-dashed border-gray-600 mx-2 h-[1px] opacity-50"></div>
                  <span className="text-orange-700 font-semibold text-sm md:text-lg">$15.00</span>
                </div>
                <span className="text-gray-500 text-xs md:text-sm">
                  Ricotta, goat cheese, beetroot and dateline
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Dishes */}
      <div className="w-full">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <hr className="w-5 border-white" /> BEST DRINKS <hr className="w-5 border-white" />
          </div>
          <h2 className="text-2xl mt-2">MAIN DISHES</h2>
        </div>

        <div className="flex flex-col gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <img src={dessert} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
              <div className="flex flex-col w-full font-light">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg whitespace-nowrap">Braised Short Ribs</span>
                  <div className="flex-1 border-b-2 border-dashed border-gray-600 mx-2 h-[1px] opacity-50"></div>
                  <span className="text-orange-700 font-semibold text-sm md:text-lg">$15.00</span>
                </div>
                <span className="text-gray-500 text-xs md:text-sm">
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




<div className="w-full min-h-screen">
  <div className="max-w-6xl flex flex-col items-center mx-auto px-4 py-16 space-y-6">
    
   
    <Link to="/team">
      <button className="text-white bg-orange-700 rounded-xl px-5 py-2 hover:bg-orange-800 transition">
        TEAM MEMBERS
      </button>
    </Link>

    
    <h1 className="font-bold text-3xl text-center text-gray-900">
      OUR POPULAR CHEFS
    </h1>

    
    <div className="w-px h-8 bg-orange-800" />
    <div className="flex items-center gap-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-orange-800 rotate-45" />
      ))}
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
      {coFounders.map((founder, i) => (
        <div
          key={i}
          className="bg-black h-[500px] flex flex-col overflow-hidden"
        >
          
          <div className="h-[60%]">
            <img
              src={founder.img}
              alt={founder.name}
              className="object-cover w-full h-full"
            />
          </div>

          
          <div className="bg-black p-4 text-white relative flex-1">
            <h1 className="text-sm text-gray-400">CO-FOUNDER</h1>
            <p className="text-xl font-semibold">{founder.name}</p>

            
            <div className="absolute top-0 right-4 bg-orange-800 text-white p-2 rounded-bl-lg">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>


 <div className="w-full px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
    <button className="text-white bg-orange-800 rounded-xl px-5 py-2 mt-16">
      CLIENTS FEEDBACK
    </button>

    <h1 className="font-bold text-3xl text-center">WHAT OUR CUSTOMERS SAYS</h1>

    <div className="w-px h-8 bg-orange-800"></div>

    <div className="flex items-center gap-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-orange-800 rotate-45" />
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-6 mt-10 w-full">
      
      <div className="flex-1 bg-blue-50 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <img src={feedback} alt="Feedback" className="w-32 h-32 sm:w-40 sm:h-40 object-cover" />
          <p className="text-gray-400 text-sm leading-relaxed">
            The scallops were perfectly cooked, tender, and<br />
            flavorful, paired beautifully with a creamy risotto<br />
            and seasonal vegetables. The presentation was<br />
            artful, showcasing the chef's attention to detail.<br />
            Highly recommend it for anyone looking for a <br />
            memorable dining experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
          <div className="flex gap-1">
            {Array(5).fill().map((_, i) => (
              <Star key={i} className="text-orange-800 fill-orange-800 w-4 h-4" />
            ))}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-lg">KUMAN TUNMAN</h1>
            <p className="text-sm">WAITER</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={vector14} alt="" className="w-6 h-12" />
            <img src={vector14} alt="" className="w-6 h-12" />
          </div>
        </div>
        <span className="absolute bottom-0 right-0 w-3/4 h-1 bg-orange-800 transition-all" />
      </div>

      
      <div className="flex-1 bg-blue-50 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <img src={feedback} alt="Feedback" className="w-32 h-32 sm:w-40 sm:h-40 object-cover" />
          <p className="text-gray-400 text-sm leading-relaxed">
            The scallops were perfectly cooked, tender, and<br />
            flavorful, paired beautifully with a creamy risotto<br />
            and seasonal vegetables. The presentation was<br />
            artful, showcasing the chef's attention to detail.<br />
            Highly recommend it for anyone looking for a <br />
            memorable dining experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
          <div className="flex gap-1">
            {Array(5).fill().map((_, i) => (
              <Star key={i} className="text-orange-800 fill-orange-800 w-4 h-4" />
            ))}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-lg">MADISON OLIVIA</h1>
            <p className="text-sm">WAITER</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={vector14} alt="" className="w-6 h-12" />
            <img src={vector14} alt="" className="w-6 h-12" />
          </div>
        </div>
        <span className="absolute bottom-0 right-0 w-3/4 h-1 bg-orange-800 transition-all" />
      </div>
    </div>
  </div>
</div>


  <div className='w-full h-auto mt-16 pb-16'>
  <div className='max-w-6xl items-center flex flex-col mx-auto space-y-4'>
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
      <h2 className="font-bold text-2xl mt-10">
        HOW RESTAURANTS FOSTER CONNECTIONS<br/> AND CREATE MEMORIES
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

export default Home2
