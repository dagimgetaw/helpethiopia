// src/feature/whatwedo/components/CoreServices.jsx
const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: "Ye'Eteye Charity",
      description: "Direct financial aid for patients struggling with medical bills at Tikur Anbessa Hospital, focusing on rural and economically disadvantaged individuals.",
      icon: "❤️",
      color: "red",
      features: ["1000+ patients helped", "Rural area focus", "Multi-hospital operation"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quality Improvement",
      description: "Streamlining healthcare procedures, optimizing patient transfers, and implementing data-driven systems for better hospital management.",
      icon: "📊",
      color: "blue",
      features: ["15+ active programs", "Process optimization", "Data enhancement"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Education & Leadership",
      description: "Empowering the next generation of healthcare leaders through comprehensive training, mentorship, and capacity building programs.",
      icon: "👨‍🏫",
      color: "yellow",
      features: ["490+ trained", "Mentorship programs", "Leadership development"],
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container relative mx-auto px-4">
        {/* Section header with smaller fonts */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-blue-300"></div>
            <span className="text-blue-600 font-medium tracking-wider text-sm">OUR SERVICES</span>
            <div className="w-8 h-px bg-blue-300"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-blue-600">Healthcare</span> Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Focused initiatives creating sustainable impact across Ethiopia's healthcare system
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="group relative">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                {/* Floating number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center font-bold text-gray-700 border text-sm">
                  0{index + 1}
                </div>
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${service.gradient} text-white shadow-md`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'red' ? 'bg-red-400' : service.color === 'blue' ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${service.color === 'red' ? 'bg-gradient-to-r from-red-400 to-pink-400' : service.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gradient-to-r from-yellow-400 to-amber-400'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
