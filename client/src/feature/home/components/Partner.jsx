import { Link } from "react-router-dom";
import university from "../../../assets/AAU logo.png";
import hospital from "../../../assets/TkurAnbesa logo.jpg";

const partners = [
  {
    src: university,
    alt: "Addis Ababa University Logo",
    name: "Addis Ababa University",
    description: "Academic partner providing research and training support",
    color: "blue",
  },
  {
    src: hospital,
    alt: "Tikur Anbesa Hospital Logo",
    name: "Tikur Anbesa Hospital",
    description: "Clinical partner for patient care and medical training",
    color: "gold",
  },
];

export default function Partner() {
  return (
    <div className="py-8 md:py-16 px-6 md:px-12 lg:px-24 bg-[#f7fafc] font-text">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#233875] mb-3">
            Our Trusted Partners
          </h2>
          <p className="text-[#4a5568] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Collaborating with leading institutions to deliver exceptional healthcare services
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl border-2 ${
                partner.color === "gold"
                  ? "border-[#ffde59] hover:border-[#ffde59]/70"
                  : "border-[#233875] hover:border-[#233875]/70"
              } bg-white shadow-sm hover:shadow-md h-full cursor-pointer transition-all duration-300`}
            >
              <div className="h-18 md:h-30 flex items-center mb-4">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain px-4"
                />
              </div>
              <h3
                className={`text-base md:text-lg font-semibold ${
                  partner.color === "gold" ? "text-[#ffde59]" : "text-[#233875]"
                } text-center mb-2`}
              >
                {partner.name}
              </h3>
              <p className="text-[#4a5568] text-xs md:text-sm text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner CTA Section */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-[#a0aec0]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#233875] mb-4 leading-relaxed">
              <span className="font-bold">Partner with Us</span> - Register your company as our donor or sponsor and make a lasting impact.
            </h2>

            <div className="inline-block mb-6">
              <Link to="/register">
                <button className="px-8 py-3 text-sm sm:text-base md:text-lg font-semibold bg-[#ffde59] hover:bg-[#ffde59]/90 text-[#233875] rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                  Become a Partner
                </button>
              </Link>
            </div>

            <p className="text-[#233875] text-sm sm:text-base md:text-base opacity-90">
              Your support helps us continue our mission of transforming healthcare in Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}