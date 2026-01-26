import { CheckCircle, ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

const SuccessRegistration = ({ handleClearForm }) => {
  return (
    <div className="h-160 sm:min-h-screen flex items-center justify-center bg-bg px-4 font-text">
      <div className="bg-white max-w-md w-full p-6 sm:p-8 rounded-2xl shadow-lg text-center border border-gray-100">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
        </div>
        <h1 className="text-lg sm:text-2xl font-bold text-darkblue mb-2">
          Registration Successful
        </h1>
        <div className="w-16 h-1 bg-blue mx-auto mb-4"></div>
        <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-6 px-2 sm:px-0">
          Thank you for registering as a volunteer with <b>HELP Ethiopia</b>.
          Your information has been successfully submitted. We’ll contact you
          soon with next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleClearForm}
            className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 cursor-pointer transition-colors text-xs sm:text-sm"
          >
            Register Another Volunteer
          </button>
          <Link
            to="/"
            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </Link>
        </div>
        <p className="mt-6 text-[10px] sm:text-xs text-gray-500">
          Together, we build a better future 🇪🇹
        </p>
      </div>
    </div>
  );
};

export default SuccessRegistration;
