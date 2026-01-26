import { ArrowRight } from "phosphor-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl  transition-all duration-300 overflow-hidden border border-bg font-text">
      <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-darkblue"></div>
      <div className="p-6 md:p-8">
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-blue/10 to-darkblue/10 transition-all duration-300">
            <div className="text-darkblue/10 w-6 h-6">{icon}</div>
          </div>
        </div>
        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-darkblue mb-4 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base max-w-5xl mx-auto text-gray-700 leading-6 md:leading-loose mb-4">
          {description}
        </p>
        <div className="pt-4 sm:pt-6 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
