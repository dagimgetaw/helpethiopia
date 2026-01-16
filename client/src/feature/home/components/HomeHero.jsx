// src/feature/whatwedo/components/EnhancedHero.jsx
import { useState, useEffect } from "react";
import {
  Heart,
  Users,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EnhancedHero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [
      "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
      "/images/whatwedo/hero/photo_2025-12-19_13-58-16.jpg",
      "/images/whatwedo/hero/photo_2025-12-19_13-58-07.jpg",
    ];
    setHeroImages(images);
    setIsLoaded(true);
  }, []);

  const fallbackHeroImages = [
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
  ];

  const stats = [
    {
      icon: <Heart className="w-4 h-4" />,
      value: "1K+",
      label: "Patients Helped",
      color: "text-white",
      bgColor: "bg-[#ffde59]/20",
      borderColor: "border-[#ffde59]/40",
    },
    {
      icon: <Star className="w-4 h-4" />,
      value: "15+",
      label: "Active Programs",
      color: "text-white",
      bgColor: "bg-[#233875]/30",
      borderColor: "border-[#233875]/50",
    },
    {
      icon: <GraduationCap className="w-4 h-4" />,
      value: "490+",
      label: "Workers Trained",
      color: "text-white",
      bgColor: "bg-[#ffde59]/20",
      borderColor: "border-[#ffde59]/40",
    },
    {
      icon: <Users className="w-4 h-4" />,
      value: "245+",
      label: "Volunteers",
      color: "text-white",
      bgColor: "bg-[#233875]/30",
      borderColor: "border-[#233875]/50",
    },
  ];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative pt-4 md:pt-5 pb-12 md:pb-14 font-text overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.length > 0 ? (
          heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`HELP Ethiopia background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#233875]/95 via-[#233875]/70 to-[#233875]/40"></div>
            </div>
          ))
        ) : (
          <div className="absolute inset-0">
            <img
              src={fallbackHeroImages[currentImage]}
              alt="HELP Ethiopia transforming healthcare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#233875]/95 via-[#233875]/70 to-[#233875]/40"></div>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={handlePrev}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="group flex flex-col items-center"
                  aria-label={`Go to image ${index + 1}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "bg-[#ffde59] scale-110"
                        : "bg-white/40 group-hover:bg-white/60"
                    }`}
                  />
                  <span className="sr-only">Image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 mt-0.5">
        <div
          className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full mb-3 border border-white/25">
              <div className="w-1 h-1 bg-[#ffde59] rounded-full animate-pulse"></div>
              <span className="text-white/90 text-xs">
                Transforming Healthcare
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#ffde59]">
                HELP ETHIOPIA
              </span>
            </h1>

            <div className="max-w-lg mx-auto mb-4">
              <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                <span className="font-semibold text-[#ffde59]">
                  Empowering communities
                </span>{" "}
                with <span className="font-medium text-white">hope</span>,{" "}
                <span className="font-medium text-[#ffde59]">care</span>, and{" "}
                <span className="font-semibold text-white">action</span>
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#ffde59] to-transparent mx-auto mt-2 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative backdrop-blur-md rounded-lg p-2 border"
                style={{
                  backgroundColor: stat.bgColor.includes("233875")
                    ? "rgba(35, 56, 117, 0.3)"
                    : "rgba(255, 222, 89, 0.2)",
                  borderColor: stat.borderColor.includes("233875")
                    ? "rgba(35, 56, 117, 0.5)"
                    : "rgba(255, 222, 89, 0.4)",
                }}
              >
                <div className="flex justify-center mb-1">
                  <div
                    className={`p-1 rounded ${
                      stat.bgColor.includes("233875")
                        ? "bg-[#233875]/40 text-white"
                        : "bg-[#ffde59]/30 text-[#ffde59]"
                    }`}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div className="text-lg md:text-xl font-bold text-white text-center">
                  {stat.value}
                </div>

                <div className="text-white/90 text-xs text-center truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <div className="w-4 h-px bg-[#ffde59]"></div>
                <h3 className="text-white font-medium text-xs">Our Work</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
              {[
                "/images/whatwedo/hero/kids-happy-africa-charity-redrhino.jpg",
                "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
                "/images/whatwedo/hero/photo_2025-12-19_13-57-56.jpg",
                "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
                "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
                "/images/whatwedo/yeeteye/photo_2025-12-19_14-01-59.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`HELP Ethiopia ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = fallbackHeroImages[index % 3];
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
