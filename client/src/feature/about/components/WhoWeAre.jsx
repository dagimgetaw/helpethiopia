export default function WhoWeAre() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">We Are</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed border-l-4 border-blue-500 pl-4">
            HELP Ethiopia is a multidisciplinary non-profit organization committed to transforming lives across
            Ethiopia. We bring together healthcare professionals, educators, community leaders, and volunteers who share
            a common vision of a brighter future for Ethiopian communities.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed border-l-4 border-yellow-500 pl-4">
            Our team works tirelessly to address critical needs in healthcare access, quality education, leadership
            development, and sustainable economic opportunities. Through evidence-based programs and community
            partnerships, we create lasting change that empowers individuals and strengthens communities.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-5 pt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">10+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years of Impact</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-5 border-l-4 border-yellow-600 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-yellow-700">50K+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Lives Touched</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 sm:h-96 md:h-[450px] ring-4 ring-blue-200">
          <img
            src="/ethiopian-healthcare-workers-helping-community.jpg"
            alt="HELP Ethiopia team members working with community"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-yellow-900/20"></div>
        </div>
      </div>
    </section>
  )
}
