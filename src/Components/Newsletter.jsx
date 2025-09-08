import React from 'react';

function Newsletter() {
  return (
    
    <div className="flex flex-col items-center mt-10 py-24">
      {/* Section Header */}
      <h1 className="text-5xl font-bold text-gray-800 pb-4">Newsletter Preview</h1>
      <p className="text-xl text-gray-500 mb-8 pb-12">See what you'll receive in your inbox</p>

      {/* Newsletter Card */}
      <div className="bg-gray-200 rounded-2xl shadow-xl p-8 max-w-xl ">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full ">
        {/* Card Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-xl">
          <h3 className="text-lg font-semibold">📈 FinanceDaily Morning Brief</h3>
          <span className="text-sm">March 15, 2024 | Market Opening Edition</span>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          {/* Market Highlights */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">📊 Market Highlights</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>S&P 500: +0.8% (4,185.2)</li>
              <li>NASDAQ: +1.2% (12,845.6)</li>
              <li>DOW: +0.6% (33,892.4)</li>
            </ul>
          </div>

          {/* Today's Focus */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">💡 Today's Focus</h4>
            <p className="text-gray-600 text-sm">
              Federal Reserve meeting minutes release at 2 PM EST. 
              Key earnings reports from major tech companies expected...
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
          py-2 px-4 rounded-md w-64">
            View Full Newsletter
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Newsletter;
