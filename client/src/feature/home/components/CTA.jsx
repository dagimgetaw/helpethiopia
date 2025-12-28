import { HandHeart, HandCoins } from "@phosphor-icons/react";

const CTA = () => {
  return (
    <section className="relative py-12 sm:py-16 font-text rounded-xl mx-6 sm:mx-12 md:mx-24 shadow-2xl overflow-hidden -mb-12">
      
      {/* Dark Blue Background with Slight Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b5f] via-[#233875] to-[#1a2b5f]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b5f]/20 via-[#233875]/25 to-[#1a2b5f]/20 backdrop-blur-xl"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hand Giving Top-Left - Static */}
      <div className="absolute top-4 left-4 w-20 h-20 z-10">
        <HandHeart 
          size={80} 
          weight="fill"
          className="text-[#ffde59] w-full h-full drop-shadow-lg"
          aria-label="Hand giving"
        />
      </div>

      {/* Hand with Coins Bottom-Right - Static */}
      <div className="absolute bottom-4 right-4 w-20 h-20 z-10">
        <HandCoins 
          size={80} 
          weight="fill"
          className="text-[#ffde59] w-full h-full drop-shadow-lg"
          aria-label="Hand receiving coins"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-white font-bold tracking-tight text-3xl sm:text-4xl mb-4">
          Be the Hope <span className="text-[#ffde59] bg-gradient-to-r from-[#ffde59]/20 to-[#ffde59]/10 px-2 py-1 rounded-lg">Ethiopia Needs</span>
        </h2>

        <p className="text-white/85 text-lg sm:text-xl mb-8 max-w-lg mx-auto">
          Your kindness today can change lives tomorrow.
        </p>

        <div className="flex justify-center">
          <a 
            href="http://10.240.69.50:3000/donate" 
            className="bg-[#ffde59] text-[#233875] px-6 py-3 rounded-md font-bold text-base shadow-md border border-[#ffde59]/30 inline-block"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA;
