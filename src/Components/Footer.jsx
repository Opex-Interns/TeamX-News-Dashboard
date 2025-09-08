import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-gray-400 py-10">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center space-x-2 mb-2">
          <div class="bg-blue-600 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8m-4 4h8m0 0v8m0-8l-8-8"/>
</svg>
          </div>
          <span class="text-xl font-bold text-white">FinanceDaily</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed">Your trusted source for daily finance news and market insights.</p>
      </div>
      
      <div>
        <h3 class="text-white font-semibold mb-4">Content</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white transition-colors duration-200">Market News</a></li>
          <li><a href="#" class="hover:text-white transition-colors duration-200">Analysis</a></li>
          <li><a href="#" class="hover:text-white transition-colors duration-200">Newsletter Archive</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-white font-semibold mb-4">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white transition-colors duration-200">About Us</a></li>
          <li><a href="#" class="hover:text-white transition-colors duration-200">Contact</a></li>
          <li><a href="#" class="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-white font-semibold mb-4">Follow Us</h3>
        <div class="flex space-x-4">
  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.132 0-5.66 2.53-5.66 5.635 0 .444.05.875.146 1.285-4.706-.237-8.882-2.493-11.684-5.923-.485.836-.763 1.815-.763 2.868 0 1.968 1.002 3.702 2.51 4.72-.93.03-1.802-.284-2.56-.704v.073c0 2.73 1.944 5.004 4.512 5.514-.469.128-.962.19-1.472.19-.36 0-.71-.035-1.05-.1.718 2.196 2.793 3.805 5.242 3.84-1.928 1.516-4.364 2.417-7.005 2.417-.456 0-.903-.027-1.344-.078 2.484 1.583 5.432 2.51 8.604 2.51 10.323 0 15.962-8.56 15.962-15.95 0-.243-.005-.486-.013-.727.917-.665 1.708-1.492 2.332-2.44z"/>
  </svg>
</a>
  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.238 0H1.762C.789 0 0 .789 0 1.762v20.476C0 23.211.789 24 1.762 24h20.476c.973 0 1.762-.789 1.762-1.762V1.762C24 .789 23.211 0 22.238 0zM7.058 19.344h-3.626V8.163h3.626v11.181zM5.242 6.51c-1.144 0-1.849-.787-1.849-1.782.01-1.012.7-1.783 1.821-1.783 1.145 0 1.85.771 1.85 1.783-.001.995-.705 1.782-1.822 1.782zM20.457 19.344h-3.626v-5.592c0-1.334-.025-2.656-1.717-2.656-1.72 0-1.984 1.344-1.984 2.585v5.663h-3.626V8.163h3.626v1.564c.51-.97 1.724-1.828 3.585-1.828 3.842 0 4.542 2.52 4.542 5.8v5.663z"/>
  </svg>
</a>
  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.86 4.225 10.725 9.789 11.838v-8.358H6.757v-3.48h3.032V8.65c0-2.993 1.79-4.634 4.5-4.634 1.306 0 2.652.23 2.652.23v2.915h-1.493c-1.472 0-1.928.913-1.928 1.844v2.245h3.328l-.533 3.48h-2.795v8.358C19.773 22.724 23.998 17.86 23.998 12z"/>
    </svg>
  </a>
</div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
      &copy; 2025 FinanceDaily. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
