import React from 'react'
import Form from './Form'

function Hero() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-r from-[#2563EB] to-[#1E40AF] flex flex-col justify-center items-center text-center text-white px-4">
      <h2 className="text-5xl font-extrabold mb-4">
        Stay Ahead of the Markets
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Get the latest finance news, market analysis, and investment insights 
        delivered to your inbox every morning.
      </p>
      <Form />
      <p className="text-sm mt-3 text-gray-200">
        Join 50,000+ investors. No spam, unsubscribe anytime.
      </p>
    </div>
  )
}

export default Hero
