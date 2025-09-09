import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <header className="p-4 w-[85%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 px-2 py-2.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path d="M20 20.5H0V0.5H20V20.5Z" stroke="#E5E7EB" />
                <path
                  d="M2.5 3C2.5 2.30859 1.94141 1.75 1.25 1.75C0.558594 1.75 0 2.30859 0 3V16.125C0 17.8516 1.39844 19.25 3.125 19.25H18.75C19.4414 19.25 20 18.6914 20 18C20 17.3086 19.4414 16.75 18.75 16.75H3.125C2.78125 16.75 2.5 16.4688 2.5 16.125V3ZM18.3828 6.38281C18.8711 5.89453 18.8711 5.10156 18.3828 4.61328C17.8945 4.125 17.1016 4.125 16.6133 4.61328L12.5 8.73047L10.2578 6.48828C9.76953 6 8.97656 6 8.48828 6.48828L4.11328 10.8633C3.625 11.3516 3.625 12.1445 4.11328 12.6328C4.60156 13.1211 5.39453 13.1211 5.88281 12.6328L9.375 9.14453L11.6172 11.3867C12.1055 11.875 12.8984 11.875 13.3867 11.3867L18.3867 6.38672L18.3828 6.38281Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">
              FinanceDaily
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Markets
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Analysis
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Archive
            </a>
          </nav>

          {/* Desktop Subscribe */}
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 hidden md:block"
          >
            Subscribe Free
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 flex flex-col">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Markets
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Analysis
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Archive
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Subscribe Free
            </a>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
