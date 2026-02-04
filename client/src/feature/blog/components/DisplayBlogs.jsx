import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, CalendarDays, ArrowRight } from "lucide-react";
import { ADMIM_URL } from "../../../config/env";
import get_blog from "../api/get_blog";

export default function DisplayBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await get_blog();
        setBlogs(response.data);
      } catch (error) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateDescription = (description) => {
    if (!description) return "";
    return description.length > 120
      ? description.substring(0, 120) + "..."
      : description;
  };

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  if (error) {
    return (
      <div className="pt-16 pb-22 md:pt-28 md:pb-32 px-6 text-center font-text bg-bg">
        <p className="text-error text-sm md:text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue">
            Recent Posts
          </h2>
        </div>

        <>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                >
                  <div className="bg-gray-200 h-48 w-full"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500 text-sm md:text-base">
              No blog posts available.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative overflow-hidden h-62">
                      {blog.file ? (
                        <img
                          src={`${ADMIM_URL}/Images/${blog.file}`}
                          alt={blog.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x200?text=Image+Not+Found";
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-4 line-clamp-3">
                        {truncateDescription(blog.description)}
                      </p>
                      <div className="flex items-center text-xs md:text-xs text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          <span>{blog.time} min read</span>
                        </div>
                        <div className="flex items-center ml-auto">
                          <CalendarDays className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blogs/${blog._id}`}
                        className="inline-flex items-center font-semibold text-xs md:text-sm text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Read more
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              {blogs.length > 3 && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-xs md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                  >
                    {showAll ? "Show Less" : "Load More"}
                    <ArrowRight
                      className={`w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform ${
                        showAll ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </>
      </div>
    </section>
  );
}
