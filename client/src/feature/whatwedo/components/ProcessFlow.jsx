// src/feature/whatwedo/components/ProcessFlow.jsx
const ProcessFlow = () => {
  const steps = [
    { number: "01", title: "Identification", icon: "🩺", desc: "Medical professionals identify patients in need" },
    { number: "02", title: "Assessment", icon: "📋", desc: "Case review based on medical & economic criteria" },
    { number: "03", title: "Approval", icon: "✅", desc: "HELP Ethiopia team approves support cases" },
    { number: "04", title: "Support", icon: "💰", desc: "Direct payment for medical expenses" },
    { number: "05", title: "Follow-up", icon: "📊", desc: "Regular monitoring until safe discharge" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header with smaller fonts */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium mb-4 text-sm">
              Our Systematic Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-blue-600">Ye'Eteye Charity</span> Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent, step-by-step process ensuring help reaches those who need it most
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-3 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step circle - smaller */}
                  <div className="relative w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex flex-col items-center justify-center">
                      <span className="text-2xl mb-1">{step.icon}</span>
                      <span className="text-xs font-bold text-white/90">STEP {step.number}</span>
                    </div>
                    
                    {/* Animated pulse effect */}
                    <div className="absolute inset-0 border-3 border-blue-300 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center px-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 mb-2">
                      <div className="w-5 h-5 mx-auto rotate-90 text-blue-300">
                        ↓
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
