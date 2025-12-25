// src/feature/whatwedo/components/EnhancedHero.jsx
import { useState, useEffect } from 'react';

const EnhancedHero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const images = [
      "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
      "/images/whatwedo/hero/photo_2025-12-19_13-58-16.jpg",
      "/images/whatwedo/hero/photo_2025-12-19_13-58-07.jpg"
    ];
    setHeroImages(images);
  }, []);

  const fallbackHeroImages = [
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="relative py-16 md:py-24 font-text">
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={(heroImages.length > 0 ? heroImages : fallbackHeroImages)[currentImage]}
          alt="Hero Background"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkblue/40 to-gold/10 mix-blend-multiply"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkblue/40 via-gold/20 to-blue/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* HERO TEXT (HELP Ethiopia Blue) */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-blue mb-4 leading-tight">
              HELP <span className="text-blue">Ethiopia</span>
            </h1>
<p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
  <span className="text-gold font-bold">Empowering</span> communities with{" "}
  <span className="text-blue font-semibold">hope</span>,{" "}
  <span className="text-gold font-semibold">care</span>, and{" "}
  <span className="text-blue font-bold">action</span>, building a brighter{" "}
  <span className="text-gold font-bold">Ethiopia</span>.
</p>



            {/* Image Switch Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-gold scale-125"
                      : "bg-blue/50 hover:bg-gold"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              ["1K+", "Patients Helped", "text-blue"],
              ["15+", "Active Programs", "text-gold"],
              ["490+", "Workers Trained", "text-blue"],
              ["245+", "Volunteers", "text-gold"],
            ].map(([value, label, color], i) => (
              <div
                key={i}
                className="bg-bg/90 backdrop-blur-[2px] rounded-xl p-4 text-center shadow-lg"
              >
                <div className={`text-3xl md:text-4xl font-bold ${color}`}>{value}</div>
                <div className="text-darkgray font-medium">{label}</div>
              </div>
            ))}
          </div>

          {/* PHOTO GALLERIES */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
            {[
              "/images/whatwedo/hero/kids-happy-africa-charity-redrhino.jpg",
              "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
              "/images/whatwedo/hero/photo_2025-12-19_13-57-56.jpg",
              "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
              "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
              "/images/whatwedo/yeeteye/photo_2025-12-19_14-01-59.jpg"
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-24 rounded-lg overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    index % 2 === 0 ? "bg-blue/10" : "bg-gold/10"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-5 w-24 h-24 bg-gold/30 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-1/4 right-5 w-32 h-32 bg-blue/30 rounded-full blur-md animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gold/40 rounded-full blur-sm animate-bounce"></div>
    </section>
  );
};

export default EnhancedHero;
