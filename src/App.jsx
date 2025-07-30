import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home1 from "./pages/Home1"
import Home2 from "./pages/Home2"
import Home3 from "./pages/Home3"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Team from "./pages/Team"
import TeamDetails from './pages/TeamDetails'
import BookTable from "./pages/BookTable"
import Blog from "./pages/Blog"
import BlogDetails from './pages/BlogDetails'
import FoodGallery1 from './pages/FoodGallery1'
import Menu from './pages/Menu'
import ShopDetails from './pages/ShopDetails'
import Shop from "./pages/Shop"



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element ={<Home1/>}></Route>
          <Route path='/home-two' element ={<Home2/>}></Route>
          <Route path='/home-three' element ={<Home3/>}></Route>
          <Route path='/about-us' element ={<AboutUs/>}></Route>
          <Route path='/contact' element ={<ContactUs/>}></Route>
          <Route path='/team' element ={<Team/>}></Route>
          <Route path='/team-details' element ={<TeamDetails/>}></Route>
          <Route path='/book-table' element ={<BookTable/>}></Route>
          <Route path='/blog' element ={<Blog/>}></Route>
          <Route path='/blog-details' element ={<BlogDetails/>}></Route>
          <Route path='/food-gallery' element ={<FoodGallery1/>}></Route>
          <Route path='/menu' element ={<Menu/>}></Route>
          <Route path='/shop-details' element ={<ShopDetails/>}></Route>
          <Route path='/shop' element ={<Shop/>}></Route>

        </Routes>
        </Router> 








      
    </div>
  )
}

export default App
