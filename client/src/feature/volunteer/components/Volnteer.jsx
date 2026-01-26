import {
  Mail,
  User,
  VenusAndMars,
  Calendar1,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Phone,
  MapPin,
  Info,
  ArrowRight,
  Users,
  Target,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { useFormik } from "formik";
import { registerSchema } from "../schema/VolnteerSchema";
import { useState, useRef, useEffect } from "react";
import { region } from "../constant";
import logo from "../../../assets/logo.webp";
import { Link } from "react-router-dom";
import SuccessRegistration from "./Success";
import Loading from "../../../components/Loading";
import init_volnteer_regisration from "../api/volnteer_api";

const Volunteer = () => {
  const [countryCode, setCountryCode] = useState("+2519");
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const regionDropdownRef = useRef(null);

  const openGoogleForm = () => {
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdrs5g5p9E9yG_6PbK9dr-nF1NaoFrMI96VY6U4HHOcwE2obQ/viewform";
    window.open(url, "_blank");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      birthYear: "",
      phoneNumber: "",
      region: "",
      employmentStatus: "",
      fieldOfWork: "",
      organization: "",
      interests: [],
      agreement: "",
      registrationType: "regular",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        setMessage("");

        const payload = {
          ...values,
          phoneNumber: countryCode + values.phoneNumber,
          fieldOfWork: values.fieldOfWork || "Unknown",
          organization: values.organization || "Unknown",
        };

        const response = await init_volnteer_regisration(payload);

        if (response.data.success) {
          setFormSubmitted(response.data.message);
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error);

        if (error.response) {
          if (error.response.data?.alreadyRegistered) {
            setMessage("This email is already registered");
          } else {
            setMessage(error.response.data?.message || "Submission failed");
          }
        } else if (error.request) {
          setMessage("Network error. Please try again.");
        } else {
          setMessage("An unexpected error occurred.");
        }
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
    setFieldValue,
    isSubmitting,
  } = formik;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        regionDropdownRef.current &&
        !regionDropdownRef.current.contains(event.target)
      ) {
        setShowRegionDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = region.filter((region) =>
    region.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleInterestChange = (interest) => {
    const currentInterests = [...values.interests];
    if (currentInterests.includes(interest)) {
      const index = currentInterests.indexOf(interest);
      currentInterests.splice(index, 1);
    } else {
      currentInterests.push(interest);
    }
    setFieldValue("interests", currentInterests);
  };

  const handleClearForm = () => {
    formik.resetForm();
    setFormSubmitted(false);
  };

  if (formSubmitted) {
    return <SuccessRegistration handleClearForm={handleClearForm} />;
  }

  return (
    <div className="min-h-screen bg-bg font-text">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 pt-2">
          <div className="inline-block p-2 sm:p-3 mb-3 sm:mb-4">
            <img
              src={logo}
              alt="HELP Ethiopia"
              className="h-10 sm:h-10 md:h-16"
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Volunteer Registration
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-5 sm:leading-6 md:leading-loose text-center max-w-3xl mx-auto px-2">
            Join HELP Ethiopia in our mission to create a prosperous nation with
            knowledgeable, skilled, and disciplined citizens.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 text-center">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              300+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Active Volunteers
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 text-center">
            <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              15+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Projects Completed
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              3+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Regions Covered
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 text-center">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Transparent</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
              Personal Information
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm">
              Please provide your basic information to get started
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* First Name */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  First Name
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.firstName && touched.firstName
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <User className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Abebe"
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.firstName && touched.firstName && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.firstName}
                  </p>
                )}
              </div>
              {/* Last Name */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Last Name
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.lastName && touched.lastName
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <User className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Kebede"
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.lastName && touched.lastName && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.lastName}
                  </p>
                )}
              </div>
              {/* Gender */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="gender"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Gender
                </label>
                <div className="relative">
                  <div
                    className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                      errors.gender && touched.gender
                        ? "border-error ring-0 sm:ring-1 ring-error"
                        : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                    }`}
                  >
                    <VenusAndMars className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <select
                      id="gender"
                      name="gender"
                      className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm appearance-none pr-8"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    >
                      <option value="">Select gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                    <ChevronDown className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 absolute right-3" />
                  </div>
                </div>
                {errors.gender && touched.gender && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.gender}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.email && touched.email
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <Mail className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="abebe@domain.com"
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && touched.email && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Birth Year */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="birthYear"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Birth Year
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.birthYear && touched.birthYear
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <Calendar1 className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    name="birthYear"
                    id="birthYear"
                    type="number"
                    placeholder="1990"
                    min="1900"
                    max={new Date().getFullYear()}
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    value={values.birthYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.birthYear && touched.birthYear && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.birthYear}
                  </p>
                )}
              </div>
              {/* Phone Number */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative group">
                    <select
                      className="w-20 sm:w-24 border text-xs sm:text-sm border-gray-300 rounded-lg px-3 py-2 sm:py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white pr-8 cursor-pointer hover:border-gray-400 group-hover:border-gray-400"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+2519" className="text-gray-900">
                        +2519
                      </option>
                      <option value="+2517" className="text-gray-900">
                        +2517
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-hover:rotate-180" />
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 flex-1 ${
                      errors.phoneNumber && touched.phoneNumber
                        ? "border-error ring-0 sm:ring-1 ring-error"
                        : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                    }`}
                  >
                    <Phone className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      name="phoneNumber"
                      id="phoneNumber"
                      type="tel"
                      placeholder="12345678"
                      maxLength="8"
                      className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs md:text-sm [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      value={values.phoneNumber}
                      onChange={(e) => {
                        const input = e.target.value.replace(/\D/g, "");
                        setFieldValue("phoneNumber", input);
                      }}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              {/* Region */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="region"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Region
                </label>
                <div className="relative" ref={regionDropdownRef}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 border ${
                      errors.region && touched.region
                        ? "border-error ring-0 sm:ring-1 ring-error"
                        : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                    } rounded-lg text-left hover:border-gray-400 transition-colors text-xs sm:text-sm`}
                    onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  >
                    <span
                      className={
                        values.region ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {values.region || "Select your region"}
                    </span>
                    <ChevronDown className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {showRegionDropdown && (
                    <div className="absolute z-10 mt-1 text-xs sm:text-sm font-medium w-full bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-auto">
                      <div className="p-2 sm:p-3 sticky top-0 bg-white border-b border-gray-200">
                        <input
                          type="text"
                          id="region"
                          name="region"
                          placeholder="Search region..."
                          className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="py-1">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((region) => (
                            <button
                              key={region.name}
                              type="button"
                              className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 flex items-center justify-between text-xs sm:text-sm ${
                                values.region === region.name
                                  ? "bg-blue-50"
                                  : ""
                              }`}
                              onClick={() => {
                                setFieldValue("region", region.name);
                                setShowRegionDropdown(false);
                                setSearchTerm("");
                              }}
                            >
                              <span className="truncate">{region.name}</span>
                              {values.region === region.name && (
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                              )}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500 text-center">
                            No regions found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {errors.region && touched.region && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.region}
                  </p>
                )}
              </div>

              {/* Employment Status */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="employmentStatus"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Employment Status
                </label>
                <div className="relative">
                  <div
                    className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                      errors.employmentStatus && touched.employmentStatus
                        ? "border-error ring-0 sm:ring-1 ring-error"
                        : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                    }`}
                  >
                    <BriefcaseBusiness className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm appearance-none pr-8"
                      value={values.employmentStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    >
                      <option value="">Select status</option>
                      <option value="Student">Student</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Employed">Employed</option>
                      <option value="Self-employed">Self-employed</option>
                      <option value="Retired">Retired</option>
                    </select>
                    <ChevronDown className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                {errors.employmentStatus && touched.employmentStatus && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.employmentStatus}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Work Information Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <BriefcaseBusiness className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
              Work Information
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm">
              Tell us about your professional background
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="fieldOfWork"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Field of Work
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.fieldOfWork && touched.fieldOfWork
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <BriefcaseBusiness className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    id="fieldOfWork"
                    name="fieldOfWork"
                    type="text"
                    placeholder="e.g., Education, Healthcare, IT"
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                    value={values.fieldOfWork}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.fieldOfWork && touched.fieldOfWork && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.fieldOfWork}
                  </p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="organization"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Organization
                </label>
                <div
                  className={`flex items-center gap-2 sm:gap-3 shadow-sm rounded-lg border text-xs sm:text-sm bg-white p-2 sm:p-3 transition-all duration-200 ${
                    errors.organization && touched.organization
                      ? "border-error ring-0 sm:ring-1 ring-error"
                      : "border-gray-300 hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
                  }`}
                >
                  <Building2 className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Company or institution name"
                    className="w-full outline-none text-darkgray placeholder-gray-400 bg-transparent text-xs sm:text-sm"
                    value={values.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.organization && touched.organization && (
                  <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                    {errors.organization}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
              Areas of Interest
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm">
              Select the areas where you'd like to contribute (multiple
              selections allowed)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "Charity",
                "Fund Raising Events",
                "Public Relations",
                "IT",
                "Health Quality Improvement",
                "Education",
                "Research",
                "Finance",
                "Consultation",
              ].map((interest) => (
                <div
                  key={interest}
                  className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    values.interests.includes(interest)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleInterestChange(interest)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center mr-2 sm:mr-3 ${
                        values.interests.includes(interest)
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {values.interests.includes(interest) && (
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      )}
                    </div>
                    <span className="font-medium text-gray-900 text-xs sm:text-sm">
                      {interest}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {errors.interest && touched.interest && (
              <p className="text-error text-xs sm:text-sm mt-1 pl-2">
                {errors.interest}
              </p>
            )}
          </div>

          {/* Review & Submit Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
              Review & Submit
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm">
              Please review your information and agree to the terms
            </p>

            {/* Rights & Responsibilities */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                Rights & Responsibilities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      Member Rights
                    </h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Equal rights for all regular members",
                      "Right to vote and be voted for",
                      "Access to organizational information",
                      "Opportunity to contribute to objectives",
                      "Notification upon membership termination",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-darkblue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      Member Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Timely payment of membership fees",
                      "Adherence to organizational bylaws",
                      "Respect for HELP Ethiopia's vision",
                      "Regular attendance at meetings",
                      "Active participation in activities",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-darkblue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    Agreement
                  </h4>
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
                  I have read and agree to the rights and responsibilities
                  outlined above.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="agreement"
                      name="agreement"
                      value="yes"
                      checked={values.agreement === "yes"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-900 font-medium text-xs sm:text-sm">
                      Yes, I agree to the terms
                    </span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="agreement"
                      value="no"
                      checked={values.agreement === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-900 font-medium text-xs sm:text-sm">
                      No, I don't agree
                    </span>
                  </label>
                </div>

                {errors.agreement && touched.agreement && (
                  <p className="text-error text-xs sm:text-sm mt-2 pl-2">
                    {errors.agreement}
                  </p>
                )}
              </div>

              {/* Registration Type */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Registration Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <label
                    className={`p-4 sm:p-6 border-2 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                      values.registrationType === "regular"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        name="registrationType"
                        value="regular"
                        checked={values.registrationType === "regular"}
                        onChange={handleChange}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1"
                      />
                      <div className="ml-2 sm:ml-3">
                        <span className="block text-gray-900 text-xs sm:text-sm font-semibold">
                          Regular Member
                        </span>
                        <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700 leading-5 sm:leading-6">
                          Full membership with voting rights, fee obligations,
                          and active participation in decision-making.
                        </span>
                      </div>
                    </div>
                  </label>
                  <label
                    className={`p-4 sm:p-6 border-2 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                      values.registrationType === "associate"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        name="registrationType"
                        value="associate"
                        checked={values.registrationType === "associate"}
                        onChange={handleChange}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1"
                      />
                      <div className="ml-2 sm:ml-3">
                        <span className="block text-gray-900 text-xs sm:text-sm font-semibold">
                          Associate Member
                        </span>
                        <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700 leading-5 sm:leading-6">
                          Limited participation without voting rights. Optional
                          fee contribution with activity-based involvement.
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Alternative Registration */}
            <div className="mb-6 sm:mb-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full mb-3 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3">
                Prefer to use Google Forms for registration?
              </p>
              <button
                type="button"
                onClick={openGoogleForm}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold cursor-pointer group text-xs sm:text-sm"
              >
                Register using Google Form
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Error Message */}
            {message && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 flex items-center text-xs sm:text-sm">
                  {message}
                </p>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={() => formik.resetForm()}
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 cursor-pointer font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors w-full sm:w-auto text-xs sm:text-sm"
              >
                Clear Form
              </button>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/"
                  className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 cursor-pointer font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-center text-xs sm:text-sm"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-2 sm:py-3 font-medium rounded-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loading />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-500 leading-5">
                By submitting this form, you agree to our Privacy Policy. Your
                information is secure and will only be used for organizational
                purposes.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
