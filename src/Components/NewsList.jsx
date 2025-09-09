import React, { useEffect, useState } from 'react'
import NewsLayout from '../Layout/NewsLayout'

// Helpers
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

function truncateText(text, wordLimit) {
  const words = text.split(' ')
  if (words.length <= wordLimit) return text
  return words.slice(0, wordLimit).join(' ') + '...'
}

function NewsList() {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY
  const [newsData, setNewsData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
        )
        const data = await res.json()
        setNewsData(data)
      } catch (err) {
        console.error('Error fetching news:', err)
      }
    }

    fetchNews()
  }, [apiKey])

  const displayedNews = showAll ? newsData : newsData.slice(0, 6)

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center">
      {/* News cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {displayedNews.map((news) => (
          <NewsLayout
            key={news.url} // safer unique key
            image={news.image}
            category={news.category}
            datetime={timeAgo(news.datetime)}
            headline={truncateText(news.headline, 9)}
            summary={truncateText(news.summary, 25)}
            url={news.url}
          />
        ))}
      </div>

      {/* Toggle Button */}
      {newsData.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1E40AF] transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default NewsList
