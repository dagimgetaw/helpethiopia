// src/feature/whatwedo/components/SuccessStoriesGallery.jsx

const SuccessStoriesGallery = () => {
  const successStories = [
    {
      id: 1,
      name: "Edel Solomon",
      age: "9 years",
      location: "Buraiyu, Oromia",
      condition: "Critical illness requiring ICU care",
      title: "A Sister's Love and a Family's Hope",
      story: "Edel Solomon is a brave 9-year-old girl from Buraiyu who faced one of the toughest battles of her young life. She spent over two months in the ICU and another month and a half in the B7 ward—almost four months in the hospital fighting for her life. Throughout this difficult time, her 11-year-old sister stayed by her side, sacrificing her own school attendance just to be close and offer comfort. Their father, who works tirelessly, could only visit once a week.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hospital: "Tikur Anbessa Specialised Hospital",
      treatment: "ICU care and extended hospitalization",
      outcome: "Recovering with family support"
    },
    {
      id: 2,
      name: "Ketele",
      age: "7 years",
      location: "Wolega, Oromia",
      condition: "Severe bacterial infection",
      title: "The Young Shepherd's Courageous Journey",
      story: "Ketele, a 7-year-old boy from Wollega, spends his days tending to animals as a young shepherd. One day, while caring for the herd, he fell from a horse and injured his chest. The pain was sharp and deep, but out of fear of being punished, he kept the accident a secret from his parents. Days later, the pain grew worse, and a persistent cough set in. His family took him to several local and referral hospitals, but answers were hard to find. Eventually, he was referred to Tikur Anbessa Specialized Hospital, where doctors discovered a severe bacterial infection. The infection had caused fluid to build up around his heart and lungs, making it difficult for him to breathe.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hospital: "Tikur Anbessa Specialised Hospital",
      treatment: "Treatment for bacterial infection",
      outcome: "Successful recovery after specialized care"
    },
    {
      id: 3,
      name: "Usman Debisa",
      age: "11 years",
      location: "Oromia",
      condition: "Chronic ITP",
      title: "A Second Chance for Usman",
      story: "Usman Debisa, an 11-year-old boy from Oromia, has been battling a rare autoimmune condition known as Chronic ITP. Diagnosed at Black Lion Hospital, his life took a difficult turn. For the past two years, his nose and gums have bled intermittently and uncontrollably, and his body has been covered in bruises. The illness forced him to leave school and stay home with his younger siblings. Once a bright and promising student, Usman is still in grade 1. His father, a farmer in rural Oromia with six children to care for, had exhausted all his savings trying to find a cure. When we found Usman in the Pediatric Casualty ward, he was unconscious and in shock. His condition was critical.",
      image: "https://images.unsplash.com/photo-1631815585544-4d60c37c8bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hospital: "Black Lion Hospital / Tikur Anbessa",
      treatment: "Chronic ITP management",
      outcome: "Ongoing treatment and support"
    }
  ];

  const moreMomentsImages = [
    "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
    "/images/whatwedo/hero/photo_2025-12-19_13-57-56.jpg",
    "/images/whatwedo/hero/photo_2025-12-19_13-58-07.jpg",
    "/images/whatwedo/hero/photo_2025-12-19_13-58-16.jpg",
    "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
    "/images/whatwedo/education/photo_2025-12-19_14-05-47.jpg",
    "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
    "/images/whatwedo/quality/photo_2025-12-19_14-04-03.jpg"
  ];

  return (
    <section className="py-12" style={{ background: "var(--color-bg)" }}> {/* Reduced padding-top from py-20 to py-12 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"> {/* Reduced margin-bottom from mb-16 to mb-12 */}
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-darkblue)", fontFamily: "var(--font-text)" }}>
            Success <span style={{ color: "var(--color-blue)" }}>Stories</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--color-darkgray)", fontFamily: "var(--font-text)" }}>
            Real people. Real stories. Impact made possible by your generosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="relative rounded-2xl overflow-hidden shadow-xl" // Removed hover effects
              style={{ background: "white" }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(35,56,117,0.4), transparent)" }}></div>
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                    style={{ background: "var(--color-blue)", color: "white" }}
                  >
                    {story.condition}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: "var(--color-darkblue)", fontFamily: "var(--font-text)" }}>{story.name}</h3>
                    <div className="flex items-center mt-1">
                      <span style={{ color: "var(--color-gold)", fontWeight: "600" }}>{story.age}</span>
                      <span className="mx-2" style={{ color: "var(--color-lightgray)" }}>•</span>
                      <span style={{ color: "var(--color-darkgray)" }}>{story.location}</span>
                    </div>
                  </div>
                  <div className="text-3xl" style={{ color: "var(--color-gold)" }}>❤️</div>
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "var(--color-darkblue)", fontFamily: "var(--font-text)" }}>{story.title}</h4>
                <p className="mb-6 line-clamp-4" style={{ color: "var(--color-darkgray)", fontFamily: "var(--font-text)" }}>{story.story}</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "var(--color-blue)" }}></div>
                    <span style={{ color: "var(--color-darkgray)", fontWeight: "500" }}>Hospital: {story.hospital}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "var(--color-gold)" }}></div>
                    <span style={{ color: "var(--color-darkgray)", fontWeight: "500" }}>Treatment: {story.treatment}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "var(--color-blue)" }}></div>
                    <span style={{ color: "var(--color-darkgray)", fontWeight: "500" }}>Outcome: {story.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 rounded-tr-2xl" style={{ borderTop: "4px solid var(--color-gold)", borderRight: "4px solid var(--color-gold)" }}></div>
            </div>
          ))}
        </div>

        {/* Additional Success Photos */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "var(--color-darkblue)", fontFamily: "var(--font-text)" }}>
            More <span style={{ color: "var(--color-blue)" }}>Moments</span> of <span style={{ color: "var(--color-gold)" }}>Hope</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreMomentsImages.map((img, index) => (
              <div key={index} className="relative h-48 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Success ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const fallbackImages = [
                      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1516549655669-df565bc5d5e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    ];
                    e.target.src = fallbackImages[index] || fallbackImages[0];
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStoriesGallery;
