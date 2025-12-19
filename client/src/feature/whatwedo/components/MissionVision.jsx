// src/feature/whatwedo/components/MissionVision.jsx

const MissionVision = () => {
  const missionVision = {
    mission: "To catalyze sustainable development in Ethiopia by empowering healthcare professionals, driving innovation, and fostering a comprehensive and inclusive healthcare ecosystem.",
    vision: "A Healthy and Resilient Ethiopia with advanced healthcare infrastructure, a well-trained workforce, streamlined processes, and inclusive healthcare services for all."
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100/50 to-amber-100/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{missionVision.mission}</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Fueled by belief in accessible healthcare for all</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl text-white">👁️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{missionVision.vision}</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center text-amber-600 font-medium">
                  <span>Working towards healthcare equity</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>

        {/* Program Areas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Program</span> <span className="text-amber-600">Areas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Charity Patient Support",
              "Healthcare Quality Improvement",
              "Medical Education & Training",
              "Community Health Outreach",
              "Healthcare Leadership Development",
              "Hospital Process Optimization",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      index % 2 === 0 ? "bg-blue-100" : "bg-amber-100"
                    }`}
                  >
                    <span className={`text-lg ${index % 2 === 0 ? "text-blue-600" : "text-amber-600"}`}>
                      {index % 2 === 0 ? "✓" : "★"}
                    </span>
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Work in <span className="text-blue-600">Action</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/whatwedo/hero/kids-happy-africa-charity-redrhino.jpg",
              "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
              "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
              "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
              "/images/whatwedo/yeeteye/photo_2025-12-19_14-01-59.jpg",
              "/images/whatwedo/education/photo_2025-12-19_14-05-47.jpg",
              "/images/whatwedo/quality/photo_2025-12-19_14-04-03.jpg",
              "/images/whatwedo/yeeteye/photo_2025-12-19_14-02-12.jpg"
            ].map((img, index) => (
              <div key={index} className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src={img}
                  alt={`Program ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load mission vision image: ${img}`);
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-r from-blue-200 to-yellow-200 flex items-center justify-center rounded-xl">
                        <span class="text-gray-600">Image ${index + 1}</span>
                      </div>
                    `;
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    index % 2 === 0 ? "from-blue-900/40" : "from-amber-900/40"
                  } to-transparent`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;