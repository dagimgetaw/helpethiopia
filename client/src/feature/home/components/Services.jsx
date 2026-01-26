import ServiceCard from "../../../components/ServiceCard";
import { services } from "../constant/index";

const Services = () => {
  return (
    <div className="pt-4 pb-14 sm:pt-10 sm:pb-20 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-4">
            Our Core Services
          </h2>

          <div className="w-16 h-1 bg-blue mx-auto mb-6"></div>

          <p className="text-darkgray text-xs sm:text-sm md:text-base max-w-5xl mx-auto leading-6 md:leading-loose">
            We provide comprehensive healthcare solutions through strategic
            initiatives designed to transform the Ethiopian medical landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
