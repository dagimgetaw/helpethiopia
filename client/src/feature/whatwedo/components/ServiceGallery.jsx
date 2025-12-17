// src/feature/whatwedo/components/ServiceGallery.jsx
import { services } from "../constant"

const ServiceGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-yellow-50/50">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
            >
              {/* Image Gallery */}
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {service.gallery.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-2xl shadow-xl ${
                        imgIndex === 0 ? "row-span-2 h-64" : "h-32"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          service.color === "blue"
                            ? "from-blue-900/40 to-transparent"
                            : "from-yellow-900/40 to-transparent"
                        }`}
                      ></div>
                      {imgIndex === 0 && (
                        <div className="absolute bottom-4 left-4">
                          <span
                            className={`px-4 py-2 rounded-full text-white font-bold ${
                              service.color === "blue" ? "bg-blue-600" : "bg-yellow-600"
                            }`}
                          >
                            {service.stats}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional service photos */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  ].map((img, photoIndex) => (
                    <div key={photoIndex} className="relative h-20 rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Service ${photoIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div
                  className={`p-8 rounded-3xl ${
                    service.color === "blue"
                      ? "bg-gradient-to-br from-blue-50 to-blue-100"
                      : "bg-gradient-to-br from-yellow-50 to-yellow-100"
                  } shadow-2xl`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`text-4xl mr-4 ${service.color === "blue" ? "text-blue-600" : "text-yellow-600"}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">{service.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${
                          service.color === "blue" ? "bg-blue-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <span className="text-gray-800 font-medium">Direct patient support</span>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${
                          service.color === "blue" ? "bg-blue-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <span className="text-gray-800 font-medium">Community outreach programs</span>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${
                          service.color === "blue" ? "bg-blue-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <span className="text-gray-800 font-medium">Sustainable healthcare solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGallery
