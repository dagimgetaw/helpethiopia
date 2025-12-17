import { services, impactStats, successStories, partners, heroImages } from "../constant"
import EnhancedHero from "./EnhancedHero"
import ServiceGallery from "./ServiceGallery"
import SuccessStoriesGallery from "./SuccessStoriesGallery"
import "./WhatWeDoAnimations.css"

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Enhanced Services with Gallery */}
      <ServiceGallery />

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  stat.color === "blue" ? "text-blue-600" : "text-yellow-600"
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-800 font-semibold">{stat.label}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <SuccessStoriesGallery />

      {/* Partners */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                    <div className="text-2xl">🏢</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-gray-600">{partner.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeDo
