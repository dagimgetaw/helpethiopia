import { Link } from "react-router-dom";
import { ShieldCheck, Eye, Activity, Users, ArrowRight } from "phosphor-react";

const Mission = () => {
  return (
    <div className="pb-8 md:pb-16 px-6 md:px-12 lg:px-24 xl:px-32 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                <ShieldCheck
                  className="text-darkblue"
                  size={24}
                  weight="bold"
                />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-darkblue">
                Our Mission
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              To catalyze sustainable development in Ethiopia by empowering
              healthcare professionals, driving innovation, and fostering a
              comprehensive and inclusive healthcare ecosystem.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              Our mission is fueled by the unwavering belief that every
              individual deserves access to quality healthcare and education,
              regardless of their circumstances.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                <Eye className="text-darkblue" size={24} weight="bold" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-darkblue">
                Our Vision
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              We envision a Healthy and Resilient Ethiopia with advanced
              healthcare infrastructure, a well-trained workforce, streamlined
              processes, and inclusive healthcare services for all.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                <Activity className="text-darkblue" size={24} weight="bold" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-darkblue">
                Our Activities
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              At HELP Ethiopia, our diverse activities range from supporting
              economically disadvantaged individuals to advocating for quality
              education, enhancing healthcare data registries, and fostering
              patient-friendly hospital environments.
            </p>
            <Link
              to="/what-we-do"
              className="inline-flex items-center text-darkblue font-semibold text-xs md:text-sm"
            >
              Learn more about What We Do
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-darkblue"
                weight="bold"
              />
            </Link>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl">
                <Users className="text-darkblue" size={24} weight="bold" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-darkblue">
                Our Team
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
              HELP Ethiopia is run by a team of professionals who are passionate
              and dedicated to making a positive impact in our community.
            </p>
            <Link
              to="/our-team"
              className="inline-flex items-center text-darkblue font-semibold text-xs md:text-sm"
            >
              Meet our team
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-darkblue"
                weight="bold"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
