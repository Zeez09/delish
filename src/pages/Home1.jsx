import React, { useState } from 'react'
import NavBar1 from '../components/NavBar1'
import header1 from "../assets/images/decorations_20.jpeg"
import header2 from "../assets/images/Beautiful Plate with Baked Oranges and Chicken.jpeg"
import header3 from "../assets/images/depositphotos_110990144-Chef-cooking-gourmet-pizza.jpg"
import spinach from "../assets/images/3731 1.png"
import reservations from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import phone from "../assets/images/.png"
import vector from "../assets/images/Vector1.png"
import image61 from "../assets/images/image 61.png"
import image62 from "../assets/images/image 62.png"
import CardSlider from '../components/CardSlider'
import FoodMenu from '../components/FoodMenu'
import { Eye, ArrowLeft, ArrowRight } from "lucide-react";
import chicken from "../assets/images/20250626_154335.jpg"
import meat from "../assets/images/20250626_154341.jpg"
import rice from "../assets/images/20250626_154347.jpg"
import spag from "../assets/images/20250626_154352.jpg"
import fries from "../assets/images/20250626_154358.jpg"
import left from "../assets/images/left vector.png"
import right from "../assets/images/right vector.png"
import feedback from "../assets/images/4fc1df93bfd70f8f7f855e029866b107cd3ac9c7.png"
import vector14 from "../assets/images/Vector 14.png"
import right1 from "../assets/images/Vector 11.png"
import left2 from "../assets/images/Vector 12.png"
import bgvector from "../assets/images/bg-vector.png"
import visa from "../assets/images/depositphotos_39497015-China-visa-in-passport-macro.jpg"
import imgvector from "../assets/images/Group 39.png"
import chat from "../assets/images/chat.png"
import arrow from "../assets/images/Arrow.png"
import bgimg from "../assets/images/bgimg.png"
import footimg from "../assets/images/depositphotos_240618200-stock-photo-roasted-chicken-wings-barbecue-sauce.jpg"
import vfoot from "../assets/images/Vectorfoot.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSkype } from "react-icons/fa"
import { Link } from "react-router-dom"








const images = [header1, header2, header3]


