import { useState } from "react";
import { useFormik } from "formik";
import { chapa_schema } from "../schemas/ChapaScehma";
import {
  Bank,
  User,
  Envelope,
  Phone,
  HandCoins,
  SealQuestion,
  CaretDown,
  Lock,
} from "@phosphor-icons/react";
import Loading from "../../../components/Loading";
import init_chapa_payment from "../api/chapa_api";

const Chapa = () => {
  const [countryCode, setCountryCode] = useState("+2519");

  const generateTxRef = (amount) => {
    return `CHAPA-${amount}-${Math.floor(Math.random() * 100000) + 1}`;
  };

  const formatPhoneNumber = (code, number) => {
    if (code === "+2519") return `09${number}`;
    if (code === "+2517") return `07${number}`;
    return number;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      amount: "",
    },
    validationSchema: chapa_schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: formatPhoneNumber(countryCode, values.phoneNumber),
          amount: Number(values.amount),
          tx_ref: generateTxRef(values.amount),
        };

        const res = await init_chapa_payment(payload);

        const checkoutUrl = res.data.data.checkout_url;

        // 🚀 redirect user to Chapa
        window.location.href = checkoutUrl;
      } catch (err) {
        console.error(err);
        alert("Payment initialization failed");
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
  } = formik;

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
            {/* First & Last Name */}
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

            {/* Email */}
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

            {/* Phone & Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="flex flex-col">
                <div
                  className={`flex items-center gap-2 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <Phone className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                  <div className="relative w-20 md:w-32">
                    <select
                      className="appearance-none bg-transparent pr-5 text-darkgray w-full"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+2519">+2519</option>
                      <option value="+2517">+2517</option>
                    </select>
                    <CaretDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="12345678"
                    className="w-full outline-none text-darkgray text-xs md:text-sm placeholder-gray-400 bg-transparent [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={8}
                  />
                </div>
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-error text-[10px] md:text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Amount */}
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
                  <span className="text-darkgray">Birr</span>
                </div>
                {errors.amount && touched.amount && (
                  <p className="text-error text-[10px] md:text-xs mt-1">
                    {errors.amount}
                  </p>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-3">
              <SealQuestion className="text-blue-600 w-4 h-4" />
              <p className="text-[10px] md:text-sm text-blue-800">
                We accept local bank transactions and mobile money payments.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-md text-xs sm:text-sm text-white bg-blue cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center gap-2">
                  <Loading />
                  Processing Payment...
                </span>
              ) : (
                `Pay ${values.amount ? `${values.amount} Birr` : ""}`
              )}
            </button>

            <div className="flex justify-center items-center gap-2 text-gray-500 text-[10px] sm:text-xs">
              <Lock className="text-blue-600 w-3 h-3 sm:w-4 sm:h-4" />
              Payments are secure and encrypted
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chapa;
