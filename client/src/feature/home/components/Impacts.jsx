import { stats } from "../constant";
import bg from "../../../assets/impact.jpg";

const Impact = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden flex items-center justify-center font-text">
      <img
        className="absolute inset-0 z-0 object-cover object-center w-full h-full"
        src={bg}
        alt="Impact background image"
      />

      <div className="absolute inset-0 z-0 bg-linear-to-br from-darkblue/95 via-darkblue/85 to-darkblue/95" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Our Impact
          </h2>
          <p className="text-bg text-xs sm:text-sm md:text-base leading-6 md:leading-loose text-center">
            Measuring success through tangible results that transform lives and
            communities
          </p>
        </div>

        <div className="py-8 px-6 sm:px-12 border-y border-white/10 bg-white/5 backdrop-blur-[2px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-center justify-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="text-gold drop-shadow-[0_2px_8px_rgba(255,222,89,0.3)] transform transition-transform group-hover:scale-110 duration-300">
                  {stat.icon}
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-bg text-3xl sm:text-4xl font-bold tracking-tight drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-gold/90 text-xs sm:text-sm uppercase pt-2 sm:pt-4">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