const Home1 = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const goToSlide = (index) => {
    setCurrentIndex(index)
  };





  return (
    <div>
      <NavBar1/>
      
      
      <div className="relative w-full h-[670px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">THE GREAT</h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">FLAVOURED FOOD</h1>
          
          <div className="flex items-center justify-center gap-4 px-4 py-8 w-full max-w-md">
            <div className="h-[2px] bg-white flex-grow" />
            <span className="text-sm md:text-3xl font-bold text-white uppercase whitespace-nowrap">
              PART OF US
            </span>
            <div className="h-[2px] bg-white flex-grow" />
          </div>
          <div className='text-sm text-white flex flex-row gap-4 font-semibold'>
            <Link to="/book-table"><h2>BOOK A TABLE</h2></Link>
            <Link to="/menu"><h1>VIEW MENU</h1></Link>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-8 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            } transition duration-300`}
          ></button>
        ))}
      </div>
    </div>


    <div className="relative w-full bg-white mt-16">
        
        <div className="absolute top-0 right-0">
          <img
            src={vector}
            alt=""
            className="w-32 md:w-40 lg:w-52 h-auto opacity-80"
          />
        </div>

    <div className='w-full px-4 py-8 flex flex-col md:flex-row gap-8 h-auto'>
      <div className=''>
        <img src={spinach} alt="" />
      </div>

      <div className="flex flex-1 flex-col md:flex-row gap-6 items-center">
      <div className='flex-1'>
        <img src={reservations} alt="" />
      </div>
      
      <div className="flex-1 gap-4 justify-center space-y-[2rem]">
        <button className='text-white bg-orange-700 rounded-xl px-5 py-2'>MAKE RESERVATION</button>
        <h1 className='font-bold text-3xl'>WELCOME TO OUR<br/>LUXURY RESTAURANT </h1>
        <p className='text-sm text-gray-400 '>The scallops were perfectly cooked, tender, and flavorful, paired beautifully<br/>
        with a creamy risotto and seasonal vegetables. The presentation was artful,<br/>
        showcasing the chef's attention to detail.</p>

        <div className='mt-10 flex flex-row gap-5'>
          <div className="flex items-center justify-center rounded-full bg-orange-700 w-12 h-12">
          <img src={phone} alt="" className=' object-contain '/>
          </div>
          <div>
            <h1 className='text-sm text-gray-400'>HOTLINE 24/7</h1>
            <p className='font-extrabold text-lg'>+256 3254-2568</p>
          </div>

        </div>

      </div>
      </div>
      </div>

    </div>




<div className="relative w-full bg-fuchsia-50 mt-16 overflow-hidden">
  
  <div className="relative w-full px-10 py-8 flex flex-col gap-8 h-auto">
    <div className="absolute top-16 right-6 md:right-10 opacity-80 z-0">
      <img
        src={image61}
        alt="Decorative Vector"
        className="w-32 md:w-40 lg:w-52 h-auto object-contain"
      />
    </div>
    
    
    <div className="hidden md:block absolute bottom-20 left-0 z-0  pl-6">
      <img
        src={image62}
        alt=""
        className=""
      />
    </div>

    
    <div className='flex flex-col justify-center items-center mt-16 space-y-[1rem] relative z-10'>
      <button className='text-white bg-orange-700 rounded-xl px-5 py-2'>OUR SERVICES</button>
      <h1 className='font-bold text-3xl'>OUR RESTAURANT SERVICE</h1>
      <div className="w-px h-8 bg-orange-700"></div>
    </div>

  
    <div className="relative z-10 mb-10">
      <CardSlider />
    </div>
    <div className="flex md:hidden relative z-10 justify-center mt-10">
      <img
        src={image62}
        alt="Decorative Bottom Mobile"
        className=""
      />
    </div>
  </div>
</div>



<div>
  <FoodMenu/>
</div>




<div className="relative w-full bg-black pt-16 pb-32 mt-16">
  <div className="max-w-6xl mx-auto px-4">
  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
      <div>
        <h1 className="font-bold text-6xl">15</h1>
        <p className="text-sm">NEW</p>
        <span className="text-sm">COOL PROJECTS</span>
      </div>
      <div>
        <h1 className="font-bold text-6xl">15</h1>
        <p className="text-sm">TOTAL</p>
        <span className="text-sm">AWARDS WIN</span>
      </div>
      <div>
        <h1 className="font-bold text-6xl">20</h1>
        <p className="text-sm">UNIQUE</p>
        <span className="text-sm">FOOD SPECIALITIES</span>
      </div>
      <div>
        <h1 className="font-bold text-6xl">69</h1>
        <p className="text-sm">HARD</p>
        <span className="text-sm">TEAM MEMBERS</span>
      </div>
    </div>

    <hr className="border-t border-gray-600 my-12" />

    
    <button className="text-white bg-orange-700 transition-all rounded-xl px-6 py-3 text-sm">
      VIEW OUR PROJECTS
    </button>

    
    <div className="flex justify-between items-center mt-6 text-white">
      <h2 className="text-3xl font-bold">OUR FOOD GALLERY</h2>
      <div className="flex gap-4">
        <button className="border border-white px-3 py-2">
          <ArrowLeft size={20} />
        </button>
        <button className="border border-white px-3 py-2">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
</div>

<div className="-mt-24 w-full max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 z-10 relative">
  {[chicken, meat, rice, spag, fries].map((img, i) => (
    <div key={i} className="relative group overflow-hidden h-64 shadow-lg">
      <img src={img} alt={`food-${i}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <Eye className="text-white w-6 h-6" />
      </div>
    </div>
  ))}
</div>








<div className ="mt-16 flex flex-col justify-center items-center relative text-center">
  <div className="absolute top-16 right-6 md:right-10 opacity-80 z-0">
      <img
        src={right}
        alt="Decorative Vector"
        className="w-12 md:w-20 lg:w-20 h-auto object-contain"
      />
    </div>
    <div className="absolute top-16 left-6 md:left-10 opacity-80 z-0">
      <img
        src={left}
        alt="Decorative Vector"
        className="w-12 md:w-20 lg:w-20 h-auto object-contain"/>
    </div>
  <button className="text-white bg-orange-700 rounded-xl px-4 py-2 text-sm">CLIENT TESTIMONIAL</button>
  <h1 className='font-bold text-3xl mt-4'>OUR CUSTOMER FEEDBACKS</h1>
  <div className="w-px h-8 bg-orange-700 mt-4"></div>
  <div className="flex gap-2 justify-center items-center mt-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-2.5 h-2.5 bg-orange-700 rotate-45"
      />
    ))}
  </div> 
</div>


