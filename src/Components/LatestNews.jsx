import React from 'react'
import Headings from './Headings'
import NewsLayout from '../Layout/NewsLayout'
import NewsList from './NewsList'
function LatestNews() {
  return (
    <div className='bg-[#f9fafb] border border-[#e5e7eb] flex flex-col gap-10 py-15 justify-center items-center'>
      <Headings Heading={'Latest Finance News'} subHeading={'Stay updated with the most recent market developments'}/>
        <NewsList/>
    </div>
  )
}

export default LatestNews
