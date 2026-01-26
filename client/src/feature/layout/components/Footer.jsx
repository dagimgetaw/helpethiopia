import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import {
  MapPin,
  Envelope,
  Phone,
  PaperPlaneTilt,
  Copyright,
} from "phosphor-react";
import Loading from "../../../components/Loading.jsx";
import { social_media } from "../constant";
import logo from "../../../assets/logo2.webp";
import { subscribe_schema } from "../schema/SubscribeSchema.js";
import subscribe from "../api/subscribe_api.js";

const Footer = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: subscribe_schema,
    onSubmit: async (values, { resetForm }) => {
      setErrorMessage(null);
      try {
        const payload = {
          email: values.email,
        };
        const response = await subscribe(payload);

        if (response.data.subscribedBefore) {
          setMessage("You are already subscribed to our newsletter!");
        }

        if (response.data.newSubscriber) {
          setMessage("Thank you for subscribing to our newsletter!");
        }

        if (response.data.success) {
          setSubscribed(true);
          resetForm();
        } else {
          setErrorMessage(response.data.message || "Subscription failed");
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "Failed to subscribe. Please try again."
        );
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
    <footer className="pt-16 pb-8 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0f1a3d] to-darkblue text-white font-text">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info with Contact */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-lg">
                <img
                  src={logo}
                  alt="Help Ethiopia Logo"
                  loading="lazy"
                  className="w-12 sm:w-16 h-auto"
                />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gold">
                HELP Ethiopia
              </h2>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              We advocate for quality education, nurture leadership, and forge
              collaborations for sustainable healthcare and societal
              development.
            </p>

            <div className="pt-2 sm:pt-0 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 sm:w-4 sm:h-5 text-gold" />
                <span className="text-xs sm:text-sm">
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Envelope className="w-4 h-4 sm:w-4 sm:h-5 text-gold" />
                <span className="text-xs sm:text-sm">
                  helpforethiopia@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 sm:w-4 sm:h-5 text-gold" />
                <span className="text-xs sm:text-sm">+251-939-808-182</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg text-center sm:text-left sm:text-xl font-bold text-gold tracking-wide transition-all duration-300">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-100">
              Subscribe to our newsletter for the latest updates and news.
            </p>

            {subscribed ? (
              <div className="p-4 bg-[#FFDE59] text-[#1a2b5f] rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-100 text-red-700 rounded text-sm animate-in slide-in-from-top duration-300">
                    {errorMessage}
                  </div>
                )}

                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gold rounded-lg blur opacity-0 group-hover/input:opacity-20 transition duration-300"></div>
                  <div className="relative">
                    <Envelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-300 transition-colors duration-300 group-focus-within/input:text-gold" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className={`pl-10 w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-darkblue border border-blue text-white placeholder-gray-400 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-gold transition-all duration-300 hover:border-gold/50 ${
                        touched.email && errors.email
                          ? "border-red-400 ring-2 ring-error"
                          : ""
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                </div>

                {touched.email && errors.email && (
                  <p className="text-xs sm:text-sm text-red-300 animate-in slide-in-from-top duration-200">
                    {errors.email}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-xs sm:text-sm font-medium group/btn relative overflow-hidden transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gold/70 cursor-not-allowed"
                      : "bg-gold text-darkblue shadow-md cursor-pointer"
                  } flex items-center justify-center gap-2`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loading />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        Subscribe
                      </>
                    )}
                  </div>
                </button>
              </form>
            )}
          </div>

          {/* Social Media */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg text-center sm:text-left sm:text-xl font-bold text-gold">
              Connect With Us
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {social_media.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-darkblue hover:bg-gold hover:text-darkblue rounded-lg transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">
                    {social.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-0 border-0 sm:border-t border-blue">
              <h4 className="text-lg sm:text-base text-center sm:text-left font-bold text-gold mb-3">
                Legal
              </h4>
              <div className="flex gap-4 justify-evenly sm:justify-start">
                <p className="text-gray-300 hover:text-gold text-xs sm:text-sm transition-colors cursor-pointer">
                  Privacy Policy
                </p>
                <p className="text-gray-300 hover:text-gold text-xs sm:text-sm transition-colors cursor-pointer">
                  Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue mt-12 pt-8 text-center text-xs sm:text-sm text-gray-300 flex items-center justify-center">
          <Copyright className="mr-1 w-4 sm:w-5" /> {new Date().getFullYear()}{" "}
          HELP Ethiopia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