<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 px-4">

  <div className="w-full md:w-[450px] h-auto bg-gray-200 border-4 border-red-700 p-6">
    <p className="text-sm text-gray-600 leading-relaxed">
      The only minor downside was the noise level, which made
      conversation a bit challenging at times. However, this did
      not significantly detract from the overall experience. The
      Culinary Corner excels in delivering delicious food and
      exceptional service.
    </p>


    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
      <div className="flex items-center gap-4">
        <img src={feedback} alt="Amanda Martin" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="text-lg font-bold">Amanda Martin</h1>
          <p className="text-xs text-gray-500">Food Reviewer</p>
        </div>
      </div>

      <div className="flex gap-2">
        <img src={vector14} alt="" />
        <img src={vector14} alt="" />
      </div>
    </div>
  </div>

  
  <div className="w-full md:w-[450px] h-auto bg-gray-200 border-4 border-red-700 p-6">
    <p className="text-sm text-gray-600 leading-relaxed">
      The only minor downside was the noise level, which made
      conversation a bit challenging at times. However, this did
      not significantly detract from the overall experience. The
      Culinary Corner excels in delivering delicious food and
      exceptional service.
    </p>

    
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
      <div className="flex items-center gap-4">
        <img src={feedback} alt="Amanda Martin" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="text-lg font-bold">Amanda Martin</h1>
          <p className="text-xs text-gray-500">Food Reviewer</p>
        </div>
      </div>

      <div className="flex gap-2">
        <img src={vector14} alt="" />
        <img src={vector14} alt="" />
      </div>
    </div>
 
  </div>
</div>




<div className ="mt-16 flex flex-col justify-center items-center relative text-center">
  <div className="absolute top-25 right-6 md:right-10 opacity-80 z-0">
      <img
        src={right1}
        alt="Decorative Vector"
        className="w-12 md:w-20 lg:w-20 h-auto object-contain"
      />
    </div>
    <div className="absolute top-16 left-6 md:left-10 opacity-80 z-0">
      <img
        src={left2}
        alt="Decorative Vector"
        className="w-12 md:w-20 lg:w-20 h-auto object-contain"/>
    </div>

     <div className="w-full max-w-6xl bg-gray-200 p-8 mt-16 rounded-lg flex flex-col md:flex-row gap-10 items-center md:items-start justify-between relative z-10">
 
  <div className="flex-1 flex flex-col items-center md:items-center text-center md:text-left mt-16">
    <button className="text-white bg-orange-700 rounded-xl px-4 py-2 text-sm">
      BOOK A TABLE
    </button>
    <h1 className="font-bold text-3xl mt-4">MAKE RESERVATION</h1>
    <div className="w-px h-8 bg-orange-700 mt-4" />

    
    <div className="flex gap-2 justify-center md:justify-start items-center mt-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 bg-orange-700 rotate-45" />
      ))}
    </div>

   
    <div className="mt-6 w-full max-w-md space-y-4">
      <select
        id="people"
        name="people"
        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-sm focus:outline-none"
      >
        <option value="">-- Select number of persons --</option>
        <option value="1">1 Person</option>
        <option value="2">2 Persons</option>
        <option value="3">3 Persons</option>
        <option value="4">4 Persons</option>
      </select>

      <select
        id="date"
        name="date"
        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-sm focus:outline-none"
      >
        <option value="">-- Select date --</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="weekend">This Weekend</option>
      </select>

      <select
        id="time"
        name="time"
        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-sm focus:outline-none"
      >
        <option value="">-- Select time --</option>
        <option value="12pm">12:00 PM</option>
        <option value="2pm">2:00 PM</option>
        <option value="6pm">6:00 PM</option>
      </select>

      <button className="w-full text-white bg-orange-700 px-4 py-2 rounded-md">
        BOOK NOW
      </button>
    </div>
  </div>

 
  <div className="flex-1 flex justify-center mt-10" >
    <div className='bg-white p-2'>
    <img
      src={feedback}
      alt="Reservation"
      className="w-full max-w-sm rounded-lg object-cover"
    />
    </div>
  </div>
</div>

</div>



