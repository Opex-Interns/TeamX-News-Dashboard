import React from 'react'
import Form from '../Components/Form'

function HeroLayout(props) {
  return (
    <div className="w-full h-[600px] bg-gradient-to-r from-[#2563EB] to-[#1E40AF] flex flex-col gap-2 justify-center items-center text-center text-white px-4 font-Roboto">
      {/* Responsive Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {props.title}
      </h2>

      {/* Responsive Subtitle */}
      <p className="text-base sm:text-lg md:text-2xl font-light mb-6 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%]">
        {props.subtitle}
      </p>

      {/* Button / Form */}
      <Form linkName={props.ButtonName} />

      {/* Footer Note */}
      <p className="text-xs sm:text-sm mt-3 text-gray-200">
        {props.suscribe}
      </p>
    </div>
  )
}

export default HeroLayout
