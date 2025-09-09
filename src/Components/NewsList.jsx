import React, { useState } from 'react'
import NewsData from './Data'
import NewsLayout from '../Layout/NewsLayout'

// ✅ Helper: Convert UNIX timestamp → "x hours ago"
function timeAgo(timestamp) {
  const now = Date.now() / 1000
  const secondsAgo = Math.floor(now - timestamp)

  const minutes = Math.floor(secondsAgo / 60)
  const hours = Math.floor(secondsAgo / 3600)
  const days = Math.floor(secondsAgo / 86400)

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`
  if (minutes < 60) return `${minutes} minutes ago`
  if (hours < 24) return `${hours} hours ago`
  return `${days} days ago`
}

// ✅ Helper: Truncate text
function truncateText(text, wordLimit) {
  const words = text.split(' ')
  if (words.length <= wordLimit) return text
  return words.slice(0, wordLimit).join(' ') + '...'
}

function NewsList() {
  const [showAll, setShowAll] = useState(false)

  // Show only 6 items unless "More" is clicked
  const displayedNews = showAll ? NewsData : NewsData.slice(0, 6)

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center">
      {/* News cards */}
      
      <div className="flex flex-wrap gap-6 justify-center">
        {displayedNews.map(news => (
          <NewsLayout
            key={news.id}
            id={news.id}
            image={news.image}
            category={news.category}
            datetime={timeAgo(news.datetime)}
            headline={truncateText(news.headline, 9)}
            summary={truncateText(news.summary, 25)}
            url={news.url}
          />
        ))}
      </div>

      {/* More button */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1E40AF] transition "
        >
          More
        </button>
      )}
    </div>
  )
}

export default NewsList
