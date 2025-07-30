import React from 'react'
import { Link } from "react-router-dom"
import NavBar4 from '../components/NavBar4'
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import foodwine from "../assets/images/depositphotos_86123238-Still-life-with-various-types-of-Italian-food-and-wine.jpg"
import { Calendar, User, Facebook, Twitter, Instagram, Youtube, CornerUpLeft, Mail, Search, CircleUser, MoveRight } from 'lucide-react'
import growth1 from "../assets/images/depositphotos_6964238-Business-growth.jpg"
import growth2 from "../assets/images/depositphotos_12657718-Growing-and-successful-annual-report.jpg"
import growth3 from "../assets/images/depositphotos_55140311-Man-protecting-new-business.jpg"
import blog from "../assets/images/depositphotos_5114294-Bar-sign.jpg"
import excellence from "../assets/images/depositphotos_62765133-Hard-worker.jpg"
import chicken from "../assets/images/20250626_154335.jpg"
import meat from "../assets/images/20250626_154341.jpg"
import rice from "../assets/images/20250626_154347.jpg"
import spag from "../assets/images/20250626_154352.jpg"
import fries from "../assets/images/20250626_154358.jpg"
import author from "../assets/images/aafd339d1834d9e71b4ccb2fe6ff32efd99491a7 (1).png"
import green from "../assets/images/green_office_51.jpeg"
import smith from "../assets/images/depositphotos_105295804-Photo-stylish-bearded-man-wearing-glasses-working-modern-loft-office.-Young-banker-sitting-vintage-chairlistening-music-laptop-night.Using-contemporary-notebook..jpg"
import african from "../assets/images/household_routine_55.jpeg"
import restaurant from "../assets/images/depositphotos_2099183-Fine-table-setting-in-gourmet-restaurant.jpg"
import asian from "../assets/images/depositphotos_411408240-stock-photo-asian-woman-sitting-separated-restaurant.jpg"
import fineappearance from "../assets/images/depositphotos_581910094-stock-photo-luxury-table-settings-fine-dining.jpg"
import Footer1 from '../components/Footer1'



const BlogDetails = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">BLOG DETAILS</h1>
          <div className='flex font-bold gap-2'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/blog-details"><span>BLOG DETAILS</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">NEWS INSIGHTS</h2>

          
        </div>
        
        
    </div>
      
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
  
  <div className="md:col-span-2 space-y-8">
  <div className="space-y-8 pb-10">
    <img src={foodwine} alt=""  className='w-full'/>
    <div className="flex flex-row items-center text-xs text-gray-500 space-x-4 py-5">
        <div className='flex items-center'><Calendar className='text-orange-700'/>
        <div>24 Feb, 2024</div>
        </div>
        <div className='flex items-center'><User className='text-orange-700'/>
        <div>by admin</div>
        </div>
        </div>

        <div className='space-y-6'>
      <h2 className="text-3xl font-bold">THE WORLD OF FOOD AND WINE MATCHING</h2>
      <p className="text-gray-600 text-sm">
        Global business consultancies play a critical role in driving thought leadership and knowledge exchange on a global scale.<br/>
        Through industry reports, white papers, seminars, and conferences, these firms share insights, best practices, and emerging<br/>
        trends that shape the future of international business. By staying at the forefront of global trends and innovations, the<br/>
        consultancy provides clients with invaluable intelligence and foresight, empowering them to anticipate market shifts,<br/>
        capitalize on emerging opportunities, and stay ahead of the curve in an ever-changing global landscape.
      </p>
      <p className='text-gray-600 text-sm'>
        Global business consultancy serves as a strategic partner and trusted advisor to organizations navigating the complexities of<br/>
        international commerce. By offering a comprehensive suite of services, deep industry expertise, and a global network of<br/> 
        resources, these firms empower clients to seize opportunities.
      </p>
      
    </div>

    <div className='bg-gray-200 mt-10 p-18 space-y-6 pb-20'>
      <div className='rounded-full w-30 h-30 bg-orange-700 flex items-center justify-center'>
  <h1 className='text-white text-3xl font-semibold'>99</h1>
</div>
<h1 className='text-xl font-semibold'>“We offer competitive pricing and deliver exceptional value for your<br/> investment our goal is to help you achieve the highest”</h1>
<div className=''>
  <p className='font-semibold text-orange-700 text-xl'>William Benjamin</p>
<span className='text-gray-600'>Top Author</span>

</div>


    </div>
    <p className='text-gray-600 text-sm'>Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructures. Conveniently target client-based systems<br/>
with turnkey sources. Collaboratively syndicate focused opportunities for interactive deliverables. Assertively initiate client-<br/>
based infomediaries through collaborative mindshare. Completely create bleeding-edge meta-services through compelling<br/>functionalities.</p>

<div className="grid grid-cols-3 gap-2 mt-5">
  <img src={growth1} alt=""  className='h-64'/>
  <img src={growth2} alt="" className='h-64'/>
  <img src={growth3} alt="" className='h-64' />
</div>

<p className='text-gray-600 text-sm'>Quickly build covalent data after turnkey content. Distinctively reconceptualize customized growth strategies via prospective<br/>
potentialities. Professionally pursue cutting-edge web-readiness vis-a-vis just in time infrastructures. Conveniently target client-<br/>
based systems with turnkey sources.</p>

<p className='text-gray-600 text-sm'>Collaboratively syndicate focused opportunities for interactive deliverables. Assertively initiate client-based infomediaries<br/>
through collaborative mindshare create bleeding-edge meta-services</p>

