import logo from "../../../assets/logo.webp";
import { YoutubeLogo } from "@phosphor-icons/react";

const Youtube = () => {
  return (
    <div className="pb-8 md:pb-16 px-4 sm:px-6 lg:px-8 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-10 rounded-3xl bg-white shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src={logo}
              alt="Help Ethiopia Logo"
              className="w-16 h-auto md:w-28 transition-transform duration-300 "
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-darkblue">
              Join Our YouTube Community
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mt-4 sm:mt-2">
              Stay updated with our latest content, tutorials, and inspiring
              stories. Subscribe now to support our mission!
            </p>
          </div>
          <div className="relative group ">
            <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-800 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative py-3 md:py-4 px-6 md:px-8 flex items-center gap-3 rounded-xl bg-red-600 text-white text-xs md:text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg">
              <YoutubeLogo className="w-5 h-5 md:w-6 md:h-6" />
              <span>Subscribe Now</span>
              <span className="absolute -right-2 -top-2 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shadow-md">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
