import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 font-Roboto">
      <div className="container mx-auto px-4 w-[90%]">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Logo + Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-blue-600 px-2 py-2.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M20 20.5H0V0.5H20V20.5Z" stroke="#E5E7EB"/>
                  <path d="M2.5 3C2.5 2.30859 1.94141 1.75 1.25 1.75C0.558594 1.75 0 2.30859 0 3V16.125C0 17.8516 1.39844 19.25 3.125 19.25H18.75C19.4414 19.25 20 18.6914 20 18C20 17.3086 19.4414 16.75 18.75 16.75H3.125C2.78125 16.75 2.5 16.4688 2.5 16.125V3ZM18.3828 6.38281C18.8711 5.89453 18.8711 5.10156 18.3828 4.61328C17.8945 4.125 17.1016 4.125 16.6133 4.61328L12.5 8.73047L10.2578 6.48828C9.76953 6 8.97656 6 8.48828 6.48828L4.11328 10.8633C3.625 11.3516 3.625 12.1445 4.11328 12.6328C4.60156 13.1211 5.39453 13.1211 5.88281 12.6328L9.375 9.14453L11.6172 11.3867C12.1055 11.875 12.8984 11.875 13.3867 11.3867L18.3867 6.38672L18.3828 6.38281Z" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">FinanceDaily</span>
            </div>
            <p className="text-base leading-relaxed">
              Your trusted source for daily finance news and market insights.
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Content</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Market News</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Newsletter Archive</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.132 0-5.66 2.53-5.66 5.635 0 .444.05.875.146 1.285-4.706-.237-8.882-2.493-11.684-5.923-.485.836-.763 1.815-.763 2.868 0 1.968 1.002 3.702 2.51 4.72-.93.03-1.802-.284-2.56-.704v.073c0 2.73 1.944 5.004 4.512 5.514-.469.128-.962.19-1.472.19-.36 0-.71-.035-1.05-.1.718 2.196 2.793 3.805 5.242 3.84-1.928 1.516-4.364 2.417-7.005 2.417-.456 0-.903-.027-1.344-.078 2.484 1.583 5.432 2.51 8.604 2.51 10.323 0 15.962-8.56 15.962-15.95 0-.243-.005-.486-.013-.727.917-.665 1.708-1.492 2.332-2.44z"/> </svg>
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {/* LinkedIn Icon */}
               <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M22.238 0H1.762C.789 0 0 .789 0 1.762v20.476C0 23.211.789 24 1.762 24h20.476c.973 0 1.762-.789 1.762-1.762V1.762C24 .789 23.211 0 22.238 0zM7.058 19.344h-3.626V8.163h3.626v11.181zM5.242 6.51c-1.144 0-1.849-.787-1.849-1.782.01-1.012.7-1.783 1.821-1.783 1.145 0 1.85.771 1.85 1.783-.001.995-.705 1.782-1.822 1.782zM20.457 19.344h-3.626v-5.592c0-1.334-.025-2.656-1.717-2.656-1.72 0-1.984 1.344-1.984 2.585v5.663h-3.626V8.163h3.626v1.564c.51-.97 1.724-1.828 3.585-1.828 3.842 0 4.542 2.52 4.542 5.8v5.663z"/> </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {/* Facebook Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.86 4.225 10.725 9.789 11.838v-8.358H6.757v-3.48h3.032V8.65c0-2.993 1.79-4.634 4.5-4.634 1.306 0 2.652.23 2.652.23v2.915h-1.493c-1.472 0-1.928.913-1.928 1.844v2.245h3.328l-.533 3.48h-2.795v8.358C19.773 22.724 23.998 17.86 23.998 12z"/> </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          &copy; 2025 FinanceDaily. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
