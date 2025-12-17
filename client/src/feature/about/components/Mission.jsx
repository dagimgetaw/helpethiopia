export default function Mission() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-16 sm:-mt-20 z-10 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-7 sm:p-8 flex flex-col items-center text-center transition-shadow duration-300 border-2 border-blue-300 hover:shadow-xl">
          <div className="w-20 h-20 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 256 256"
              aria-hidden="true"
            >
              <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16" />
              <circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" strokeWidth="16" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-700">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Empower communities in Ethiopia with quality healthcare, education, and sustainable development programs.
          </p>
        </div>

        {/* Vision Card - Elevated */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl p-7 sm:p-8 flex flex-col items-center text-center transform sm:-translate-y-10 transition-all duration-300 ring-4 ring-yellow-300">
          <div className="w-20 h-20 mb-5 flex items-center justify-center rounded-full bg-white shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-yellow-600"
              aria-hidden="true"
            >
              <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeWidth="16" />
              <path
                d="M128 224s-96-56-96-136a64 64 0 0 1 128 0 64 64 0 0 1 128 0c0 80-96 136-96 136z"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
              />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white drop-shadow-lg">Our Vision</h3>
          <p className="text-white text-base leading-relaxed drop-shadow-md">
            A healthier, more educated, and empowered Ethiopia where every individual can thrive.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-7 sm:p-8 flex flex-col items-center text-center transition-shadow duration-300 border-2 border-blue-300 hover:shadow-xl">
          <div className="w-20 h-20 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
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
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-700">Our Values</h3>
          <ul className="text-gray-700 text-base leading-relaxed space-y-2 text-left">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Integrity</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Compassion</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Collaboration</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span>Community Empowerment</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
