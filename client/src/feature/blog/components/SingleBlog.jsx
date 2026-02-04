import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, CalendarDays } from "lucide-react";
import NotFoundPage from "../../../pages/NotFoundPage";
import single_blog from "../api/single_blog";
import { ADMIM_URL } from "../../../config/env.js";
import Spinner from "../../../components/Spinner.jsx";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          setError("No blog ID provided");
          setIsLoading(false);
          return;
        }

        const response = await single_blog(id); // Pass the id here
        setBlog(response.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch blog",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !blog) {
    return <NotFoundPage />;
  }

  // Render HTML content instead of splitting paragraphs
  return (
    <div className="min-h-screen font-text bg-bg">
      <div className="max-w-4xl mx-auto">
        <article className="py-8">
          <header className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-4 text-center">
              {blog.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-darkblue">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span className="text-xs sm:text-sm">{blog.time} min read</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-3 h-3 mr-1" />
                <span className="text-xs sm:text-sm">
                  {blog.date ||
                    new Date(blog.createdAt).toLocaleDateString("en-GB")}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {blog.file && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={`${ADMIM_URL}/images/${blog.file}`}
                alt={blog.title}
                loading="lazy"
                className="w-full h-auto grayscale-[0.15] object-cover"
                onError={(e) => {
                  e.target.src = "/fallback-image.jpg";
                }}
              />
            </div>
          )}

          {/* Blog Content - Render HTML if available, otherwise render markdown */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
            {blog.contentHtml ? (
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
              />
            ) : blog.description ? (
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {blog.description}
              </div>
            ) : (
              <p className="text-gray-500 italic">No content available</p>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Back to All Blogs
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
