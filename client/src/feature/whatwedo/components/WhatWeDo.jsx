// src/feature/whatwedo/components/WhatWeDo.jsx
import EnhancedHero from "./EnhancedHero"
import ServiceGallery from "./ServiceGallery"
import SuccessStoriesGallery from "./SuccessStoriesGallery"
import MissionVision from "./MissionVision"
import "./WhatWeDoAnimations.css"

const WhatWeDo = () => {
  // Define impactStats directly here
  const impactStats = [
    {
      id: 1,
      value: "15+",
      label: "Active Programs",
      color: "blue",
      icon: "📋",
      description: "Ongoing healthcare initiatives"
    },
    {
      id: 2,
      value: "245+",
      label: "Dedicated Volunteers",
      color: "gold",
      icon: "🙋",
      description: "Committed individuals helping"
    },
    {
      id: 3,
      value: "1,056+",
      label: "Patients Helped",
      color: "blue",
      icon: "❤️",
      description: "Through Ye'Eteye Charity"
    },
    {
      id: 4,
      value: "490+",
      label: "Healthcare Workers Trained",
      color: "gold",
      icon: "👩‍⚕️",
      description: "Education & leadership programs"
    },
    {
      id: 5,
      value: "4,806+",
      label: "Indirect Beneficiaries",
      color: "blue",
      icon: "👨‍👩‍👧‍👦",
      description: "Community impact reach"
    }
  ];

  // Define partners directly here - USE PUBLIC PATHS
  const partners = [
    {
      id: 1,
      name: "Addis Ababa University",
      description: "Academic partner providing research and training support for healthcare initiatives.",
      logo: "/logos/aau-logo.jpg",  // ← Public folder path
      role: "Academic & Research Partner"
    },
    {
      id: 2,
      name: "Tikur Anbessa Hospital",
      description: "Clinical partner for patient care, medical training, and treatment programs.",
      logo: "https://placehold.co/200x100/dc143c/ffffff/png?text=Tikur+Anbessa+Hospital", // Better placeholder
      role: "Clinical & Treatment Partner"
    }
  ];

  // Debug: Test if logo loads
  console.log("Testing logo URL:", "http://localhost:3001/logos/aau-logo.jpg");

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Enhanced Services with Gallery */}
      <ServiceGallery />

      {/* Mission & Vision Section */}
      <MissionVision />

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

      {/* Partners - CLEAN VERSION WITH JUST LOGOS */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Display - Larger and centered */}
                  <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-6 overflow-hidden border-2 border-gray-200 p-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        console.error(`Failed to load logo: ${partner.logo}`);
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/120x120/cccccc/ffffff/png?text=Logo";
                      }}
                    />
                  </div>
                  
                  {/* Partner Info */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
                      {partner.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-center">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeDo