import React from 'react'

function Header() {
  return (
    <div>
    <header class="bg-white p-4 shadow-md">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <div class="bg-blue-600 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8m-4 4h8m0 0v8m0-8l-8-8"/>
          </svg>
      </div>
      <span class="text-xl font-bold text-gray-800">FinanceDaily</span>
    </div>
    
    <nav class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a>
      <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Markets</a>
      <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Analysis</a>
      <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Archive</a>
    </nav>
    
    <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 hidden md:block">
      Subscribe Free
    </a>

    <button class="md:hidden text-gray-600 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>
</header>
</div>
  )
}

export default Header
