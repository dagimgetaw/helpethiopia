// REMOVE ALL IMPORT STATEMENTS at the top

// Core Services - USE PUBLIC PATHS
export const services = [
  {
    id: 1,
    title: "Ye'Eteye Charity Program",
    description: "Our charitable initiative has helped over 1000 economically disadvantaged patients cover medical bills. We operate primarily at Tikur Anbessa Specialised Hospital and have expanded to Zewditu Memorial Hospital, focusing on patients from rural areas.",
    icon: "❤️",
    color: "blue",
    stats: "1,000+ Patients Helped",
    image: "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
    gallery: [
      "/images/whatwedo/yeeteye/photo_2025-12-19_14-01-59.jpg",
      "/images/whatwedo/yeeteye/photo_2025-12-19_14-02-12.jpg",
      "/images/whatwedo/yeeteye/photo_2025-12-19_14-02-21.jpg"
    ],
    details: [
      "Operates at Tikur Anbessa Specialised Hospital",
      "Expanded to Zewditu Memorial Hospital",
      "Focuses on rural area patients",
      "Covers medical bills for economically disadvantaged"
    ]
  },
  {
    id: 2,
    title: "Quality Improvement Programs",
    description: "We implement impactful programs focusing on streamlining healthcare processes, enriching data-driven decision-making, and optimizing patient experience through continuous improvement initiatives.",
    icon: "📊",
    color: "gold",
    stats: "15+ Active Programs",
    image: "/images/whatwedo/quality/photo_2025-12-19_14-04-13.jpg",
    gallery: [
      "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
      "/images/whatwedo/quality/photo_2025-12-19_14-04-03.jpg",
      "/images/whatwedo/quality/photo_2025-12-19_14-04-13.jpg"
    ],
    details: [
      "Streamlines healthcare processes",
      "Data-driven decision making",
      "Patient experience optimization",
      "Continuous improvement focus"
    ]
  },
  {
    id: 3,
    title: "Education & Leadership Training",
    description: "We empower the next generation of Ethiopians to become effective healthcare leaders through comprehensive training programs and mentorship initiatives, investing in the future of healthcare.",
    icon: "🎓",
    color: "blue",
    stats: "490+ Healthcare Workers Trained",
    image: "/images/whatwedo/education/photo_2025-12-19_14-05-47.jpg",
    gallery: [
      "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
      "/images/whatwedo/education/photo_2025-12-19_14-05-47.jpg",
      "/images/whatwedo/education/photo_2025-12-19_14-05-55.jpg"
    ],
    details: [
      "Healthcare leadership training",
      "Comprehensive mentorship programs",
      "Next generation empowerment",
      "Sustainable healthcare education"
    ]
  }
];

// Impact Statistics
export const impactStats = [
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

// Success Stories
export const successStories = [
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

// Partners - USE PUBLIC FOLDER PATHS
// Partners - JUST LOGOS, NO IMAGES
export const partners = [
  {
    id: 1,
    name: "Addis Ababa University",
    description: "Academic partner providing research and training support for healthcare initiatives.",
    logo: "/logos/aau-logo.jpg",
    role: "Academic & Research Partner"
  },
  {
    id: 2,
    name: "Tikur Anbessa Hospital",
    description: "Clinical partner for patient care, medical training, and treatment programs.",
    logo: "https://placehold.co/200x100/dc143c/ffffff/png?text=Tikur+Anbessa+Hospital",
    role: "Clinical & Treatment Partner"
  }
];

// Mission and Vision
export const missionVision = {
  mission: "To catalyze sustainable development in Ethiopia by empowering healthcare professionals, driving innovation, and fostering a comprehensive and inclusive healthcare ecosystem.",
  vision: "A Healthy and Resilient Ethiopia with advanced healthcare infrastructure, a well-trained workforce, streamlined processes, and inclusive healthcare services for all."
};

// Location information
export const locationInfo = {
  address: "Tikur Ambessa Teaching Hospital, Zambia Street, Addis Ababa, Ethiopia",
  phone: "+251-939-808-182",
  email: "helpforethiopia@gmail.com"
};

// Program areas
export const programAreas = [
  "Charity Patient Support",
  "Healthcare Quality Improvement",
  "Medical Education & Training",
  "Community Health Outreach",
  "Healthcare Leadership Development",
  "Hospital Process Optimization"
];

// Hero images for the enhanced hero section - USE PUBLIC PATHS
export const heroImages = [
  "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-57-56.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-58-07.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-58-16.jpg"
];