import { useRef, useState, useEffect } from "react";
import { CaretRight, CaretLeft, Clock, Calendar } from "phosphor-react";
import { data } from "..";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTransitionEnd = () => setIsTransitioning(false);
    container.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      container.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  const navigate = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % data.length
        : (prev - 1 + data.length) % data.length,
    );
  };

  const getTransform = () => `translateX(-${currentIndex * 100}%)`;

  return (
    <section className="bg-bg font-text px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue">
            Insights & Updates
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-darkgray max-w-5xl mx-auto leading-relaxed">
            Explore our collection of thought provoking articles and stay
            updated with the latest trends.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation */}
          <button
            onClick={() => navigate("prev")}
            className="absolute top-1/2 -left-2 sm:-left-4 md:-left-8 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-darkblue hover:text-white transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <CaretLeft weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={() => navigate("next")}
            className="absolute top-1/2 -right-2 sm:-right-4 md:-right-8 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-darkblue hover:text-white transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <CaretRight weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slides Wrapper */}
          <div
            ref={containerRef}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: getTransform() }}
            >
              {data.map((blog) => (
                <div
                  key={blog.id}
                  className="shrink-0 w-full min-h-[360px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[450px] flex"
                >
                  <div className="bg-white flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 h-56 sm:h-64 md:h-72 lg:h-auto relative">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-0 inset-x-0 p-2 sm:p-4 md:p-6">
                        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-medium text-white bg-blue/80 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 px-4 py-6 sm:px-6 md:px-8 md:py-8 flex flex-col">
                      <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-darkblue mb-3 sm:mb-4 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-3 sm:mb-4">
                        {blog.content}
                      </p>

                      <p className="hidden sm:block text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                        {blog.sub}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-3">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 md:h-4 md:w-4 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-darkblue w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
