export default function Mission() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-gray-100 font-text">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO TEXT */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#233875]">HELP</span>{" "}
            <span className="text-[#FFDE59]">Ethiopia</span>
          </h1>

          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="inline-block px-4 py-2 bg-[#FFDE59] text-[#233875] text-xs sm:text-sm md:text-base font-semibold rounded-full shadow-md">
              Health • Education • Leadership • Partnership
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gold font-bold">Empowering</span> communities with{" "}
            <span className="text-blue font-semibold">hope</span>,{" "}
            <span className="text-gold font-semibold">care</span>, and{" "}
            <span className="text-blue font-bold">action</span>, building a brighter{" "}
            <span className="text-gold font-bold">Ethiopia</span>.
          </p>
        </div>

        {/* Description */}
        <div className="mb-16 max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose text-center">
            HELP Ethiopia is a multi-disciplinary organization registered in Ethiopia with a dedicated charity program (Ye'Eteye Charity) targeting economically disadvantaged groups. We advocate for quality education, leadership, and collaboration as tools for sustainable healthcare and societal development.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start mb-6">
              <div className="bg-[#233875]/10 p-2 md:p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:h-8 md:w-8 text-[#233875]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-2">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-[#FFDE59] rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4 text-xs sm:text-sm md:text-base">
              <p className="text-gray-600 leading-relaxed">
                To catalyze sustainable development in Ethiopia by empowering healthcare professionals, driving innovation, and fostering a comprehensive and inclusive healthcare ecosystem.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fueled by the belief that every individual deserves access to quality healthcare and education, regardless of their circumstances.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start mb-6">
              <div className="bg-[#233875]/10 p-2 md:p-3 rounded-xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:h-8 md:w-8 text-[#233875]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-2">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-[#FFDE59] rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              A Healthy and Resilient Ethiopia with advanced healthcare infrastructure, a well-trained workforce, streamlined processes, and inclusive healthcare services for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
