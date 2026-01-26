import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center font-text bg-bg px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-darkblue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error number with creative design */}
        <div className="relative mb-6">
          <div className="text-9xl sm:text-[180px] md:text-[200px] font-bold text-gold/20 tracking-tighter select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gold via-amber-500 to-gold">
                404
              </div>
              <div className="absolute -inset-1 bg-linear-to-r from-gold/30 to-amber-500/30 blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Main message */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-4">
            Page Not Found
            <div className="h-1 w-24 bg-linear-to-r from-gold to-amber-500 mx-auto mt-3"></div>
          </h2>

          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-6 md:leading-loose max-w-xl mx-auto">
            The page you're looking for seems to have wandered off into the
            digital wilderness.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group relative px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base bg-linear-to-r from-gold to-amber-500 text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center min-w-50"
          >
            Return to Homepage
            <div className="absolute inset-0 border-2 border-gold/30 rounded-xl group-hover:border-gold/50 transition-colors duration-300"></div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 sm:py-4 bg-white text-gray-700 font-medium text-xs sm:text-sm md:text-base rounded-xl cursor-pointer border border-gray-300 hover:border-gold hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-sm min-w-50"
          >
            Go Back
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gold/30 rounded-tl-2xl"></div>
        <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-gold/30 rounded-tr-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b border-l border-gold/30 rounded-bl-2xl"></div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gold/30 rounded-br-2xl"></div>
      </div>
    </section>
  );
};

export default NotFoundPage;
