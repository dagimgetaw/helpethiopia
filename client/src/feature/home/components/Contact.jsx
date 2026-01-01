import { useState } from "react";
import {
  MapPin,
  Phone,
  Envelope,
  User,
  PencilSimple,
  PaperPlaneTilt,
  CaretRight,
} from "phosphor-react";
import { useFormik } from "formik";
import { contact_schema } from "../schema/ContactSchema";
import { map_url } from "../constant/index";
import init_message from "../api/contact_api";
import Loading from "../../../components/Loading";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const openGoogleMaps = () => {
    const url = map_url;
    window.open(url, "_blank");
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: contact_schema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setErrorMessage(null);
        setSuccessMessage(null);

        const payload = {
          fullName: values.fullName,
          email: values.email,
          message: values.message,
        };

        const response = await init_message(payload);

        if (response.data.success) {
          setSuccessMessage(response.data.message);
          resetForm();
        } else {
          throw new Error(response.data.message || "Failed to send message");
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "Failed to send message. Please try again later."
        );
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
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-14 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-darkblue mb-4">
            Get In Touch
          </h1>
          <p className="text-darkgray text-xs sm:text-sm md:text-base max-w-5xl mx-auto leading-6 md:leading-loose">
            Have questions or want to get involved? Reach out to us and we'll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg h-full border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 pb-2 sm:pb-4 mb-4 border-b border-gray-200">
                Contact Information
              </h2>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl mr-4">
                    <MapPin className="text-darkblue w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-darkblue">
                      Our Location
                    </h3>
                    <p className="text-darkgray mt-2 leading-relaxed text-xs sm:text-sm md:text-base">
                      Tikur Ambessa Teaching Hospital, Zambia Street, Addis
                      Ababa, Ethiopia
                    </p>
                    <button
                      onClick={openGoogleMaps}
                      className="text-darkblue font-semibold mt-3 transition-colors flex items-center text-xs sm:text-sm md:text-sm cursor-pointer"
                    >
                      View on Google Maps
                      <CaretRight
                        className="ml-1 w-3 h-3 md:w-4 md:h-4"
                        weight="bold"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl mr-4">
                    <Phone className="text-darkbluew-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-darkblue">
                      Phone Number
                    </h3>
                    <p className="text-darkgray mt-2 text-xs sm:text-sm md:text-base">
                      +251-939-808-182
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-darkblue/10 p-2 md:p-3 rounded-xl mr-4">
                    <Envelope className="text-darkblue w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-darkblue">
                      Email Address
                    </h3>
                    <p className="text-darkgray mt-2 text-xs sm:text-sm md:text-base">
                      helpforethiopia@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 pb-2 sm:pb-4 mb-4 border-b border-gray-200">
                Send Us a Message
              </h2>

              {successMessage && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-100 text-sm">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 text-error rounded-lg border border-red-100 text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <div
                      className={`flex items-center gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                        errors.fullName && touched.fullName
                          ? "border-error ring-0 sm:ring-1 ring-error"
                          : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                      }`}
                    >
                      <User className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Abebe Kebede"
                        className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="text-error text-[10px] md:text-xs mt-1 pl-2">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div
                      className={`flex items-center gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                        errors.email && touched.email
                          ? "border-error ring-0 sm:ring-1 ring-error"
                          : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                      }`}
                    >
                      <Envelope className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      <input
                        name="email"
                        type="email"
                        placeholder="abebe@example.com"
                        className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-error text-[10px] md:text-xs mt-1 pl-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <div
                      className={`flex items-start gap-3 shadow-sm rounded-lg border text-xs md:text-sm bg-white p-3 transition-all duration-200 ${
                        errors.message && touched.message
                          ? "border-error ring-0 sm:ring-1 ring-error"
                          : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                      }`}
                    >
                      <PencilSimple className="text-gray-400 w-4 h-4 md:w-5 md:h-5 mt-1" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pr-3 outline-none text-darkgray placeholder-gray-400 bg-transparent resize-none min-h-30 sm:min-h-25 md:min-h-20"
                        placeholder="Type your message here..."
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.message && touched.message && (
                      <p className="text-error text-[10px] md:text-xs mt-1 pl-2">
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-2 text-[10px] md:text-xs text-gray-500 text-right">
                      {values.message.length}/200 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 md:py-4 px-6 rounded-lg text-white bg-blue font-medium text-xs sm:text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex justify-center items-center gap-2">
                        <Loading />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <PaperPlaneTilt className="mr-3 w-4 h-4 md:w-5 md:h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
