import React from 'react'

function Form() {
  return (
    <form className="flex w-full max-w-lg">
      <input 
        type="email" 
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 rounded-l-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
      />
      <button 
        type="submit" 
        className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-r-md hover:bg-[#D97706] transition"
      >
        Subscribe
      </button>
    </form>
  )
}

export default Form
