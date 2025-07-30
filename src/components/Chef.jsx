import React from 'react'
import chef1 from "../assets/images/Image2.png"
import chef2 from "../assets/images/about 1.png"
import chef3 from "../assets/images/about 2.png"
import chef4 from "../assets/images/about 3.png"
import chef5 from "../assets/images/about 4.png"
import chef6 from "../assets/images/first-section.png"
import { Link } from 'react-router-dom'


const chef = [
  { id: 1, name: "KUMAN TUNMAN", img: chef1 },
  { id: 2, name: "BENJAMIN KENNETH", img: chef2 },
  { id: 3, name: "MATTHEW NATHANIEL", img: chef3 },
  { id: 4, name: "GEORGE JAMES", img: chef4 },
  { id: 5, name: "EDWARD MAY", img: chef5 },
  { id: 6, name: "PATRICK ROBERT", img: chef6 }
  
]

const Chef = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
        {chef.map((item) => (
          <Link to="/team-details">
          <div
            key={item.id}
            className="bg-white overflow-hidden transition border border-gray-300 p-4 hover:shadow-xl transform hover:scale-105 duration-300"
          >
            <img
              src={item.img}
              className="w-full h-60 object-cover "
              alt={item.name}
            />
            <div className=" text-center space-y-4 mt-5">
              <h3 className="font-bold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">
                WAITER
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Chef
