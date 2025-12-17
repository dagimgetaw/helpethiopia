// src/feature/whatwedo/components/EnhancedHero.jsx
import { heroImages } from "../constant"

const EnhancedHero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background images collage */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-full">
          {heroImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Healthcare ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-yellow-500/10 mix-blend-multiply"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-yellow-400/20 to-blue-700/40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming <span className="text-blue-600">Healthcare</span>
              <br />
              <span className="text-yellow-500">Across Ethiopia</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
              Through <span className="font-bold text-blue-600">innovation</span>,
              <span className="font-bold text-yellow-600"> community empowerment</span>, and
              <span className="font-bold text-blue-600"> sustainable solutions</span> that create lasting impact.
            </p>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">1K+</div>
              <div className="text-gray-700 font-medium">Patients Helped</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600">15+</div>
              <div className="text-gray-700 font-medium">Active Programs</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">490+</div>
              <div className="text-gray-700 font-medium">Workers Trained</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600">245+</div>
              <div className="text-gray-700 font-medium">Volunteers</div>
            </div>
          </div>

          {/* Additional engaging photos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
            {[
              "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1516549655669-df565bc5d5e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            ].map((img, index) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden group">
                <img
                  src={img}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${index % 2 === 0 ? "bg-blue-500/20" : "bg-yellow-500/20"}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-5 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-5 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-300/40 rounded-full blur-lg animate-bounce"></div>
    </section>
  )
}

export default EnhancedHero
