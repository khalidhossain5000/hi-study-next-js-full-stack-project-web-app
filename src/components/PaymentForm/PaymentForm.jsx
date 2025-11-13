'use client';
import React, { useState } from "react";

const PaymentForm = () => {
  const [method, setMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const paymentGuides = {
    bkash: {
      number: "01912-345678",
      guide: "Open your bKash app → Tap ‘Send Money’ → Enter this number → Send the amount → Copy your Transaction ID.",
    },
    rocket: {
      number: "01722-334455",
      guide: "Go to Rocket app → Tap ‘Send Money’ → Enter the number → Send the amount → Save the Transaction ID.",
    },
    nagad: {
      number: "01888-556677",
      guide: "Open Nagad app → Tap ‘Send Money’ → Enter this number → Send the amount → Note down your Transaction ID.",
    },
    upay: {
      number: "01666-778899",
      guide: "Go to Upay app → Choose ‘Send Money’ → Enter the number → Send payment → Copy Transaction ID.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* 🌈 Beautiful Gradient Banner */}
      <div className="relative overflow-hidden py-24 text-center bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb] dark:from-[#4f46e5] dark:via-[#9333ea] dark:to-[#4338ca] shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            Make Your Payment 💳
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Secure • Fast • Reliable — Complete your transaction instantly
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 💰 Payment Form */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 mt-10 mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Payment Information
        </h2>

        {/* Select Payment Method */}
        <div className="mb-6">
          <label
            htmlFor="payment-method"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Select Payment Method
          </label>
          <select
            id="payment-method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">-- Choose a method --</option>
            <option value="bkash">bKash</option>
            <option value="rocket">Rocket</option>
            <option value="nagad">Nagad</option>
            <option value="upay">Upay</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        {/* Payment Guide */}
        {method && (
          <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
              Payment Guide
            </h3>
            {paymentGuides[method]?.number && (
              <p className="text-gray-800 dark:text-gray-200 mb-1">
                Send payment to:{" "}
                <span className="font-semibold">
                  {paymentGuides[method].number}
                </span>
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {paymentGuides[method].guide}
            </p>
          </div>
        )}

        {/* Transaction ID Field */}
        {method && method !== "card" && (
          <div className="mb-6">
            <label
              htmlFor="transaction-id"
              className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
            >
              Transaction ID
            </label>
            <input
              id="transaction-id"
              type="text"
              placeholder="Enter your transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          className="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all shadow-md"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
