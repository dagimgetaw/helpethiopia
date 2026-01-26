import eteye from "../../../assets/eteye.webp";

const HowWeStarted = () => {
  return (
    <div className="bg-bg py-12 sm:py-16 px-4 md:px-12 lg:px-24 font-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 sm:space-y-12">
            <div className="space-y-1 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-4 sm:mb-6">
                How We
                <span className="text-gold inline sm:block"> Started</span>
              </h2>
              <p className="text-darkgray text-xs sm:text-sm md:text-base max-w-xs leading-6 md:leading-loose">
                A journey of commitment, from local roots to global impact.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-8">
              <p className="text-xs sm:text-sm md:text-base text-darkblue font-semibold leading-6 md:leading-loose mb-4 border-l-4 border-blue pl-4 sm:pl-6 italic">
                HELP Ethiopia was established by a group of medical doctors and
                other professionals based in Ethiopia, together with members of
                the Ethiopian diaspora, united by a shared commitment to serve
                their communities.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                The organization originated from a deep desire to address
                persistent challenges in healthcare delivery. Its charity arm,{" "}
                Eteye Health Charity , was founded through a fund granted in
                memory of Woizero Yewoinshet Seifu by her family members, who
                affectionately called her Eteye . As “Eteye” is a term widely
                used in Ethiopia to express affection, it was adopted as the
                official name of HELP Ethiopia’s charity branch.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                The charity service was maintained with the generous support of
                Ethiopians in North America and local partners. Though it is
                satisfying to see helpless patients being supported through our
                charity, the lack of sustainable solutions to poor health
                service delivery and training remains a significant challenge.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose mb-4">
                Recognizing the need for sustainable solutions, we leverage our
                diverse expertise and partnerships to innovate and enact lasting
                change. HELP Ethiopia is run by a team of professionals who are
                passionate and dedicated to making a positive impact in our
                community.
              </p>
            </div>
            <div className="relative mt-8 group">
              <img
                src={eteye}
                alt="Eteye's Image"
                loading="lazy"
                className="w-full h-auto grayscale-[0.15] group-hover:grayscale-0 transition-all duration-700 rounded-lg"
              />
              <div className="absolute -inset-2 border-2 border-blue-400 rounded-lg opacity-20 pointer-events-none"></div>

              <div className="absolute bottom-6 left-6">
                <span className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-blue/50 backdrop-blur-md px-4 py-1.5 rounded-full">
                  Our Root
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;
