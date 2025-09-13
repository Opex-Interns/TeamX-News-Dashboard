import React, { useEffect, useState, useRef } from "react";
import NewsLayout from "../Layout/NewsLayout";
import api from "../api/axios";

// ✅ Helper to format time ago
function timeAgo(unixSeconds) {
  if (!unixSeconds) return "";
  const timestamp = unixSeconds * 1000;
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minutes ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} hours ago`;
  return `${Math.floor(secondsAgo / 86400)} days ago`;
}

// ✅ Helper to truncate long text
function truncateText(text, wordLimit) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function NewsList({ scrollThreshold = 300 }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 👇 Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const sectionRef = useRef(null);

  // ✅ Fetch news from backend with pagination
  const fetchNews = async (pageNum = 1, reset = false) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get(`/news?page=${pageNum}&limit=${limit}`);

      if (reset) {
        setNewsData(res.data.data || []);
      } else {
        setNewsData((prev) => [...prev, ...(res.data.data || [])]);
      }

      setPage(res.data.page);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      setError("Failed to load news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(1, true);
  }, []);

  // ✅ Show "↑ Top" button when scrolling past threshold
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchNews(page + 1);
    }
  };

  // ✅ Reset back to page 1 & scroll smoothly
  const scrollToTop = () => {
    fetchNews(1, true); // reset to first page
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={sectionRef} className="w-[80%] mx-auto flex flex-col items-center">
      {loading && page === 1 && <p className="text-gray-500">Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {newsData.map((news) => (
              <NewsLayout
                key={news.id || news.url}
                image={news.image || "https://via.placeholder.com/400x200?text=No+Image"}
                category={news.category || "Finance"}
                datetime={timeAgo(news.datetime)}
                headline={truncateText(news.headline, 9)}
                summary={truncateText(news.summary, 25)}
                url={news.url}
              />
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            {page < totalPages && (
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1E40AF] transition disabled:opacity-50"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            )}

            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
              >
                ↑ Top
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NewsList;
