"use client"

import { useState } from "react"
import { CaretDown, CaretUp } from "@phosphor-icons/react"

const whoWeAreImage = "/ethiopian-medical-professionals-team.jpg"

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-bg py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          
          {/* Text Content */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-darkblue tracking-tight">
                How <span className="text-blue">We Started</span>
              </h2>
              <div className="h-1 w-16 bg-gold rounded-full" />
            </div>

            <div className="space-y-3 text-darkgray text-base leading-relaxed text-justify">
              <p className="border-l-4 border-blue pl-5">
                HELP Ethiopia was established by a group of medical doctors and other professionals based in Ethiopia,
                together with members of the Ethiopian diaspora, united by a shared commitment to serve their
                communities.
              </p>

              <p className="border-l-4 border-gold pl-5">
                The organization originated from a deep desire to address persistent challenges in healthcare delivery.
                Its charity arm, <strong className="text-darkblue">Eteye Health Charity</strong>, was founded through a
                fund granted in memory of Woizero Yewoinshet Seifu by her family members, who affectionately called her{" "}
                <strong className="text-blue">Eteye</strong>. As "Eteye" is a term widely used in Ethiopia to express
                affection, it was adopted as the official name of HELP Ethiopia's charity branch.
              </p>

              <p className="border-l-4 border-blue pl-5">
                The charity initiative was sustained through the generous support of Ethiopians in North America and
                strong local partnerships. While providing care to vulnerable patients has been deeply meaningful, the
                absence of long-term, sustainable healthcare solutions remained a significant challenge.
              </p>

              {isExpanded && (
                <p className="border-l-4 border-gold pl-5 animate-in fade-in slide-in-from-top-2 duration-500">
                  Recognizing this need, HELP Ethiopia began leveraging its diverse professional expertise and strategic
                  partnerships to design and implement sustainable solutions. Today, the organization is led by
                  dedicated professionals committed to driving lasting impact across healthcare, education, leadership
                  development, and community empowerment.
                </p>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-blue font-bold text-base decoration-gold decoration-2 underline-offset-4 hover:underline transition-all"
            >
              {isExpanded ? (
                <>
                  Show Less <CaretUp weight="bold" className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read More <CaretDown weight="bold" className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
{/* Image Column */}
<div className="flex justify-center lg:justify-end h-full">
  <div className="relative w-full h-full max-w-lg rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white">
    <img
      src={whoWeAreImage}
      alt="HELP Ethiopia founding team and community"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-darkblue/40 to-transparent" />
    
    {/* Decorations */}
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10" />
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue/10 rounded-full blur-3xl -z-10" />
  </div>
</div>


        </div>
      </div>
    </section>
  )
}