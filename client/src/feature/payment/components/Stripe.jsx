import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { stripe_schema } from "../schemas/StripeSchema";
import {
  Bank,
  User,
  Envelope,
  HandCoins,
  SealQuestion,
  Lock,
  MapPin,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Loading from "../../../components/Loading";
import all_country from "../constant";
import init_stripe_payment from "../api/stripe_api";

const Stripe = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const countryDropdownRef = useRef(null);

  const generateID = (amount) => {
    return `STRIPE-${amount}-${Math.floor(Math.random() * 100000) + 1}`;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
      country: "Ethiopia",
    },
    validationSchema: stripe_schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values);
        const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          amount: Number(values.amount),
          country: values.country,
          id_ref: generateID(values.amount),
        };

        const res = await init_stripe_payment(payload);

        const checkoutUrl = res.data.checkout_url;

        window.location.href = checkoutUrl;
      } catch (err) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filtered_countries = all_country.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-12 sm:pt-30 pb-20 flex items-center justify-center font-text bg-bg">
      <div className="mx-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <form onSubmit={handleSubmit} className="p-4 sm:p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-3 md:p-6 rounded-full shadow-inner">
              <Bank className="h-6 w-6 md:h-10 md:w-10 text-blue-600" />
            </div>
          </div>

          <h2 className="text-center text-lg md:text-3xl font-bold text-darkblue mb-2">
            Complete Your Donation
          </h2>
          <p className="text-center text-xs md:text-sm text-darkgray mb-8">
            Support our cause with a secure payment
          </p>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field, i) => (
                <div key={field} className="flex flex-col">
                  <div
                    className={`flex items-center gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                      errors[field] && touched[field]
                        ? "border-error ring-0 sm:ring-1 ring-error"
                        : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                    }`}
                  >
                    <User className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    <input
                      type="text"
                      name={field}
                      placeholder={i === 0 ? "First Name" : "Last Name"}
                      className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent"
                      value={values[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors[field] && touched[field] && (
                    <p className="text-error text-[10px] md:text-xs mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div
                className={`flex items-center gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                  errors.email && touched.email
                    ? "border-error ring-0 sm:ring-1 ring-error"
                    : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                }`}
              >
                <Envelope className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-error text-[10px] md:text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col relative">
                <div
                  ref={countryDropdownRef}
                  className={`relative flex items-center gap-2 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                    errors.country && touched.country
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <MapPin className="text-gray-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-center cursor-pointer">
                    <span
                      className={`text-xs md:text-sm ${
                        values.country ? "text-darkgray" : "text-gray-400"
                      }`}
                    >
                      {values.country || "Select country"}
                    </span>

                    <CaretDown
                      className={`text-gray-500 transition-transform w-4 h-4 md:w-5 md:h-5 ${
                        showCountryDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {showCountryDropdown && (
                  <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <div className="p-2 border-b border-gray-200 sticky top-0 bg-white">
                      <div className="relative">
                        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search country..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none text-xs md:text-sm focus:ring-2 focus:ring-blue-500"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                      {filtered_countries.length > 0 ? (
                        filtered_countries.map((country) => (
                          <div
                            key={country.code}
                            className={`px-4 py-2 cursor-pointer hover:bg-blue-50 text-xs md:text-sm ${
                              values.country === country.name
                                ? "bg-blue-100"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setFieldValue("country", country.name);
                              formik.setFieldTouched("country", true);
                              setShowCountryDropdown(false);
                              setSearchTerm("");
                            }}
                          >
                            {country.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-xs sm:text-sm text-gray-500 text-center">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {errors.country && touched.country && (
                  <p className="text-error text-[10px] md:text-xs mt-1">
                    {errors.country}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <div
                  className={`flex items-center gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                    errors.amount && touched.amount
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <HandCoins className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    className="w-full outline-none text-darkgray text-xs md:text-sm placeholder-gray-400 bg-transparent [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-darkgray">USD</span>
                </div>
                {errors.amount && touched.amount && (
                  <p className="text-error text-[10px] md:text-xs mt-1">
                    {errors.amount}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-3">
              <SealQuestion className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
              <p className="text-[10px] md:text-sm text-blue-800">
                You will be redirected to Stripe's secure checkout page to enter
                your payment details.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-md text-white bg-blue cursor-pointer text-xs md:text-sm"
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center gap-1">
                  <Loading />
                  Processing Payment...
                </span>
              ) : (
                `Pay ${values.amount ? `$${values.amount}` : ""}`
              )}
            </button>

            <div className="flex justify-center items-center gap-2 text-gray-500 text-xs">
              <Lock className="text-blue-600 w-4 h-4" />
              Payments are secure and encrypted
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stripe;
