// About.jsx
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa"; // icons for mission, vision, values

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[300px]"
        style={{ backgroundImage: "url('/images/charity-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white font-serif tracking-wide">
            About HELP Ethiopia
          </h1>
          <p className="text-lg md:text-2xl text-white font-light max-w-2xl">
            We are a multidisciplinary non-profit organization dedicated to empowering communities in Ethiopia through healthcare, education, leadership, and sustainable development.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">

          {/* Mission */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-blue-500 text-center">
            <FaBullseye className="text-blue-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-serif">Our Mission</h2>
            <p className="text-gray-700">
              To empower communities in Ethiopia by expanding access to quality healthcare, education, and community partnerships.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-indigo-500 text-center">
            <FaEye className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-serif">Our Vision</h2>
            <p className="text-gray-700">
              A healthier, more educated, and empowered Ethiopia where every individual can thrive.
            </p>
          </div>

          {/* Values – fixed, aligned, ordered, indigo color like Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-indigo-500 text-center flex flex-col items-center">
            <FaHandsHelping className="text-indigo-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-serif">Our Values</h2>

            <ol className="list-decimal text-left text-gray-700 space-y-2 max-w-xs pl-5">
              <li>Integrity</li>
              <li>Compassion</li>
              <li>Collaboration</li>
              <li>Community Empowerment</li>
              <li>Sustainability</li>
            </ol>
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold font-sans">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            HELP Ethiopia is registered in Ethiopia as a multidisciplinary non-profit dedicated to supporting underserved communities. We partner with local and international stakeholders to address key development challenges, running programs in healthcare, education advocacy, and leadership development.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through strategic collaboration and community-led initiatives, we bring sustainable solutions that expand opportunities and improve quality of life for all Ethiopians. 
            (<a href="https://et.linkedin.com/company/help-ethiopia" className="text-blue-600 hover:underline">LinkedIn</a>)
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 font-sans">Highlights of HELP Ethiopia</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/healthcare.jpg"
                alt="Healthcare Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare Programs</h3>
                <p className="text-gray-700 text-sm">
                  Supporting communities with essential health services and awareness campaigns.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/education.jpg"
                alt="Education Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Education Initiatives</h3>
                <p className="text-gray-700 text-sm">
                  Empowering youth through scholarships, training, and learning resources.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/community.jpg"
                alt="Community Engagement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                <p className="text-gray-700 text-sm">
                  Partnering with local groups to create sustainable social and economic impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
