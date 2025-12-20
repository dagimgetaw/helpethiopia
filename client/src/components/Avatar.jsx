const Avatar = ({ src, size, alt }) => {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-32 h-32 sm:w-40 sm:h-40",
  };

  return (
    <img
      src={src}
      loading="lazy"
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover border-4 border-white shadow`}
    />
  );
};

export default Avatar;