<div className="relative w-full bg-white pt-16 z-10">
  
  <div className="relative z-30 flex flex-col items-center text-center px-4">
    <button className="text-white bg-orange-700 rounded-xl px-4 py-2 text-sm">
      MAKE RESERVATIONS
    </button>
    <h1 className="font-bold text-3xl mt-4">MEET THE EXPERT CHEF</h1>
    <div className="w-px h-8 bg-orange-700 mt-4"></div>
    <div className="flex gap-2 justify-center items-center mt-4 z-30">
      <div className="w-4 h-4 rounded-full bg-gray-700"></div>
      <div className="w-4 h-4 rounded-full bg-gray-700"></div>
      <div className="w-4 h-4 rounded-full bg-gray-700"></div>
    </div>
  </div>

  
  <div className="relative mt-50">
  <div className="relative w-full overflow-visible">
  
  <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 lg:-mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[chicken, meat, rice].map((img, i) => (
        <div
          key={i}
          className={`
            bg-gray-900 rounded-xl shadow-lg overflow-hidden w-full transition-all
            ${i === 0 ? '-mt-40 lg:mt-0' : 'mt-0'}
          `}
        >
          <div className="relative group h-72 overflow-hidden">
            <img
              src={img}
              alt={`food-${i}`}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-white text-center space-y-2">
            <h1 className="text-xl font-semibold">KUMAN TUNMAN</h1>
            <p className="text-sm text-gray-400">WAITER</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  
  <div className="relative z-0 w-full h-[400px] lg:h-[400px] overflow-hidden mt-[-200px] pt-[200px]">
    <img
      src={bgvector}
      alt="Decorative Vector"
      className="absolute inset-0 w-full h-full object-cover bg-black"
    />
  </div>
</div>


  <div className="flex flex-col items-center justify-center w-full bg-gray-900 py-16 px-4">
    <div className="text-center space-y-6 mt-16">
      <button className="text-white bg-orange-700 rounded-xl px-4 py-2 text-sm">
        CRISPY, EVERY BITE TASTE
      </button>
      <h1 className="text-white font-bold text-3xl sm:text-4xl leading-tight">
        LOOKING FOR POPULAR<br />FAST FOOD
      </h1>
      <div className="flex justify-center">
        <button className="hidden md:flex group border border-white px-6 py-2 items-center gap-2 text-white">
          <p>READ MORE</p>
          <div className="relative flex items-center h-1">
            <span className="inline-block w-6 h-px bg-white transform group-hover:translate-x-1 transition-transform duration-300"></span>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-xs transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>

  <div className="relative w-full h-auto bg-black">
    <img
      src={bgimg}
      alt="Background"
      className="w-full h-full object-cover absolute inset-0 opacity-40"
    />
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-700"></div>
          <div className="w-4 h-4 rounded-full bg-gray-700"></div>
          <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <h1 className="text-sm md:text-base text-gray-300">
            Are You Want To Make A Reservation,
          </h1>
          <span className="underline text-white font-semibold">
            Get Your Table
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <img src={chat} alt="Chat Icon" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex flex-col text-sm">
          <h1 className="text-gray-300">Have Questions?</h1>
          <p className="text-gray-300">
            FREE <span className="text-white ml-1">+92 (8800)-9850</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="relative w-full bg-black">
    <div className="relative w-full min-h-[500px] md:min-h-[350px]">
      <img
        src={footimg}
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/90 z-10"></div>

      <div className="absolute bottom-2 right-4 md:right-10 opacity-80 z-20">
        <img
          src={vfoot}
          alt="Vector"
          className="h-12 md:h-20 object-contain"
        />
      </div>

      <div className="relative z-30 px-4 pt-8">
        <div className="w-full max-w-6xl mx-auto text-white flex flex-col md:flex-row flex-wrap md:justify-between justify-center items-center gap-6">
          <div className="flex flex-col min-w-[250px] min-h-[300px]">
            <h1 className="font-semibold text-xl">GET IN TOUCH</h1>
            <hr className="border-gray-200 my-4 w-full" />
            <p className="font-semibold text-sm">
              Silk St, Barbican, London E2Y, UK
            </p>
            <p className="font-semibold text-sm">+39-055-123456</p>
            <p className="font-semibold text-sm">booking@webexample.com</p>
            <div className="flex gap-4 mt-6 justify-center">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSkype].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-orange-700 transition group"
                  >
                    <Icon className="text-black text-lg group-hover:text-white" />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col min-w-[250px] min-h-[300px] font-semibold">
            <h1 className="text-xl">FOOD MENU</h1>
            <hr className="border-gray-200 my-4 w-full" />
            <ul className="text-white text-sm list-none space-y-1">
              {[
                "White Castle",
                "Beef Sandwich",
                "Cherry limeade",
                "Wendy's Frosty",
                "Pumpkin Spice",
              ].map((item) => (
                <li key={item} className="before:content-['→'] before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col min-w-[250px] min-h-[300px] font-semibold">
            <h1 className="text-xl">WORKING HOURS</h1>
            <hr className="border-gray-200 my-4 w-full" />
            <ul className="list-none text-sm space-y-1">
              <li>Monday - Friday 09:00 - 22:00</li>
              <li>Saturday 11:00 - 00:00</li>
              <li>Sunday 11:00 - 23:00</li>
              <li className="mt-4">*Happy hour 17:00 - 21:00</li>
            </ul>
          </div>

          <div className="flex flex-col min-w-[250px] min-h-[300px] font-semibold">
            <h1 className="text-xl">INSTAGRAM</h1>
            <hr className="border-gray-200 my-4 w-full" />
            <div className="flex flex-col gap-2">
              {[0, 1].map((row) => (
                <div key={row} className="flex flex-row gap-2">
                  <img
                    src={chicken}
                    alt="Chicken"
                    className="w-20 h-20 object-cover"
                  />
                  <img
                    src={meat}
                    alt="Meat"
                    className="w-20 h-20 object-cover"
                  />
                  <img
                    src={fries}
                    alt="Fries"
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





<div className="w-full bg-black py-6 text-white text-sm">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="w-full md:w-auto">© {new Date().getFullYear()} Delish. All Rights Reserved.</p>
          <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>

    </div>
    </div>

  );
};

export default Home1;
