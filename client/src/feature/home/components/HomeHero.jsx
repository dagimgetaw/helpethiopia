import bg from "../../../assets/donate.jpg";

const EnhancedHero = () => {
  return (
    <section className="relative min-h-[82vh] md:min-h-[90vh] font-text">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="HELP Ethiopia transforming healthcare"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-gold">HELP ETHIOPIA</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
            Transforming healthcare through innovation & community empowerment.
          </p>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-5 h-5 border-t border-l border-gold" />
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-5 h-5 border-t border-r border-gold" />
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-5 h-5 border-b border-l border-gold" />
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-5 h-5 border-b border-r border-gold" />
    </section>
  );
};

export default EnhancedHero;
