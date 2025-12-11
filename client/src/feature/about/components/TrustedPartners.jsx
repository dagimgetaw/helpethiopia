const TrustedPartners = () => {
  const partners = [
    {
      name: "Global Health Initiative",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#EAB308" strokeWidth="3" fill="white" />
          <path d="M50 25L55 40H70L58 48L63 63L50 55L37 63L42 48L30 40H45L50 25Z" fill="#EAB308" />
          <text x="50" y="80" textAnchor="middle" fill="#4B5563" fontSize="10" fontWeight="bold">
            GHI
          </text>
        </svg>
      ),
      description: "Supporting healthcare infrastructure and medical training programs across Ethiopia since 2010",
    },
    {
      name: "Education for All Foundation",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="30" width="80" height="50" rx="5" stroke="#EAB308" strokeWidth="3" fill="white" />
          <path d="M25 45H75M25 55H75M25 65H60" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="20" r="8" fill="#EAB308" />
          <text x="50" y="93" textAnchor="middle" fill="#4B5563" fontSize="9" fontWeight="bold">
            EFA
          </text>
        </svg>
      ),
      description: "Partnering to provide educational resources, teacher training, and scholarship opportunities",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Working together with leading organizations to amplify our impact and reach more communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{partner.logo}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Interested in partnering with us?{" "}
            <a href="#contact" className="text-yellow-500 hover:text-yellow-600 font-semibold underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners
