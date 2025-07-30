import React from 'react'
import NavBar4 from "../components/NavBar4"
import bg from "../assets/images/depositphotos_11514732-Group-of-professional-female-chefs.jpg"
import { Link } from 'react-router-dom'
import Chef from '../components/chef'
import Footer1 from '../components/Footer1'

const Team = () => {
  return (
    <div>
      <div>
      <NavBar4/>

      <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${bg})` }}>
        
        <div className="absolute inset-0 bg-black/50" /></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">OUR CHEF</h1>
          <div className='flex font-bold gap-2'>
            <Link to ="/"> <p>HOME / </p> </Link>
            <Link to="/team"><span>OUR CHEF</span></Link>
            </div>

            <h2 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700">TEAM EXPERT</h2>
           
          
        </div>
        
        
    </div>
      
    </div>

    <div className='mt-16'>
      <Chef/>
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

export default Team
