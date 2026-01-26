import { ShieldCheck, GlobeHemisphereWest } from "phosphor-react";

const Mission = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-darkblue">HELP Ethiopia</span>
          </h1>

          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-gold text-darkblue text-[10px] sm:text-sm md:text-sm font-semibold rounded-full shadow-md">
              Health • Education • Leadership • Partnership
            </span>
          </div>
        </div>

        <div className="mb-8 sm:mb-16 max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose text-center">
            HELP Ethiopia is a multi-disciplinary organization registered in
            Ethiopia with a dedicated charity program (Ye'Eteye Charity)
            targeting economically disadvantaged groups. We advocate for quality
            education, leadership, and collaboration as tools for sustainable
            healthcare and societal development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-bg">
            <div className="flex items-start mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl mr-4">
                <ShieldCheck
                  size={24}
                  className="text-darkblue"
                  weight="bold"
                />
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-darkblue mb-1 md:mb-2">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4 text-xs sm:text-sm md:text-base">
              <p className="text-gray-700 leading-6 md:leading-loose">
                To catalyze sustainable development in Ethiopia by empowering
                healthcare professionals, driving innovation, and fostering a
                comprehensive and inclusive healthcare ecosystem.
              </p>
              <p className="text-gray-700 leading-6 md:leading-loose">
                Fueled by the belief that every individual deserves access to
                quality healthcare and education, regardless of their
                circumstances.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-bg">
            <div className="flex items-start mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl mr-4">
                <GlobeHemisphereWest
                  size={24}
                  className="text-darkblue"
                  weight="bold"
                />
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-2xl font-bold text-darkblue mb-1 md:mb-2">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-6 md:leading-loose">
              A Healthy and Resilient Ethiopia with advanced healthcare
              infrastructure, a well-trained workforce, streamlined processes,
              and inclusive healthcare services for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
