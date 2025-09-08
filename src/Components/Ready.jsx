import React from 'react'

function Ready() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-r from-[#2563EB] to-[#1E40AF] flex flex-col justify-center items-center text-center text-white px-4">
      <h2 className="text-4xl font-extrabold mb-4">
        Ready to Stay Informed?
      </h2>
      <p className="text-lg mb-6 max-w-xl">
        Join thousands of investors who start their day with FinanceDaily
      </p>
      <form className="flex w-full max-w-lg mb-4">
        <input 
          type="email" 
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-l-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-r-md hover:bg-[#D97706] transition"
        >
          Get Started
        </button>
      </form>
      <p className="text-sm text-gray-200">
        100% free. No credit card required. Unsubscribe anytime.
      </p>
    </div>
  )
}

export default Ready
