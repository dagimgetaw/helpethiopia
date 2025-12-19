// src/feature/whatwedo/components/SuccessStoriesGallery.jsx

const SuccessStoriesGallery = () => {
  // Success Stories
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

  // More moments images - use your actual images from public folder
  // Change this array in SuccessStoriesGallery.jsx
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
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-yellow-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real people. Real stories. Impact made possible by your generosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {story.condition}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-600 font-semibold">{story.age}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{story.location}</span>
                    </div>
                  </div>
                  <div className="text-3xl">❤️</div>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-4">{story.title}</h4>
                <p className="text-gray-700 mb-6 line-clamp-4">{story.story}</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Hospital: {story.hospital}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Treatment: {story.treatment}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Outcome: {story.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Success Photos */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            More <span className="text-blue-600">Moments</span> of <span className="text-yellow-600">Hope</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreMomentsImages.map((img, index) => (
              <div key={index} className="relative h-48 rounded-xl overflow-hidden group">
                <img
                  src={img}
                  alt={`Success ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load moment image: ${img}`);
                    // Fallback to Unsplash images if local images fail
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm">Story of Hope</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStoriesGallery;