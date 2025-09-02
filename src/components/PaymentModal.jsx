import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useAuth } from "../context/AuthContext";

const PaymentModal = ({ amount, onClose, onSuccess }) => {
  const { user } = useAuth();

  const config = {
    publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
    reference: new Date().getTime().toString(),
    email: user?.email || "test@example.com",
    amount: amount * 100,
  };

  
  const handlePaymentSuccess = (reference) => {
    console.log("Payment successful:", reference);
    localStorage.setItem("transid", reference.reference);
    if (onSuccess) {

    onSuccess();
    }
  };

  const handlePaymentClose = () => {
    console.log("Payment cancelled");
    onClose();
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md sm:max-w-lg md:max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
          Complete Payment
        </h2>

        <p className="mb-4 text-center sm:text-left">
          You are about to pay{" "}
          <span className="font-bold text-orange-700">
            ₦{amount.toFixed(2)}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              initializePayment(handlePaymentSuccess, handlePaymentClose)
            }
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-orange-700 text-white hover:bg-orange-800 hover:cursor-pointer"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
