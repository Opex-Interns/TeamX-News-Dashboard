import React from 'react'

function Headings(props) {
  return (
    <div className='flex flex-col gap-1 justify-center font-Roboto mx-auto'>
      <h1 className='text-[#111827] text-center text-3xl font-bold'>
        {props.Heading}
      </h1>
      <p className='text-center text-[#4B5563] text-lg font-light'>
        {props.subHeading}
      </p>
    </div>
  )
}

export default Headings
