const Impact = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Lives Impacted",
      description: "Individuals directly benefited from our programs",
      color: "blue",
    },
    {
      number: "120+",
      label: "Communities Served",
      description: "Villages and towns reached across Ethiopia",
      color: "yellow",
    },
    {
      number: "5,000+",
      label: "Students Supported",
      description: "Children receiving education assistance",
      color: "blue",
    },
    {
      number: "30+",
      label: "Healthcare Facilities",
      description: "Clinics and health centers established",
      color: "yellow",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Through dedication and community partnership, we create measurable change across Ethiopia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                stat.color === "blue"
                  ? "bg-gradient-to-br from-blue-600 to-blue-700"
                  : "bg-gradient-to-br from-yellow-500 to-yellow-600"
              } rounded-xl p-8 text-center shadow-lg ring-2 ring-white`}
            >
              <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-10 shadow-lg ring-2 ring-blue-300">
          <div className="flex items-start gap-6">
            <svg
              className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Sustainable Development Goals</h3>
              <p className="text-white/95 text-base leading-relaxed">
                Our work aligns with the UN Sustainable Development Goals, focusing on health, education, clean water,
                and economic growth to create lasting positive change in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
