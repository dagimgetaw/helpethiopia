"use client"

import { Heart, ShieldCheck, GraduationCap, ArrowRight } from "phosphor-react"

const services = [
  {
    icon: <Heart className="text-gold w-6 h-6" weight="fill" />,
    title: "Ye'Eteye Charity",
    description:
      "Our charitable initiative has helped over 1000 patients who struggled to cover their medical bills, primarily from rural areas. We currently operate at Tikur Anbessa Specialised Hospital.",
  },
  {
    icon: <ShieldCheck className="text-blue w-6 h-6" weight="fill" />,
    title: "Quality Improvement",
    description:
      "HELP Ethiopia demonstrates commitment to continuous improvement by implementing impactful programs focusing on streamlining healthcare processes and optimizing patient experience.",
  },
  {
    icon: <GraduationCap className="text-darkblue w-6 h-6" weight="fill" />,
    title: "Education & Leadership",
    description:
      "We invest in the future by empowering the next generation of Ethiopians to become effective healthcare leaders through comprehensive training programs and mentorship.",
  },
]

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative rounded-xl p-[1.5px] bg-gradient-to-br from-gold via-blue to-darkblue hover:from-blue hover:via-gold hover:to-darkblue transition-all duration-500">
      <div className="mb-6 flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gold/10 transition-colors">{icon}</div>
        <h3 className="text-xl font-semibold text-darkblue">{title}</h3>
      </div>

      <p className="text-darkgray text-base leading-relaxed mb-6 flex-grow">{description}</p>

      <div className="pt-6 border-t border-gray-100 mt-auto">
        <button className="flex items-center gap-2 text-sm font-semibold text-blue hover:text-darkblue transition-colors group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" weight="bold" />
        </button>
      </div>
    </div>
  )
}

export default function Service() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-4">Our Core Services</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-6"></div>
          <p className="text-darkgray text-lg max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive healthcare solutions through strategic initiatives designed to transform the
            Ethiopian medical landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
