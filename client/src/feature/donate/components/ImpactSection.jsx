import { donation_type } from "../../../constant";

const ImpactSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-bg font-text">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
          Make a Life Changing Donation
        </h2>

        <p className="text-darkgray  mb-10 sm:mb-14 leading-relaxed text-sm sm:text-base">
          HELP Ethiopia is run by volunteers and contributions from our generous
          donors. Your money will be used to cover the costs of
          laboratory/imaging investigation, medical treatment and supplies for
          surgery for patients in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {donation_type.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex justify-center pb-3">
                <item.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gold"
                  weight="bold"
                />
              </div>

              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-black">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-darkgray leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
