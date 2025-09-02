import React from 'react'
import NavBar1 from '../components/NavBar1'

const SuccessfulOrder = () => {
  return (
    <div>
      <NavBar1/>
      <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>
      </div>


      
    </div>
  )
}

export default SuccessfulOrder
