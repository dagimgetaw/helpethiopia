const SectionTitle = ({ title }) => {
  return (
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-darkblue mb-12 text-center relative">
      <span className="relative inline-block px-4 bg-gradient-to-r from-blue-50 to-white z-10">
        {title}
      </span>
      <span className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </h3>
  );
};

export default SectionTitle;
