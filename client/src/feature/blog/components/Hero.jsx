import { useRef, useState, useEffect } from "react";
import image1 from "../../../assets/image1.webp";
import image2 from "../../../assets/image2.webp";
import { CaretRight, CaretLeft, Clock, Calendar } from "phosphor-react";

const data = [
  {
    id: 1,
    image: image1,
    title: "HELP Ethiopia at Ethiopian Nuclear Science Society Conference",
    content:
      "HELP Ethiopia proudly showcased its work at the Third Annual Ethiopian Nuclear Science Society Conference, presenting our healthcare, education, and charity initiatives while engaging with professionals committed to advancing science and health in Ethiopia.",
    sub: "The event enabled us to highlight Ye’Eteye Charity, health service delivery, and education programs, connect with partners, and register new members and volunteers strengthening our mission to build a healthier, educated, and empowered society.",
    date: "Sep 08, 2025",
    category: "Conference",
    readTime: "3 min read",
  },
  {
    id: 2,
    image: image2,
    title: "Sport to Support: Fundraising for Ye’Eteye Charity",
    content:
      "We had an amazing time at the Feb 4 HELP Ethiopia sports event at St. Joseph School, featuring group aerobics and a competitive soccer match, all organized to raise funds for a meaningful health cause.",
    sub: "The event supported Ye’Eteye Charity, aiding over 1,000 patients at Tikur Anbessa Hospital, while promoting HELP Ethiopia’s mission of Health, Education, Leadership, and Partnership through community engagement and advocacy.",
    date: "Sep 10, 2025",
    category: "Sport",
    readTime: "2 min read",
  },
];

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

  const getTransform = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="bg-bg font-text px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="max-w-7xl mx-auto">
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
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate("prev")}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-darkblue hover:text-white transition-all duration-300 z-10 cursor-pointer"
            aria-label="Previous slide"
          >
            <CaretLeft className="w-4 h-4 sm:w-5 sm:h-5" weight="bold" />
          </button>

          <button
            onClick={() => navigate("next")}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-darkblue hover:text-white transition-all duration-300 z-10 cursor-pointer"
            aria-label="Next slide"
          >
            <CaretRight className="w-4 h-4 sm:w-5 sm:h-5" weight="bold" />
          </button>

          {/* Slides Container */}
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
                  className="shrink-0 w-full h-137.5 md:h-112.5 lg:h-112.5 flex"
                >
                  <div className="bg-white flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
                      <img
                        src={blog.image}
                        alt={`Image for ${blog.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6">
                        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-medium text-white bg-blue/80 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-darkblue mb-4 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                        {blog.content}
                      </p>
                      <p className="hidden sm:flex text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                        {blog.sub}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700 leading-6 md:leading-loose">
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

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-darkblue w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
