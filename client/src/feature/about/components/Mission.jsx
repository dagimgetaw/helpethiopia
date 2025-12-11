export default function Mission() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-12 sm:-mt-16 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border-2 border-yellow-400">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 256 256"
              aria-hidden="true"
            >
              <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16" />
              <circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" strokeWidth="16" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-700">Our Mission</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Empower communities in Ethiopia with quality healthcare, education, and sustainable development programs.
          </p>
        </div>

        {/* Vision Card - Elevated */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-6 sm:p-7 flex flex-col items-center text-center transform sm:-translate-y-6 hover:sm:-translate-y-8 hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-yellow-600"
              aria-hidden="true"
            >
              <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeWidth="16" />
              <path
                d="M16 128s-96-56-96-136a64 64 0 0 1 128 0 64 64 0 0 1 128 0c0 80-96 136-96 136z"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Our Vision</h3>
          <p className="text-white text-sm leading-relaxed">
            A healthier, more educated, and empowered Ethiopia where every individual can thrive.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border-2 border-yellow-400">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 256 256"
              aria-hidden="true"
            >
              <path
                d="M128 224s-96-56-96-136a64 64 0 0 1 128 0 64 64 0 0 1 128 0c0 80-96 136-96 136z"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-700">Our Values</h3>
          <ul className="text-gray-700 text-sm leading-relaxed space-y-1.5 text-left">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Integrity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Compassion</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Collaboration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Community Empowerment</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
