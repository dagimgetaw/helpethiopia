import { donation_type } from "../constant";

const ImpactSection = () => {
  return (
    <section className="bg-bg font-text px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue">
          Make a Life Changing Donation
        </h2>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-darkgray max-w-5xl mx-auto leading-relaxed">
          HELP Ethiopia is run by volunteers and contributions from our generous
          donors. Your money will be used to cover the costs of
          laboratory/imaging investigation, medical treatment and supplies for
          surgery for patients in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6">
          {donation_type.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex justify-center pb-3">
                <item.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-darkblue"
                  weight="bold"
                />
              </div>

              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-darkblue">
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
