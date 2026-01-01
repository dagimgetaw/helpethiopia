const moreMomentsImages = [
  "/images/whatwedo/hero/photo_2025-12-19_13-57-35.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-57-56.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-58-07.jpg",
  "/images/whatwedo/hero/photo_2025-12-19_13-58-16.jpg",
  "/images/whatwedo/education/photo_2025-12-19_14-05-39.jpg",
  "/images/whatwedo/education/photo_2025-12-19_14-05-47.jpg",
  "/images/whatwedo/quality/photo_2025-12-19_14-03-48.jpg",
  "/images/whatwedo/quality/photo_2025-12-19_14-04-03.jpg",
];

const Hope = () => {
  return (
    <div className="py-6 bg-bg font-text">
      <div className="mx-6 sm:mx-16 md:mx-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center pb-12 text-darkblue">
          More Moments of <span className="text-gold">Hope</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {moreMomentsImages.map((img, index) => (
            <div
              key={index}
              className="relative h-48 rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Success ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hope;
