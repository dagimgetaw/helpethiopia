// src/feature/whatwedo/components/SimpleHero.jsx
const SimpleHero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-8 left-8 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-8 right-8 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-6 left-16 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            What <span className="text-blue-600">We Do</span>
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-5 text-base text-gray-700">
              <p>
                <strong className="text-blue-700 text-lg">HELP Ethiopia fights for better healthcare in Ethiopia.</strong> Our Ye'Eteye Health Charity directly aids patients struggling with medical bills at Tikur Anbessa Hospital.
              </p>
              
              <p>
                We go beyond finances, championing quality improvements in hospitals by streamlining procedures, improving patient transfers, and enhancing data management for better decision making. We also focus on optimizing hospital layouts for smoother patient flow and well-being.
              </p>
              
              <p>
                But HELP Ethiopia doesn't stop there. We invest in the future by building leadership skills in young Ethiopians, ensuring a new generation equipped to tackle healthcare challenges.
              </p>
            </div>
            
            {/* Pill tags at the bottom */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-medium text-sm">Charity Support</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full font-medium text-sm">Quality Improvement</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-medium text-sm">Education & Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
