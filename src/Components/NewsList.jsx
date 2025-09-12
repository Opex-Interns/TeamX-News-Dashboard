import React, { useEffect, useState, useRef } from 'react'
import NewsLayout from '../Layout/NewsLayout'
import api from "../api/axios"

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
  // const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY
  const [newsData, setNewsData] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(true); // 👈 loading state
  const [error, setError] = useState(null); // 👈 error state
  const sectionRef = useRef(null) // 👈 reference to the section

   useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get("/news"); // 👈 call backend /api/news
        setNewsData(res.data || []);
      } catch (err) {
        setError("Failed to load news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleToggle = () => {
    if (showAll) {
      // when collapsing, scroll back to section
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    setShowAll(!showAll)
  }

  const displayedNews = showAll ? newsData : newsData.slice(0, 3)

  return (
    <div ref={sectionRef} className="w-[80%] mx-auto flex flex-col items-center">
      {loading && <p className="text-gray-500">Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {displayedNews.map((news) => (
    <NewsLayout
      key={news._id}
      image={news.image}
      category={news.category || "Finance"}
      datetime={timeAgo(news.pubDate)}
      headline={truncateText(news.headline, 9)}
      summary={truncateText(news.summary, 25)}
      url={news.url}
    />
  ))}
</div>


          {newsData.length > 6 && (
            <button
              onClick={handleToggle}
              className="mt-6 px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1E40AF] transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default NewsList
