import { partners } from "../constant";

const Partner = () => {
  return (
    <div className="py-8 md:py-16 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-4 pt-4">
            Our Trusted Partners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose text-center">
            Collaborating with leading institutions to deliver exceptional
            healthcare services
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md h-full cursor-pointer transition-all duration-300"
            >
              <div className="h-18 md:h-30 flex items-center mb-4">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain px-4"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-darkblue text-center mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
