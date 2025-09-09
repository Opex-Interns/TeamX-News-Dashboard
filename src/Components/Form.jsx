import React from 'react'

function Form(props) {
  return (
    <form className="flex flex-col sm:flex-row w-full sm:w-[70%] md:max-w-[50%] lg:max-w-[30%] p-2 bg-white rounded-md">
      <input 
        type="email" 
        placeholder="Enter your email address"
        className="flex-1 px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
      />
      <button 
        type="submit" 
        className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-[#D97706] transition"
      >
        {props.linkName}
      </button>
    </form>
  )
}

export default Form
