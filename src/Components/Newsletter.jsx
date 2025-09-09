import React from 'react';
import Headings from './Headings';

function Newsletter() {
  return (
    <section className="flex flex-col items-center gap-6 py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <Headings 
        Heading={'Newsletter Preview'} 
        subHeading={`See what you'll receive in your inbox`} 
      />

      {/* Newsletter Card */}
      <div className="bg-[#f3f4f6] border border-[#D1D5DB] rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg w-full">
          
          {/* Card Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-xl">
            <h3 className="text-lg sm:text-xl font-semibold">📈 FinanceDaily Morning Brief</h3>
            <span className="text-xs sm:text-sm">March 15, 2024 | Market Opening Edition</span>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-4">
            {/* Market Highlights */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">📊 Market Highlights</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                <li>S&P 500: +0.8% (4,185.2)</li>
                <li>NASDAQ: +1.2% (12,845.6)</li>
                <li>DOW: +0.6% (33,892.4)</li>
              </ul>
            </div>

            {/* Today's Focus */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">💡 Today's Focus</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Federal Reserve meeting minutes release at 2 PM EST. 
                Key earnings reports from major tech companies expected...
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-4 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
              py-2 px-4 rounded-md w-full sm:w-64 transition">
              View Full Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
