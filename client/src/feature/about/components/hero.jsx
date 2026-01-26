import { mission, information } from "../constant";

const Hero = () => {
  return (
    <div className="w-full bg-bg font-text py-6 md:py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkblue mb-6">
            About HELP Ethiopia
          </h1>
          <div className="h-1 w-20 bg-darkblue"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 sm:mb-16">
          <div className="md:col-span-2">
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              HELP Ethiopia is a multidisciplinary non-profit organization
              registered in Ethiopia with registry number 5623. Committed to
              improving healthcare, we collaborate with local and international
              stakeholders to address neglected areas of health service delivery
              and training.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-0 sm:mb-6">
              We run a dedicated charity program targeting economically
              disadvantaged groups Ye&apos;Eteye Health Charity. Furthermore, we
              advocate for quality education, leadership, and collaboration as
              tools for sustainable healthcare and societal development.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="px-2 sm:px-8">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-darkblue uppercase tracking-wide mb-4 sm:mb-6">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {mission.map((item, index) => (
                  <li className="flex items-start" key={index}>
                    <span className="inline-block w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-900 mt-1 sm:mt-2 mr-1 sm:mr-2 shrink-0"></span>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {information.map((item, index) => (
              <div key={index}>
                <p className="text-darkblue text-xs sm:text-sm md:text-base uppercase tracking-wide font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
