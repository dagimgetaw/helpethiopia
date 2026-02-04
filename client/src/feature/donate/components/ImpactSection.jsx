import { donation_type } from "../constant";
import { ShieldCheck, CheckCircle } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="bg-white font-text px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-4 pt-4">
            Make a Significant Contribution
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose text-center">
            HELP Ethiopia operates through the dedicated efforts of volunteers
            and the generous contributions of our supporters. Your financial
            support directly facilitates laboratory investigations, medical
            imaging, surgical procedures, and comprehensive treatment for
            patients in need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {donation_type.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-50 rounded-xl flex items-center justify-center">
                  <item.icon
                    className="w-6 h-6 md:w-10 md:h-10 text-blue-700"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-darkblue text-center mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] sm:text-xs font-medium text-gray-500">
                    Impact Level
                  </span>
                  <span className="text-[10px] sm:text-sm font-semibold text-blue-700">
                    High
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1 sm:h-2">
                  <div
                    className="bg-blue-600 h-1 sm:h-2 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ width: `${75 + index * 5}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
