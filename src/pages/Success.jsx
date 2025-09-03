
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Successful </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order! Your payment has been processed successfully.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/menu"
            className="px-4 py-2 rounded-lg bg-orange-700 text-white font-semibold hover:bg-orange-800"
          >
            Back to Menu
          </Link>
          <Link
            to="/orders"
            className="px-4 py-2 rounded-lg bg-gray-300 font-semibold hover:bg-gray-400"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