<div className='flex justify-between'>
  <div className='flex flex-row gap-2'>
    <h1 className='font-bold'>Tags</h1>
    <ul className='flex gap-2 text-gray-600'>
      <li>Business Solution,</li>
      <li>Growth Strength</li>
    </ul>

  </div>
  <div className='flex flex-row gap-2'>
    <h1 className='font-bold'>Social Icon</h1>
    <div className='flex text-gray-600 gap-2'>
    <Facebook />
    <Twitter />
    <Instagram />
    <Youtube />
    </div>

  </div>

</div>

<hr className='w-full border-gray-300'/>

<div className='flex justify-between'>
  <div className='flex gap-4 items-center'>
    <img src={blog} alt="" className='w-20 h-20'/>
    <h1 className='font-bold'>Previous Post</h1>
    </div>

    <div className="grid grid-cols-3 gap-2">
        <img src={chicken} alt="Chicken" className="w-5 h-5 object-cover" />
        <img src={meat} alt="Meat" className="w-5 h-5 object-cover" />
        <img src={rice} alt="Rice" className="w-5 h-5 object-cover" />
        <img src={spag} alt="Spaghetti" className="w-5 h-5 object-cover" />
        <img src={fries} alt="Fries" className="w-5 h-5 object-cover" />
        <img src={chicken} alt="Chicken Again" className="w-5 h-5 object-cover" />
        <img src={meat} alt="Meat" className="w-5 h-5 object-cover" />
        <img src={rice} alt="Rice" className="w-5 h-5 object-cover" />
        <img src={spag} alt="Spaghetti" className="w-5 h-5 object-cover" />
        </div>

        <div className='flex gap-4 items-center'>
          <h1 className='font-bold'>Next Post</h1>
    <img src={excellence} alt="" className='w-20 h-20'/>
    
    </div>



</div>

<hr className='w-full border-gray-200'/>

<div className='bg-gray-200 mt-10 p-16'>
  <div className='flex gap-4 items-center'>
    <img src={author} alt="" className='w-30 h-40 object-cover'/>
    <div className='space-y-2'>
      <h1 className='font-bold text-xl'>William Benjamin</h1>
      <p className='text-orange-700'>Author</p>
      <p className='text-gray-500 text-sm'>Re-engineer multimedia based internal or "organic" sources for progressive vortals.<br/>
      Assertively leverage existing economically sound total linkage whereas global best<br/>practices. </p>
    </div>
  </div>

</div>


<h1 className='font-bold text-xl'>3 COMMENTS</h1>
<div className='flex gap-8 items-center'>
    <img src={green} alt="" className='w-30 h-40 object-cover'/>
    <div className='space-y-2'>
      <h1 className='text-gray-500'>10 Mar, 2022</h1>
      <div className='flex justify-between'>
      <h1 className='font-bold text-xl'>Daniel Adam</h1>
      <div className='flex gap-2 items-center font-semibold'>
      <p className='text-orange-700'>Reply</p>
      <CornerUpLeft className='text-orange-700 font-semibold' size={16}/>
      </div>

      </div>
      
      <p className='text-gray-500 text-sm'>Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly<br/>
      productivate plug-and-play markets whereas synergistic scenarios. </p>
    </div>
  </div>
  <hr className='w-full border-gray-200'/>

  <div className='flex gap-8 items-center px-16'>
    <img src={african} alt="" className='w-30 h-40 object-cover'/>
    <div className='space-y-2'>
      <h1 className='text-gray-500'>10 Mar, 2022</h1>
      <div className='flex justify-between'>
      <h1 className='font-bold text-xl'>Zenelia Lozhe</h1>
      <div className='flex gap-2 items-center font-semibold'>
      <p className='text-orange-700'>Reply</p>
      <CornerUpLeft className='text-orange-700 font-semibold' size={16}/>
      </div>

      </div>
      
      <p className='text-gray-500 text-sm'>Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly
      productivate </p>
    </div>
  </div>
  <hr className='w-full border-gray-200'/>

  <div className='flex gap-8 items-center'>
    <img src={smith} alt="" className='w-30 h-40 object-cover'/>
    <div className='space-y-2'>
      <h1 className='text-gray-500'>10 Mar, 2022</h1>
      <div className='flex justify-between'>
      <h1 className='font-bold text-xl'>Jhon Smith</h1>
      <div className='flex gap-2 items-center font-semibold'>
      <p className='text-orange-700'>Reply</p>
      <CornerUpLeft className='text-orange-700 font-semibold' size={16}/>
      </div>

      </div>
      
      <p className='text-gray-500 text-sm'>Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly<br/>
      productivate plug-and-play markets whereas synergistic scenarios. </p>
    </div>
  </div>

  <div className="w-full p-8 bg-gray-100 space-y-4">
    <h1 className='font-bold text-3xl'>Leave a reply</h1>
    

    <div className="flex flex-col md:flex-row gap-4 mt-5 w-full">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="User icon"
        >
          <User size={18} strokeWidth={2} className="text-black" />
        </button>
      </div>

      <div className="relative w-full">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
          aria-label="Email icon"
        >
          <Mail size={18} strokeWidth={2} className="text-black" />
        </button>
      </div>



    </div>

    

      <div className="relative w-full">
        <textarea
          type="text"
          placeholder="Type Your Message"
          className="w-full bg-white text-black p-4 pr-12 placeholder-gray-400 focus:outline-none resize-none min-h-[120px]"
        />
      </div>


<button
  className="flex items-center justify-center gap-2 text-white bg-orange-700 px-5 py-3 w-full text-sm font-bold "
>
  SUBMIT COMMENT

</button>










    </div>
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

export default BlogDetails
