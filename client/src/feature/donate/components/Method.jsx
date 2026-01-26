import { useState } from "react";
import {
  CaretRight,
  CaretDoubleRight,
  Bank,
  CreditCard,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Method = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="py-8 md:py-16 px-4 md:px-12 lg:px-20 xl:px-36 bg-bg font-text">
      <div className="p-6 sm:p-8 bg-white shadow-lg rounded-xl max-w-xl mx-auto font-text">
        <h2 className="text-lg md:text-2xl font-bold text-center text-darkblue mb-6">
          Choose Payment Method
        </h2>

        <div className="space-y-4">
          <div>
            <Link to="/pay-with-chapa">
              <button
                className={`group w-full p-3 sm:p-4 border sm:border-2 rounded-lg text-xs md:text-base flex items-center justify-between transition-all duration-200 ${
                  selectedOption === "birr"
                    ? "border-lightblue bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer"
                }`}
              >
                <div className="flex items-center">
                  <Bank className="h-4 w-4 md:h-6 md:w-6 text-blue mr-3" />
                  <span className="text-md font-medium text-gray-700">
                    Donate with Birr
                  </span>
                </div>

                <div className="text-lightblue font-medium">
                  <CaretRight className="h-4 w-4 md:h-5 md:w-5 group-hover:hidden" />
                  <CaretDoubleRight className="h-4 w-4 md:h-5 md:w-5 hidden group-hover:block" />
                </div>
              </button>
            </Link>
          </div>

          <div>
            <Link to="/pay-with-stripe">
              <button
                onClick={() => setSelectedOption("mastercard")}
                className={`group w-full p-3 sm:p-4 border sm:border-2 rounded-lg text-xs md:text-base flex items-center justify-between transition-all duration-200 ${
                  selectedOption === "mastercard"
                    ? "border-lightblue bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer"
                }`}
              >
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 md:h-6 md:w-6 text-blue mr-3" />
                  <span className="text-md font-medium text-gray-700">
                    Donate with Mastercard
                  </span>
                </div>

                <div className="text-lightblue font-medium">
                  <CaretRight className="h-4 w-4 md:h-5 md:w-5 group-hover:hidden" />
                  <CaretDoubleRight className="h-4 w-4 md:h-5 md:w-5 hidden group-hover:block" />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[10px] md:text-sm text-darkgray">
          Secure payment processing. We never store your payment details.
        </div>
      </div>
    </div>
  );
};

export default Method;
