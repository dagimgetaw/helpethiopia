import { Steps, GraduationCap } from "@phosphor-icons/react";

const CoreServices = () => {
  return (
    <div className="pb-8 md:pb-16 px-6 md:px-12 lg:px-24 xl:px-32 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                <Steps className="text-darkblue" size={32} weight="bold" />
              </div>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-darkblue text-center mb-6">
              Quality Improvement Programs
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              HELP Ethiopia demonstrates a commitment to continuous improvement
              by implementing three impactful programs focused on streamlining
              healthcare processes, enriching data-driven decision-making, and
              optimizing patient experience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-900 mt-1 sm:mt-3 mr-1 sm:mr-2 shrink-0"></span>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                  Operating Room Efficiency Improvement
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-900 mt-1 sm:mt-3 mr-1 sm:mr-2 shrink-0"></span>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                  Improving Hospital Transfers
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-900 mt-1 sm:mt-3 mr-1 sm:mr-2 shrink-0"></span>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                  Data Registry Enhancement
                </span>
              </li>
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 flex-1">
              <div className="flex justify-center mb-6">
                <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                  <GraduationCap
                    className="text-darkblue"
                    size={32}
                    weight="bold"
                  />
                </div>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-darkblue text-center mb-6">
                Education and Leadership Programs
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                HELP Ethiopia recognizes that building a strong healthcare
                system requires not just immediate interventions, but also
                investment in the future.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                Our Education and Leadership program focuses on empowering the
                next generation of Ethiopians to become effective leaders and
                agents of positive change within the healthcare sector.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-900 mt-1 sm:mt-3 mr-1 sm:mr-2 shrink-0"></span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                    Research Mentorship Program
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-900 mt-1 sm:mt-3 mr-1 sm:mr-2 shrink-0"></span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 ml-2">
                    Youth Capacity Building for Leadership
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
