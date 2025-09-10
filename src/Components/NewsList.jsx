import React, { useEffect, useState } from 'react'
import NewsLayout from '../Layout/NewsLayout'

// Helpers
function timeAgo(pubDate) {
  const timestamp = new Date(pubDate).getTime()
  const now = Date.now()
  const secondsAgo = Math.floor((now - timestamp) / 1000)

  const minutes = Math.floor(secondsAgo / 60)
  const hours = Math.floor(secondsAgo / 3600)
  const days = Math.floor(secondsAgo / 86400)

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`
  if (minutes < 60) return `${minutes} minutes ago`
  if (hours < 24) return `${hours} hours ago`
  return `${days} days ago`
}

function truncateText(text, wordLimit) {
  if (!text) return ""
  const words = text.split(' ')
  if (words.length <= wordLimit) return text
  return words.slice(0, wordLimit).join(' ') + '...'
}

function NewsList() {
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY
  const [newsData, setNewsData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
         `https://newsdata.io/api/1/latest?country=ng&category=Business&apikey=${apiKey}`

        )
        const data = await res.json()
        // Newsdata.io keeps news articles in `data.results`
        setNewsData(data.results || [])
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
            key={news.article_id}
            image={news.image_url}
            category={news.source_name ? news.source_name : "TOP"}
            datetime={timeAgo(news.pubDate)}
            headline={truncateText(news.title, 9)}
            summary={truncateText(news.description, 25)}
            url={news.link}
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
